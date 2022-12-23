// TS Style files extensions support
declare module '*.scss';
declare module '*.css';

// TS alias-imports support (e.g. for dynamic import)
declare module '@pages/*';

declare module '*.svg?url' {
    // declaration of import SVG to use as url (e.g. in <img> tag)
    const content: string;
    export default content;
}
declare module '*.svg' {
    // declaration of import SVG to use as React Component (e.g. <SVG />)
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png' {
    // declaration of import PNG to use as url (e.g. in <img> tag)
    const content: string;
    export default content;
}

declare module '*.webp' {
    // declaration of import WEBP to use as url (e.g. in <img> tag)
    const content: string;
    export default content;
}

// TS App Globals support
declare const WITH_PWA: boolean;
