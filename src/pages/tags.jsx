import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

class TagsPageRoute extends React.Component {
  render() {
    const allTags = this.props.data.allMarkdownRemark.group;

    return (
      <Layout>
        <SEO title="tags" path="/tags" />
        <h1>all tags</h1>
        <ul>
          {allTags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

export default TagsPageRoute;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
