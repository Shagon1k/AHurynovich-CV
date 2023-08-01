import React, { type Dispatch as IDispatch, type SetStateAction as ISetStateAction } from 'react';

export interface ISkipToContentLink {
    id: string;
    title: string;
    priority: number;
}

interface ISkipToContentContext {
    setSkipToContentLinks: IDispatch<ISetStateAction<ISkipToContentLink[]>>;
}

/** Used to enhance application with ability to skip some parts moving to specific components right from the start */
export const SkipToContentContext = React.createContext<ISkipToContentContext | null>(null);
SkipToContentContext.displayName = 'SkipToContentContext';

export const SkipToContentProvider = SkipToContentContext.Provider;
export const SkipToContentConsumer = SkipToContentContext.Consumer;
