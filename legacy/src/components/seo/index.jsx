import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ path, title, description, image }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  const md = data.site.siteMetadata;
  const seo = {
    // seo title different from browser title
    title: `${md.title}${title ? ` | ${title}` : ''}`,
    description: description || md.description,
    image: `${md.siteUrl}${image}`,
    url: `${md.siteUrl}${path || ''}`
  };
  return (
    <Helmet title={title} defer={false}>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={`${seo.description}`} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={seo.description} />
      {image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@zhjngli" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={md.description} />
      {image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}
