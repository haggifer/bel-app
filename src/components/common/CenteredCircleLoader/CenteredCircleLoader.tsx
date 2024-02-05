import React, { ReactElement } from 'react';
import classes from './CenteredCircleLoader.module.scss';
import CircleLoader from '../CircleLoader/CircleLoader';

export default function CenteredCircleLoader(): ReactElement {
  return (
    <div className={classes.loader_container}>
      <CircleLoader />
    </div>
  );
}
