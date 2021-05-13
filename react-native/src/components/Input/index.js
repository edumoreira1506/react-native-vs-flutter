import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

const Input = ({ onChange, ...props }) => (
  <TextInput {...props} onChangeText={onChange} style={styles.container} />
);

export default Input;
