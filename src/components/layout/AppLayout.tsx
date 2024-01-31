import React from 'react';
import { AppShell, Container } from '@mantine/core';
import AppHeader from './AppHeader';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
  title: string;
  pageTitle?: string;
  backButton?: boolean;
};

export default function AppLayout({ title, children }: Props) {
  const links = [
    { link: '/', label: 'Home' },
    { link: '/about-me', label: 'About Me' },
  ];

  return (
    <>
      <Head>
        <title>{title} | Kasjful Kurniawan Pages</title>
      </Head>
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        padding="sm"
        header={<AppHeader links={links} />}
      >
        <Container size={'md'}>{children}</Container>
      </AppShell>
    </>
  );
}
