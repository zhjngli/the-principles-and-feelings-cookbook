import React from 'react';

import Form from '../components/form';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="contact" path="/contact" />
        <p>Curious or intrigued enough to have a chat? Fill out this form!</p>
        <Form />
      </Layout>
    );
  }
}
