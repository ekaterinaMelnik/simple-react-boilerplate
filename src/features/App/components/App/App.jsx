import * as React from 'react';
import * as styles from './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.test}>
        {[1, 2, 3].map((item, index) => (
          <p key={index}>
            {item}
          </p>
        ))}
      </div>
    );
  }
}
