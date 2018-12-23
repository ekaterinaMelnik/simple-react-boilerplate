import * as React from 'react';
import { Switch } from 'react-router-dom';
import { MainWrapper } from '../Layouts/MainWrapper/MainWrapper';
import { routesMapper } from '../../core/Utils';
import routes from '../../routes.js';
import * as styles from './App.scss';
import '../../styles/_main.scss';

const App = () => (
  <div className={styles.text}>
    <MainWrapper>
      <Switch>{routesMapper(routes)}</Switch>
    </MainWrapper>
  </div>
);

export { App };
