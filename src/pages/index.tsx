import React from 'react';
import type { NextPage } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import { HomeContent } from '@/components/contents/HomeContent';

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <HomeContent />
    </AppLayout>
  );
};

export default Home;
