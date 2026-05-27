import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Menu({ data }) {
  const sections = (data.menuYaml && data.menuYaml.sections) || [];
  return (
    <Layout>
      <SEO title="menu" path="/menu" />
      <h1>menu</h1>
      <p>A loose list of things I might cook. Browse, then let me know what sounds good.</p>
      {sections.map((section) => (
        <section key={section.name}>
          <h2>{section.name}</h2>
          <ul>
            {(section.items || []).map((item) => (
              <li key={item.name}>
                <strong>
                  {item.recipe ? <Link to={`/${item.recipe}`}>{item.name}</Link> : item.name}
                </strong>
                {item.description && <span> — {item.description}</span>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query MenuPageQuery {
    menuYaml {
      sections {
        name
        items {
          name
          description
          recipe
        }
      }
    }
  }
`;
