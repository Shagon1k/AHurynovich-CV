import { userEvent, screen } from '@test-utils';
import { getRenderWithProviders } from '@test-utils/custom';

import Example from '../_Example.component';

const render = getRenderWithProviders();

describe('RTL test Example', () => {
    describe('given Example component was rendered', () => {
        it('should display "Test" word', async () => {
            render(<Example onMakeHelloClick={() => undefined} isHello />);

            expect(screen.getByText('Test')).toBeInTheDocument();
        });

        describe('when "Hello" button was clicked', () => {
            it('should call appropriate callback', async () => {
                const mockedOnMakeHelloClick = jest.fn();
                render(<Example onMakeHelloClick={mockedOnMakeHelloClick} isHello />);

                await userEvent.click(screen.getByRole('button', { name: /make hello/i }));
                expect(mockedOnMakeHelloClick).toHaveBeenCalled();
            });
        });

        describe('when Hello state is falsy', () => {
            it('should display "Bye!!" message', () => {
                render(<Example onMakeHelloClick={() => undefined} isHello={false} />);

                expect(screen.getByText('Bye!!')).toBeInTheDocument();
                expect(screen.queryByText('Hello there!')).not.toBeInTheDocument();
            });
        });

        describe('when Hello state is truthy', () => {
            it('should display "Hello there!" message', () => {
                render(<Example onMakeHelloClick={() => undefined} isHello />);

                expect(screen.getByText('Hello there!')).toBeInTheDocument();
                expect(screen.queryByText('Bye!!')).not.toBeInTheDocument();
            });
        });
    });
});
