import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ children, onClick, ...props }) => (
  <TouchableOpacity style={styles.container} {...props} onPress={onClick}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

export default Button;
