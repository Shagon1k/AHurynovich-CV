import React from 'react';

export interface ISkipToContentLink {
    id: string;
    title: string;
    priority: number;
}

interface ISkipToContentContext {
    setSkipToContentLinks: React.Dispatch<React.SetStateAction<ISkipToContentLink[]>>;
}

/** Used to enhance application with ability to skip some parts moving to specific components right from the start */
export const SkipToContentContext = React.createContext<ISkipToContentContext | null>(null);
SkipToContentContext.displayName = 'SkipToContentContext';

export const SkipToContentProvider = SkipToContentContext.Provider;
export const SkipToContentConsumer = SkipToContentContext.Consumer;
