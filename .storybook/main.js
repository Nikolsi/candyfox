module.exports = {
    stories: ['../src/design/**/*.stories.mdx', '../src/design/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        // Links addon can be used to create links that navigate between stories in Storybook.
        '@storybook/addon-links',
        // Essentials "zero config" collection of addons for Storybook.
        '@storybook/addon-essentials'
    ]
}
