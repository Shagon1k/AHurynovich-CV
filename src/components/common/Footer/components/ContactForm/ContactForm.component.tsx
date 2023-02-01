import clsx from 'clsx';
import { useState } from 'react';

import Input from '@components/base/Input';
import Button from '@components/base/Button';
import { useTranslates } from '@reusables/custom-hooks';

import styles from './ContactForm.module.scss';

const MESSAGE_MIN_LENGTH = 25;

export interface ISendEmailData {
    fullName: string;
    email: string;
    phoneNumber?: string;
    message: string;
}

interface IContactFormProps {
    className?: string;
    onSendEmail: (sendData: ISendEmailData) => void;
}

const ContactForm: React.FC<IContactFormProps> = ({ className = '', onSendEmail }) => {
    const { t } = useTranslates();

    const cn = clsx({
        [className]: Boolean(className),
        [styles['contact-form']]: true,
    });

    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const getHandleInputChange = (inputName: string) => (newValue: string) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [inputName]: newValue,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSendEmail(formValues);
    };

    return (
        <form className={cn} onSubmit={handleSubmit}>
            <Input
                id='fullName'
                type='text'
                label={t('footer.contactForm.fullName.label')}
                placeholder={t('footer.contactForm.fullName.placeholder')}
                isRequired
                onChange={getHandleInputChange('fullName')}
                value={formValues['fullName']}
            />
            <Input
                id='email'
                type='email'
                label={t('footer.contactForm.email.label')}
                placeholder={t('footer.contactForm.email.placeholder')}
                isRequired
                onChange={getHandleInputChange('email')}
                value={formValues['email']}
            />
            <Input
                id='phoneNumber'
                type='tel'
                label={t('footer.contactForm.phoneNumber.label')}
                placeholder={t('footer.contactForm.phoneNumber.placeholder')}
                onChange={getHandleInputChange('phoneNumber')}
                value={formValues['phoneNumber']}
            />
            <Input
                className={styles['input-message']}
                id='message'
                type='textarea'
                label={t('footer.contactForm.message.label')}
                placeholder={t('footer.contactForm.message.placeholder')}
                minLength={MESSAGE_MIN_LENGTH}
                isRequired
                withBottomMargin={false}
                onChange={getHandleInputChange('message')}
                value={formValues['message']}
            />
            <Button title={t('footer.contactForm.getInTouch')} type='submit' />
        </form>
    );
};

export default ContactForm;
