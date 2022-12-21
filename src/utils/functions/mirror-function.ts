// Simply returns value passed
interface IMirrorFunctionSignature {
    <TValue>(value: TValue): TValue;
}

const mirrorFunction: IMirrorFunctionSignature = (value) => value;

export default mirrorFunction;
