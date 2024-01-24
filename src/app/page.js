// src/app/page.js

import React from 'react';
import Head from 'next/head';
import './globals.css';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Notion Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>My Notion Clone</h1>
      </header>

      <main className="main">
        <p>Welcome to your Notion clone!</p>
        {/* Content will be added here later */}
      </main>
    </div>
  );
}
