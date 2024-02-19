const url = 'https://principles-cookbook.netlify.app';
const title = 'the principles and feelings cookbook';
const description = "the principles and feelings cookbook";

module.exports = {
  siteMetadata: {
    siteUrl: url,
    title: title,
    description: description,
    author: 'Zhijiang Li'
  },
  trailingSlash: 'never',
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-emotion',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: `cookbook`,
        description: description,
        start_url: `/`,
        background_color: `#f0ead6`,
        theme_color: `#f0ead6`,
        display: `standalone`,
        icon: 'src/images/master-512.png',
        icon_options: {
          purpose: `any maskable`
        }
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          }
        ]
      }
    },
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'principles',
        path: `${__dirname}/writing/principles/`
      },
      __key: 'principles'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'techniques',
        path: `${__dirname}/writing/techniques/`
      },
      __key: 'techniques'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'recipes',
        path: `${__dirname}/writing/recipes/`
      },
      __key: 'recipes'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'about',
        path: `${__dirname}/writing/about/`
      },
      __key: 'about'
    },
    'gatsby-plugin-offline', // after manifest plugin
    {
      resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        noScript: false, // kept for better routing purposes
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeReactHelmetAttrs: false, // 'true' makes meta tags finnicky as there can be duplicates
        noInlineStyles: true, // doesn't make big difference since the site uses css-in-js
        removeGatsbyAnnouncer: false, // doesn't seem to work when true
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          'Referrer-Policy: strict-origin-when-cross-origin',
          'X-Content-Type-Options: nosniff',
          'X-Frame-Options: DENY',
          'X-XSS-Protection: 1; mode=block',
          "Content-Security-Policy: frame-ancestors 'none';",
        ]
      }
    }
  ]
};
