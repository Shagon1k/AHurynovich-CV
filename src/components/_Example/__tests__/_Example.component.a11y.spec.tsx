import { axe } from '@test-utils';
import { getRenderWithProviders } from '@test-utils/custom';

import Example from '../_Example.component';

const render = getRenderWithProviders();

describe('A11y test Example', () => {
    describe('when Example component was rendered', () => {
        it('should have no A11y violations', async () => {
            const { container } = render(<Example onMakeHelloClick={() => undefined} isHello />);
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });
});
