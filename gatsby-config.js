const url = 'https://ts-blog.netlify.app';
const title = 'blog';
const description = "blog";

module.exports = {
  siteMetadata: {
    siteUrl: url,
    title: title,
    description: description,
    author: 'Zhijiang Li'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-glamor',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: `blog`,
        description: description,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
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
          'gatsby-remark-prismjs',
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
        name: 'posts',
        path: `${__dirname}/posts/`
      },
      __key: 'posts'
    },
    'gatsby-plugin-offline', // after manifest plugin
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}'
          ]
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          ignorePatterns: ['.eslintrc.js', 'gatsby-config.js', 'gatsby-node.js'],
          customOptions: {
            fix: true,
            env: {
              browser: true,
              node: true
            }
          }
        }
      }
    },
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
          'X-Content-Type-Options = nosniff',
          'X-Frame-Options: DENY',
          'X-XSS-Protection: 1; mode=block',
          "Content-Security-Policy: frame-ancestors 'none';",
        ]
      }
    }
  ]
};
