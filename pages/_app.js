import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';

const Sunny = ({ Component }) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <title>Sunny</title>
    </Head>
    <Component />
  </>
)

export default wrapper.withRedux(Sunny);