// JS-side check for User preferences setup
export const checkIfUserPrefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const checkIfUserPrefersDarkColorScheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;
