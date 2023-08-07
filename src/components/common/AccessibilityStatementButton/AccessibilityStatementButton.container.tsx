import AccessibilityStatementButton from './AccessibilityStatementButton.component';

const TO_API_statementMarkup = `<div>Check WCAG 2.1 AA to follow -> add statement <ul><li>1</li><li>2</li></ul></div>`;

interface IAccessibilityStatementButtonContainerProps {
    className?: string;
}

const AccessibilityStatementButtonContainer: React.FC<IAccessibilityStatementButtonContainerProps> = ({
    className,
}) => {
    const statementMarkup = TO_API_statementMarkup as string;

    return <AccessibilityStatementButton className={className} statementMarkup={statementMarkup} />;
};

export default AccessibilityStatementButtonContainer;
