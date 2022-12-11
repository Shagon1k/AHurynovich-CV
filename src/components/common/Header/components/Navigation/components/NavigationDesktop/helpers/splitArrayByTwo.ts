const splitArrayByTwo = <T>(arr: T[]): [T[], T[]] => {
    const centerIndex = Math.round(arr.length / 2);

    return [arr.slice(0, centerIndex), arr.slice(centerIndex)];
};

export default splitArrayByTwo;
