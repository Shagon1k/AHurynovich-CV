import React, { useEffect } from 'react';

import { SkipToContentContext, type ISkipToContentLink } from '@reusables/skip-to-content.context';
import { mirrorFunction } from '@utils/functions';

/**
 * Custom hook to add some element to Skip To Content section
 * @param title - Link title to display
 * @param priority - Link order priority (default = 1), which is used to correct ordering if the one based on React rendering should be adapted
 */
export const useSkipToContent = (id: string, title: string, priority = 1) => {
    const skipToContent = React.useContext(SkipToContentContext);
    const setSkipToContentLinks = skipToContent?.setSkipToContentLinks || mirrorFunction;

    useEffect(() => {
        const newSkipToContentLink: ISkipToContentLink = { id, title, priority };
        setSkipToContentLinks((prevSkipToContentLinks) =>
            [...prevSkipToContentLinks, newSkipToContentLink].sort(
                // order skip to links array based on their priority
                ({ priority: p1 }, { priority: p2 }) => p2 - p1
            )
        );

        return () => {
            setSkipToContentLinks((prevSkipToContentLinks) =>
                prevSkipToContentLinks.filter(({ id: skipToContentLinkId }) => skipToContentLinkId !== id)
            );
        };
    }, [setSkipToContentLinks, id, title, priority]);
};
