import { useSelector } from 'react-redux';

import { selectA11yStatementMarkup } from '@slices/content-config/content-config.selector';

import AccessibilityStatementButton from './AccessibilityStatementButton.component';

interface IAccessibilityStatementButtonContainerProps {
    className?: string;
}

const AccessibilityStatementButtonContainer: React.FC<IAccessibilityStatementButtonContainerProps> = ({
    className,
}) => {
    const statementMarkup = useSelector(selectA11yStatementMarkup);

    return <AccessibilityStatementButton className={className} statementMarkup={statementMarkup} />;
};

export default AccessibilityStatementButtonContainer;
