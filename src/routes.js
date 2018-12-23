import { UserInfo } from './components/UserInfo/UserInfo';
import { UserLocation } from './components/UserLocation/UserLocation';

const routes = [
  {
    path: '/user-info',
    component: UserInfo
  },
  {
    path: '/user-location',
    component: UserLocation
  }
];

export default routes;
