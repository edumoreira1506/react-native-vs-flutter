import { StyleSheet } from 'react-native';

import { colors, DEFAULT_RADIUS } from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE,
    borderRadius: DEFAULT_RADIUS,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.WHITE,
  },
  description: {
    color: colors.WHITE,
    fontStyle: 'italic'
  },
});

export default styles;
