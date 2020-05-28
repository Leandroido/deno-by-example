const configs = require("./config");
module.exports = {
  title: "Deno By Example",
  tagline: "Deno By Example",
  url: "https://github.com/deepakshrma",
  baseUrl: "/deno-by-example/",
  favicon: "img/favicon.ico",
  organizationName: "deepakshrma", // Usually your GitHub org/user name.
  projectName: "deno-by-example", // Usually your repo name.
  ...configs,
  themeConfig: {
    ...configs.themeConfig,
    sidebarCollapsible: false,
    googleAnalytics: {
      trackingID: "UA-69472059-2",
    },
    navbar: {
      hideOnScroll: true,
      title: "Deno By Example",
      logo: {
        alt: "Deno By Exampl",
        src: "https://deno.land/logo.svg",
      },
      links: [
        {
          to: "01_hello_world",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/deepakshrma/deno-by-example",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/", // Set this value to '/'.
          path: "website",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/deepakshrma/deno-by-example/edit/master",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/deepakshrma/deno-by-example/edit/master/blog",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma, Inc. Built with Docusaurus.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
