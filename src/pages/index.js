import * as React from 'react';
import HomePage from './homepage/index';
import Layout from '../components/Layout';

import './styles.scss';

const pageStyles = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default IndexPage;
