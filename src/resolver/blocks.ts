import { CodeAttributes, HeadingAttributes, ImageAttributes } from '@marvr/storyblok-rich-text-types'
import React, { Attributes, FunctionComponent, ReactNode, createElement } from 'react'

export type StoryblokRichtextContentType =
  | "heading"
  | "code_block"
  | "paragraph"
  | "blockquote"
  | "ordered_list"
  | "bullet_list"
  | "list_item"
  | "horizontal_rule"
  | "hard_break"
  | "image"
  | "blok"
  | "table"
  | "tableRow"
  | "tableHeader"
  | "tableCell"

const simpleNodeResolver = (element: string | FunctionComponent) => (children: ReactNode): JSX.Element | null =>
  children != null ? createElement(element, null, children) : null

const emptyNodeResolver = (element: string | FunctionComponent) => (): JSX.Element | null =>
  createElement(element)

type TableCellProps = {
  colspan?: number;
  rowspan?: number;
  backgroundColor?: string;
  colwidth?: number[];
  'data-colwidth'?: string;
  style?: React.CSSProperties;
}

const tableCellNodeResolver = (el: string | FunctionComponent) => (children: ReactNode, props: TableCellProps): JSX.Element | null => {
    const tableCellProps: TableCellProps = {}
    const tableCellStyle: React.CSSProperties = {}
    if (props.colspan !== 1) {
        tableCellProps.colspan = props.colspan;
    }
    if (props.rowspan !== 1) {
        tableCellProps.rowspan = props.rowspan;
    }
    if (props.backgroundColor) {
        tableCellStyle.backgroundColor = props.backgroundColor;
    }
    if (Array.isArray(props.colwidth)) {
        if (props.colwidth.length === 1) {
            tableCellStyle['width'] = props.colwidth[0] + 'px'
        } else {
            tableCellProps['data-colwidth'] = props.colwidth.join(',')
        }
    }
    if (Object.keys(tableCellStyle).length > 0) {
        tableCellProps.style = tableCellStyle
    }
    return React.createElement(el, tableCellProps as Attributes, children)
}

const headingNodeResolver = (children: ReactNode, props: HeadingAttributes) =>
    React.createElement(`h${props.level}`, null, children)

export const defaultBlocksResolvers = {
  doc: simpleNodeResolver('div'),
  heading: headingNodeResolver,
  code_block: (children: ReactNode, attrs: CodeAttributes): JSX.Element | null =>
    createElement('pre', null, createElement('code', { className: attrs.class }, children)),
  image: (children: ReactNode, attrs: ImageAttributes): JSX.Element | null =>
    createElement('img', attrs, children),
  paragraph: simpleNodeResolver('p'),
  blockquote: simpleNodeResolver('blockquote'),
  ordered_list: simpleNodeResolver('ol'),
  bullet_list: simpleNodeResolver('ul'),
  list_item: simpleNodeResolver('li'),
  horizontal_rule: emptyNodeResolver('hr'),
  hard_break: emptyNodeResolver('br'),
}

export const defaultNodesResolvers = {
  heading: headingNodeResolver,
  code_block: (children: ReactNode, attrs: CodeAttributes): JSX.Element | null =>
    createElement('pre', null, createElement('code', { className: attrs.class }, children)),
  image: (children: ReactNode, attrs: ImageAttributes): JSX.Element | null =>
    createElement('img', attrs, children),
  paragraph: simpleNodeResolver('p'),
  blockquote: simpleNodeResolver('blockquote'),
  ordered_list: simpleNodeResolver('ol'),
  bullet_list: simpleNodeResolver('ul'),
  list_item: simpleNodeResolver('li'),
  horizontal_rule: emptyNodeResolver('hr'),
  hard_break: emptyNodeResolver('br'),
  table: simpleNodeResolver('table'),
  tableRow: simpleNodeResolver('tr'),
  tableHeader: tableCellNodeResolver('th'),
  tableCell: tableCellNodeResolver('td')
}
