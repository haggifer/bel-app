import React, { ReactElement } from 'react';
import classes from './LoadErrorComponent.module.scss';

interface IProps {
  path: string;
}

export default function LoadErrorComponent({ path }: IProps): ReactElement {
  return (
    <p className={classes.error}>
      Unable to load a tab from path: <code>{path}</code>
    </p>
  );
}
