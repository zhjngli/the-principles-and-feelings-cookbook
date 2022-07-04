const _ = require(`lodash`);
const path = require('path');

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  return (result = graphql(`{
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { category: { ne: "about" } } }
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
  }`).then((result) => {
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }

    // create blog post pages
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      const node = edge.node;
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/blog-post/index.jsx`),
        context: {
          slug: node.fields.slug,
          next: edge.next,
          prev: edge.previous
        }
      });
    });

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
    categories.forEach((category) => {
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
  }));
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
    const dashSepDirName = fileNode.relativeDirectory.split('-');
    const titleSlug = dashSepDirName.slice(3).join('-');
    const slug = `/${category}/${titleSlug}`;
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
