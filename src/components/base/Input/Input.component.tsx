import clsx from 'clsx';
import { useState, useCallback, type Ref as IRef } from 'react';

import styles from './Input.module.scss';

type IInputType = 'text' | 'email' | 'tel';
type ITextAreaType = 'textarea';

interface IGeneralInputProps {
    className?: string;
    id: string;
    label: string;
    showLabel?: boolean;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    isRequired?: boolean;
    isDisabled?: boolean;
    withBottomMargin?: boolean;
}

interface IInputProps extends IGeneralInputProps {
    type: IInputType;
    // Uncontrolled component scenario
    inputRef?: IRef<HTMLInputElement>;
    // Controlled component scenario
    value?: string;
    onChange?: (value: string) => void;
}

interface ITextAreaProps extends IGeneralInputProps {
    type: ITextAreaType;
    // Uncontrolled component scenario
    inputRef?: IRef<HTMLTextAreaElement>;
    // Controlled component scenario
    value?: string;
    onChange?: (value: string) => void;
}

const getAdditionalProps = (type: IInputType | ITextAreaType) => {
    switch (type) {
        case 'tel':
            return { pattern: '\\+[0-9]{7,}' };
        case 'textarea':
            return { rows: 3 };
        default:
            return {};
    }
};

const Input: React.FC<IInputProps | ITextAreaProps> = ({
    className = '',
    id,
    type,
    label,
    showLabel = false,
    placeholder,
    minLength,
    maxLength,
    isRequired = false,
    isDisabled = false,
    withBottomMargin = true,
    inputRef,
    value,
    onChange,
}) => {
    const [isTouched, setIsTouched] = useState(false);
    const handleBlur = useCallback(() => setIsTouched(true), []);
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange?.(e.target.value),
        [onChange]
    );

    const inputContainerCn = clsx({
        [className]: Boolean(className),
        [styles['input-container']]: true,
        [styles['m-with-bottom-margin']]: withBottomMargin,
    });

    const inputCn = clsx({
        [styles['input']]: true,
        [styles['m-touched']]: isTouched,
        [styles[`m-${type}`]]: Boolean(type),
    });

    const labelCn = clsx({
        [styles['label']]: true,
        visuallyhidden: !showLabel, // Note: Even label not displayed visually, it is still vital for A11y
    });

    const inputProps = {
        className: inputCn,
        id,
        name: id,
        type,
        placeholder: `${placeholder}${isRequired ? '*' : ''}`,
        minLength,
        maxLength,
        required: isRequired,
        disabled: isDisabled,
        onBlur: handleBlur,
        onChange: handleChange,
        value,
        ...getAdditionalProps(type),
    };

    return (
        <fieldset className={inputContainerCn}>
            <label className={labelCn} htmlFor={id}>
                {`${label}:`}
            </label>
            {type !== 'textarea' ? (
                <input ref={inputRef} {...inputProps} />
            ) : (
                <textarea ref={inputRef} {...inputProps} />
            )}
        </fieldset>
    );
};

export default Input;
