import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function About() {
  return (
    <Layout>
      <SEO title="about" path="/about" />
      <p>Hi, this is a blog</p>
    </Layout>
  );
}
