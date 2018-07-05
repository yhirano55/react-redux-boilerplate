import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import * as styles from '../stylesheets/App.css';

@CSSModules(styles)
export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <p styleName="title">Hello, World</p>
    );
  }
}
