import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../stylesheets/App.css';

const App = (props) => (
  <p styleName="title">Hello, {props.name}</p>
)

export default CSSModules(App, styles);
