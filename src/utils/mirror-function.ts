// Simply returns value passedinterface I
interface IMirrorFunctionSignature {
    <T>(value: T): T;
}

const mirrorFunction: IMirrorFunctionSignature = (value) => value;

export default mirrorFunction;
