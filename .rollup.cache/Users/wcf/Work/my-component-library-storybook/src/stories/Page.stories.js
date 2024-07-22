import { within, userEvent, expect } from '@storybook/test';
import { Page } from './Page';
const meta = {
    title: 'Example/Page',
    component: Page,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
};
export default meta;
export const LoggedOut = {};
// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('button', { name: /Log in/i });
        await expect(loginButton).toBeInTheDocument();
        await userEvent.click(loginButton);
        await expect(loginButton).not.toBeInTheDocument();
        const logoutButton = canvas.getByRole('button', { name: /Log out/i });
        await expect(logoutButton).toBeInTheDocument();
    },
};
//# sourceMappingURL=Page.stories.js.map