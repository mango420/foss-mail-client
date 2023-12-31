import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MailLayout from '../common/layout/MailLayout'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <MailLayout />
    </React.Fragment>
  )
}
