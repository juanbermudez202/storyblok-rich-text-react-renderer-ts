import { ReactNode } from 'react';
import { defaultBlocksResolvers, StoryblokRichtextContentType } from './resolver/blocks';
import { defaultMarkResolvers, StoryblokRichtextMark } from './resolver/mark';
declare type StoryblokRichtextContent = {
    type: StoryblokRichtextContentType;
    attrs?: {
        level?: number;
        class?: string;
        src?: string;
        alt?: string;
        title?: string;
        order?: number;
        body?: Array<{
            _uid: string;
        }>;
    };
    marks?: {
        type: StoryblokRichtextMark;
        attrs?: {
            linktype?: string;
            href?: string;
            target?: string;
            anchor?: string;
            uuid?: string;
            class?: string;
        };
    }[];
    text?: string;
    content: StoryblokRichtextContent[];
};
export declare type StoryblokRichtext = {
    type: 'doc';
    content: StoryblokRichtextContent[];
};
export { Mark, Block } from '@marvr/storyblok-rich-text-types';
export declare type RenderOptionsProps = {
    blokResolvers?: {
        [k: string]: (props: any) => JSX.Element | null;
    };
    defaultBlokResolver?: (name: string, props: any) => JSX.Element | null;
    nodeResolvers?: Partial<typeof defaultBlocksResolvers>;
    markResolvers?: Partial<typeof defaultMarkResolvers>;
    defaultStringResolver?: (str: string) => JSX.Element;
};
export declare const render: (document: StoryblokRichtext | any, options?: RenderOptionsProps) => ReactNode | null;
