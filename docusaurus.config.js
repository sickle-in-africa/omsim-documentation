import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'OMSIM',
    tagline: 'Data Harmonization Tool',
    favicon: 'img/favicon.png',
    url: 'https://sickleinafrica.org',
    baseUrl: '/omsim-documentation/',
    organizationName: 'sickle-in-africa',
    projectName: 'omsim-documentation',
    deploymentBranch: 'gh-pages',
    onBrokenMarkdownLinks: 'warn',
    onBrokenLinks: 'throw',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    future: {
        v4: true,
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    routeBasePath: '/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'OMSIM',
            logo: {
                alt: 'OMSIM Logo',
                src: 'img/omsim-logo.png',
            },
            items: [{
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Tutorial',
                },
                {
                    href: 'https://github.com/sickle-in-africa/data-harmonisation',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} OMSIM`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    }),
};

export default config;