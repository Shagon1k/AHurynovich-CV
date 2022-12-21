const hashCode = (str: string) => {
    let resultHash = 0,
        charCode,
        i = 0;
    if (str.length === 0) return resultHash;

    while (i < str.length) {
        charCode = str.charCodeAt(i);
        resultHash = (resultHash << 5) - resultHash + charCode;
        resultHash |= 0;
        i++;
    }

    return resultHash;
};

export default hashCode;
