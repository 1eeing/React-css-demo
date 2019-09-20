import React from 'react';
import styles from './index.scss';

console.log(styles);

const CssModuleDemo = () => (
  <button className={[styles.button, 'text'].join(' ')}>Click it, This is render by Css Module.</button> //eslint-disable-line
);

export default CssModuleDemo;
