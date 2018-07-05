import * as React from 'react';
import * as styles from '../stylesheets/App.css';

export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <p className={styles.title}>Hello, World</p>
    );
  }
}
