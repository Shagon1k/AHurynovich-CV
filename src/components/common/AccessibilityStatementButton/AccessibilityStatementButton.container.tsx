import AccessibilityStatementButton from './AccessibilityStatementButton.component';

const TO_API_statementMarkup = `
<h3>Conformance status</h3>
<p>
	The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
	<b>Aliaksei Hurynovich CV website</b> is <i>partially conformant</i> with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
</p>
Currently known exceptions are:
<ul>
    <li>
        1.4.12 Text Spacing: Letter spacing is 0.08 times the font size (instead of minimum 0.12), Word spacing is 0.11 times the font size (instead of minimum 0.16);
    </li>
</ul>
<p>I am constantly working towards improving the accessibility this website to provide an inclusive experience to all potential users.</p>
<h3>Feedback</h3>
<p>
    If you encounter accessibility barriers using this website, please let me know emailing <a class="email u-email" href="mailto:shagon1k@gmail.com">shagon1k@gmail.com</a>.
</p>
<hr>
<h3>Date</h3>
<p>
	This statement was created on <i>August 07, 2023</i> using <a href="https://www.w3.org/WAI/planning/statements/">W3C Accessibility Statement Generator Tool</a>.
</p>
`;

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
