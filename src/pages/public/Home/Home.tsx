import React, { ReactElement } from 'react';
import LazyTabs from "./LazyTabs/LazyTabs";
import classes from "./Home.module.scss";

export default function Home(): ReactElement {
  return (
    <>
      <h1 className={classes.title}>Tabs</h1>

      <LazyTabs/>
    </>
  )
}