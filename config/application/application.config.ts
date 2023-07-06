export const APP_ROOT_ID = 'root';

export enum BP {
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
    XXL = 'XXL',
}

export const BP_TO_WIDTH = {
    [BP.XS]: [0, 319],
    [BP.S]: [320, 767],
    [BP.M]: [768, 1023],
    [BP.L]: [1024, 1365],
    [BP.XL]: [1366, 1919],
    [BP.XXL]: [1920, Infinity],
};
