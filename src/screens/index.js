import { Navigation } from 'react-native-navigation';
import { ROUTES } from '../constants';
import Login from './Login';


const registerScreens = (store, Provider) => {
  Navigation.registerComponent(ROUTES.LOGIN, () => Login, store, Provider);
};

export default registerScreens;