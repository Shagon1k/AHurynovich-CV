import { axe, render } from '@test-utils';

import Example from '../_Example.component';

describe('A11y test Example', () => {
    describe('when Example component was rendered', () => {
        it('should have no A11y violations', async () => {
            const { container } = render(<Example onMakeHelloClick={() => undefined} isHello />);
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });
});
