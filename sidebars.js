// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [    {
      type: 'autogenerated',
      dirName: '.', // '.' means the current docs folder
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        {
          type: 'link',
          label: 'Stencil on Twitter',
          href: 'https://twitter.com/stenciljs',
        },
        {
          type: 'link',
          label: 'Stencil on Slack',
          href: 'https://stencil-worldwide.herokuapp.com/',
        },
        {
          type: 'link',
          label: 'Stencil on GitHub',
          href: 'https://github.com/ionic-team/stencil',
        },
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        { 
          type: 'doc',
          id: 'telemetry'
        },
        {
          type: 'link',
          label: 'Privacy Policy',
          href: 'https://ionic.io/privacy',
        },
      ],
    },
  ],
};

module.exports = sidebars;
