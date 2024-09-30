import { LinkAttributes as LA, StyledAttributes } from '@marvr/storyblok-rich-text-types';
import { ReactNode } from 'react';
declare type LinkAttributes = LA & {
    anchor?: string;
};
export declare type StoryblokRichtextMark = "bold" | "italic" | "strike" | "underline" | "code" | "link" | "styled";
export declare const defaultMarkResolvers: {
    link: (children: ReactNode, { href, linktype, target }: LinkAttributes) => JSX.Element | null;
    styled: (children: ReactNode, attrs: StyledAttributes) => JSX.Element | null;
    bold: (children: ReactNode) => JSX.Element | null;
    strong: (children: ReactNode) => JSX.Element | null;
    italic: (children: ReactNode) => JSX.Element | null;
    strike: (children: ReactNode) => JSX.Element | null;
    underline: (children: ReactNode) => JSX.Element | null;
    code: (children: ReactNode) => JSX.Element | null;
    textStyle: (children: ReactNode, { color }: {
        color: string;
    }) => JSX.Element | null;
};
export {};
