import { StyleSheet } from 'react-native';

import { colors, DEFAULT_RADIUS } from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE,
    width: '100%',
    height: '100%',
    borderRadius: DEFAULT_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.WHITE,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

export default styles;
