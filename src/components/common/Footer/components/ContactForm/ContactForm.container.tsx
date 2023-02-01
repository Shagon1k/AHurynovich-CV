import ContactForm, { type ISendEmailData } from './ContactForm.component';

const TO_API_myEmail = 'shagon1k@gmail.com';

const TO_API_sendEmail = ({ fullName, email, phoneNumber, message }: ISendEmailData) => {
    const resultMessage = `${message}

Contact info:
Email: ${email}
${phoneNumber ? 'Phone number: ' + phoneNumber : ''}
    `;

    window.open(
        `mailto:${TO_API_myEmail}?subject=Offer from ${fullName}&body=${encodeURIComponent(resultMessage)}`
    );
};

interface IContactFormContainerProps {
    className?: string;
}

const ContactFormContainer: React.FC<IContactFormContainerProps> = ({ className }) => {
    return <ContactForm className={className} onSendEmail={TO_API_sendEmail} />;
};

export default ContactFormContainer;
