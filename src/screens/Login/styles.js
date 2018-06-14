import { StyleSheet } from 'react-native';
import { MAIN_THEME } from '../../styles';


export default StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    marginTop: 30,
    borderRadius: 5,
    width:300
  },
  text: {
    textAlign: 'center',
    fontSize: MAIN_THEME.FONT_WEIGHT_MEDIUM
  },
  input: {
    paddingLeft: 20,
    height: 40,
    borderRadius: 5,
  },
});