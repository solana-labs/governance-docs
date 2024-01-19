// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Governance UI Docs",
  tagline: "Realms Governance UI Documentation",
  url: "https://docs.realms.today",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Solana-labs", // Usually your GitHub org/user name.
  projectName: "governance-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl:
            "https://github.com/solana-labs/governance-docs/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Governance UI",
        logo: {
          alt: "Governance UI",
          src: "img/solana-logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "Introduction/realms",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/solana-labs/governance-docs/",
            label: "Docs GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/VsPbrK2hJk",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Realms_DAOs",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@RealmsSolana",
              },
              {
                label: "Website",
                href: "https://realms.today/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/solana-labs/governance-ui",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Solana Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
