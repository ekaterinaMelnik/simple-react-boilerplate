import * as React from 'react';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import TopNavigation from '../TopNavigation/TopNavigation';

const MainWrapper = ({ children }) => (
  <React.Fragment>
    <TopNavigation/>
    <div>{children}</div>
    <BottomNavigation />
  </React.Fragment>
);

export { MainWrapper };
