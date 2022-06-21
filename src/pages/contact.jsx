import React from 'react';

import Form from '../components/form';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="contact" path="/contact" />
        <p>Let&apos;s create something!</p>
        <p>Please fill out the form below for any inquiries.</p>
        <Form />
      </Layout>
    );
  }
}
