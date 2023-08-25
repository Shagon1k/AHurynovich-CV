import { useSelector } from 'react-redux';

import { selectRecipientEmail } from '@slices/content-config/content-config.selector';

import ContactForm, { type ISendEmailData } from './ContactForm.component';

const getSendEmail =
    (receipentEmail: string) =>
    ({ fullName, email, phoneNumber, message }: ISendEmailData) => {
        const resultMessage = `${message}

Contact info:
Email: ${email}
${phoneNumber ? 'Phone number: ' + phoneNumber : ''}
    `;

        window.open(
            `mailto:${receipentEmail}?subject=Offer from ${fullName}&body=${encodeURIComponent(
                resultMessage
            )}`
        );
    };

const ContactFormContainer: React.FC = () => {
    const email = useSelector(selectRecipientEmail);
    const sendEmail = getSendEmail(email);

    return <ContactForm onSendEmail={sendEmail} />;
};

export default ContactFormContainer;
