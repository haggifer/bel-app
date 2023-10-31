import React, { ReactElement } from 'react';
import classes from './CircleLoader.module.scss'

export default function CircleLoader(): ReactElement {
  return (
    <span className={classes.loader}/>
  )
}