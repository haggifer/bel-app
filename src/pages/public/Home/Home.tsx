import React, { ReactElement } from 'react';
import LazyTabs from '../../../components/layout/LazyTabs/LazyTabs';
import classes from './Home.module.scss';

export default function Home(): ReactElement {
  return (
    <>
      <h1 className={classes.title}>Lazy Tabs</h1>

      <LazyTabs />
    </>
  );
}
