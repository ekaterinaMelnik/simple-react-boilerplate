import * as React from 'react';
import { history } from '../../../core/history';

const BottomNavigation = () => (
  <div>
    <div onClick={() => { history.goBack(); }}>{'Previous page'}</div>
    <div onClick={() => { history.goForward(); }}>{'Next page'}</div>
  </div>
);

export default BottomNavigation;
