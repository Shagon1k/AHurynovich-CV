// NOTE: Gherkin style is recommended.

import { getRenderWithProviders, screen } from 'test-utils/unit';

import Example from '../_Example.component';

const render = getRenderWithProviders();

describe('RTL test Example', () => {
    describe('when Example component was rendered', () => {
        it('should display "Test" word', async () => {
            render(<Example onMakeHelloClick={() => {}} isHello />);
            expect(screen.getByText('Test')).toBeInTheDocument();
        });
    });
});
