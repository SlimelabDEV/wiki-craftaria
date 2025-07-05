import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Craftaria - Wiki',
    tagline: 'Craftaria - Wiki',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'slimelab', // Usually your GitHub org/user name.
    projectName: 'wiki-craftaria', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr'],
    },

    plugins: [[ require.resolve('docusaurus-lunr-search'), {
        languages: ['fr', 'fr']
    }]],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Craftaria',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Wiki',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Communauté',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/67wyXVXjZC',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/SlimeLabMc',
                        },
                        {
                            label: 'Instagram',
                            href: 'https://instagram.com/slimelabmc/',
                        },
                        {
                            label: 'TikTok',
                            href: 'https://www.tiktok.com/@slimelabmc',
                        },
                    ],
                },
                {
                    title: 'Liens Utiles',
                    items: [
                        {
                            label: 'Site du serveur',
                            href: 'https://craftaria.fr/',
                        },
                        {
                            label: 'Slimelab',
                            href: 'https://slimelab.fr/',
                        },
                        {
                            label: 'YouTube',
                            href: 'https://www.youtube.com/@slimelabmc',
                        },
                        {
                            label: 'Règlement',
                            href: '/docs/Information/rules',
                        },
                    ],
                },
                {
                    title: 'Support',
                    items: [
                        {
                            label: '📅 Changelog',
                            to: 'https://discord.com/channels/1276157894789824605/1276157895167443007',
                        },
                        {
                            label: '📢 Annonces',
                            to: 'https://discord.com/channels/1276157894789824605/1276631885291982970',
                        },
                        {
                            label: '🎫 Tickets',
                            to: 'https://discord.com/channels/1276157894789824605/1276160360432402507',
                        },
                        {
                            label: 'Contact',
                            href: 'mailto:contact@nexushub.fr',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Craftaria. Tous droits réservés. Construit avec ❤️ par la communauté.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
