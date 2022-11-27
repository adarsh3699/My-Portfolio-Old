import React from 'react';

export declare interface AccordionProps {
    title?: string;
    show?: boolean;
    children?: React.ReactNode;
}
export declare function Accordion({ title, show, children }: AccordionProps): JSX.Element;
