import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Item = ({ name, description }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default Item;
