import React, { ReactElement } from 'react';
import classes from './CircleLoader.module.scss';

export interface IProps {
  centered?: boolean;
}

export default function CircleLoader({ centered }: IProps): ReactElement {
  return (
    <div className={centered ? classes.centered_wrapper : undefined}>
      <span className={classes.loader} />
    </div>
  );
}
