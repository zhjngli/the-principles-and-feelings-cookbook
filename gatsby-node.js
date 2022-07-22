const _ = require(`lodash`);
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  let result = await graphql(`{
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { category: { ne: "about" } } }
    ) {
      edges {
        node {
          fields {
            category
          }
          frontmatter {
            tags
          }
        }
      }
    }
  }`);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // gather all tags and categories
  let tags = [];
  let categories = [];
  result.data.allMarkdownRemark.edges.forEach((edge) => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
    if (_.get(edge, `node.fields.category`)) {
      categories.push(edge.node.fields.category);
    }
  });
  tags = _.uniq(tags);
  categories = _.uniq(categories);

  // create tag pages
  tags.forEach((tag) => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`;
    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tag-page/index.jsx`),
      context: {
        slug: tagPath,
        tag: tag
      }
    });
  });

  // create category pages
  categories.forEach(async (category) => {
    const categoryPath = `/${_.kebabCase(category)}/`;
    createPage({
      path: categoryPath,
      component: path.resolve(`src/templates/category-page/index.jsx`),
      context: {
        slug: categoryPath,
        category: category
      }
    });
  });

  // create post pages for each category
  const categoryQueries = categories.map((category) => {
    return graphql(`{
      allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { category: { eq: "${category}" } } }
      ) {
        edges {
          node {
            fields {
              slug
              category
            }
            frontmatter {
              tags
              date(formatString: "YYYY-MM-DD")
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }`);
  });
  const categoryResults = await Promise.all(categoryQueries);
  categoryResults.forEach((result) => {
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }
  
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      const node = edge.node;
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/post/index.jsx`),
        context: {
          slug: node.fields.slug,
          next: edge.next,
          prev: edge.previous
        }
      });
    });
  });

  return null;
};

// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    // view fileNode object properties
    // console.log(`fnode: ${JSON.stringify(fileNode, null, 2)}`);

    // slug based on post directory name
    const category = fileNode.sourceInstanceName;
    const frontmatterSlug = String(node.frontmatter.slug).replace(/ /g, '-');
    const slug = `/${category}/${frontmatterSlug}`;
    // insert slug to both markdown node
    createNodeField({ node, name: `slug`, value: slug });

    // insert category to both markdown node
    createNodeField({ node, name: 'category', value: category });

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map((tag) => `/tags/${_.kebabCase(tag)}/`);
      createNodeField({ node, name: `tagSlugs`, value: tagSlugs });
    }
  }
};
