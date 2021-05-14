import React, { useMemo, useState, useRef, useCallback } from 'react';
import { View, StatusBar, FlatList } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Item from '../../components/Item';

import styles from './styles';

const items = Array(Number(2000))
  .fill({
    name: 'I am the item',
    description: 'Cool description',
  })
  .map((item, index) => ({
    ...item,
    id: index,
  }))

export default function HomePage() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        data={items}
        keyExtractor={({ id }) => id}
        style={styles.list}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.item}>
            <Item {...item} />
          </View>
        )}
      />
    </View>
  )
}
