import { StyleSheet } from 'react-native';

import { colors, DEFAULT_RADIUS } from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    borderWidth: 2,
    borderColor: colors.BLACK,
    borderRadius: DEFAULT_RADIUS,
    marginBottom: 15,
    marginTop: 15,
    paddingRight: 5,
    paddingLeft: 5,
    width: '60%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '40%',
    height: '100%',
  },
  button: {
    width: '55%',
    height: '80%',
  },
  list: {
    width: '90%',
  },
  item: {
    marginBottom: 10,
    width: '100%',
  },
});

export default styles;
