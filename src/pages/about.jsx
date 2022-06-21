import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function About() {
  return (
    <Layout>
      <SEO title="about" path="/about" />
      <p>
        A poorly written, disorganized, and mostly useless cookbook. There will be no measurements provided, cause
        everything is by feeling. Because getting 90% of the way there with 10% of the effort is worthwhile 200% of the time.
      </p>
    </Layout>
  );
}
