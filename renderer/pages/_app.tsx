import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import Navbar from '../common/components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
