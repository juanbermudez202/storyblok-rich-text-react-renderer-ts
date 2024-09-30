import { CodeAttributes, HeadingAttributes, ImageAttributes } from '@marvr/storyblok-rich-text-types';
import { ReactNode } from 'react';
export declare type StoryblokRichtextContentType = "heading" | "code_block" | "paragraph" | "blockquote" | "ordered_list" | "bullet_list" | "list_item" | "horizontal_rule" | "hard_break" | "image" | "blok";
export declare const defaultBlocksResolvers: {
    doc: (children: ReactNode) => JSX.Element | null;
    heading: (children: ReactNode, attrs: HeadingAttributes) => JSX.Element | null;
    code_block: (children: ReactNode, attrs: CodeAttributes) => JSX.Element | null;
    image: (children: ReactNode, attrs: ImageAttributes) => JSX.Element | null;
    paragraph: (children: ReactNode) => JSX.Element | null;
    blockquote: (children: ReactNode) => JSX.Element | null;
    ordered_list: (children: ReactNode) => JSX.Element | null;
    bullet_list: (children: ReactNode) => JSX.Element | null;
    list_item: (children: ReactNode) => JSX.Element | null;
    horizontal_rule: () => JSX.Element | null;
    hard_break: () => JSX.Element | null;
};
