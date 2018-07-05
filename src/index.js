import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => (
  <p>Hello, {props.name}</p>
)

ReactDOM.render(<App name="React" />, document.getElementById('root'));
