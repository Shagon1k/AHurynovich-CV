import { DEVICE_TYPES_CONTEXT_VALUES_MAP, DEFAULT_DEVICE_TYPE } from '../../constants';

const getDeviceArgTypes = () => ({
    argTypes: {
        device: {
            name: 'Device type',
            control: 'select',
            options: Object.keys(DEVICE_TYPES_CONTEXT_VALUES_MAP),
        },
    },
    default: { device: DEFAULT_DEVICE_TYPE },
});

export default getDeviceArgTypes;
