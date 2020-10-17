module.exports = {
    stories: ['../src/design/**/*.stories.mdx', '../src/design/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        // Links addon can be used to create links that navigate between stories in Storybook.
        '@storybook/addon-links',
        // Essentials "zero config" collection of addons for Storybook.
        '@storybook/addon-essentials'
    ],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push(
            // load css | sass | scss
            {
                test: /\.(sa|sc|c)ss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        )
        // return the altered config
        return config
    }
}
