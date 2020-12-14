import { LinkAttributes, Mark, StyledAttributes } from '@marvr/storyblok-rich-text-types'
import React, { FunctionComponent, ReactNode } from 'react'


const simpleMarkResolver = (element: string | FunctionComponent) => (children: React.ReactNode) =>
  React.createElement(element, null, children)

type GenericMarkResolver = {
  [key in Mark]: (children: ReactNode) => ReactNode
}

export type MarkResolvers = Omit<GenericMarkResolver, 'link' | 'styled'> & {
  link: (children: ReactNode, attrs: LinkAttributes) => ReactNode
  styled: (children: ReactNode, attrs: StyledAttributes) => ReactNode
};

export const defaultMarkResolvers: MarkResolvers = {
  [Mark.LINK]: (children: ReactNode, { href, target, linktype }: LinkAttributes) =>
    React.createElement('a', {
      href: linktype === 'email' ? `mailto:${href}` : href,
      target
    }, children),
  [Mark.STYLED]: (children: React.ReactNode, attrs: StyledAttributes) =>
    React.createElement('span', { className: attrs.class }, children),
  [Mark.BOLD]: simpleMarkResolver('b'),
  [Mark.STRONG]: simpleMarkResolver('strong'),
  [Mark.ITALIC]: simpleMarkResolver('i'),
  [Mark.STRIKE]: simpleMarkResolver('s'),
  [Mark.UNDERLINE]: simpleMarkResolver('u'),
  [Mark.CODE]: simpleMarkResolver('code')
}
