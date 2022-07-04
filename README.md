# The Principles and Feelings Cookbook

A poorly written, disorganized, and mostly useless cookbook. There will be no measurements provided, cause everything is by feeling. Because getting 90% of the way there with 10% of the effort is worthwhile 200% of the time.

### Adding categories

1. Add a new `gatsby-source-filesystem` to `gatsby-config`
1. Add a new collection to netlify cms
1. Add a new link to the nav bar

The `about` category is a one off category that is hidden from others, and manually read in the home page. Any other one off categories should be excluded from the `gatsby-node` query which gets all posts.
