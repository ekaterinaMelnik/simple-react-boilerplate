import * as React from 'react';
import * as styles from './App.scss';
import img from 'images/avatar.png';
import '../../styles/_main.scss';
// import img from '../../images/avatar.png';

const App = () => (
  <div className={styles.text}>
    <span>This is react app!!</span>
    <img src={img} />
  </div>
);

export default App;
