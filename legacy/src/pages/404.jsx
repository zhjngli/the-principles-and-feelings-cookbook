import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404" />
      <p>
        Sorry, content not found! Go to <Link to="/">home</Link>.
      </p>
    </Layout>
  );
}
