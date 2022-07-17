import { getRenderWithProviders, screen } from 'test-utils';
import Example from '../Example.component';

const render = getRenderWithProviders();

/**
 * NOTE: Tests should be written with BDD principle.
 * Gherkin style is recommended.
 */

describe('RTL test Example', () => {
    describe('when Example component was rendered', () => {
        it('should display "Test" word', async () => {
            render(<Example onMakeHelloClick={() => {}} isHello />);
            expect(screen.getByText('Test')).toBeInTheDocument();
        });
    });
});
