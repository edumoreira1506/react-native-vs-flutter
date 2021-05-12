import React, { useMemo, useState } from 'react';
import { View, StatusBar, FlatList } from 'react-native';

import Input from '../../components/Input';
import Item from '../../components/Item';

import styles from './styles';

export default function HomePage() {
  const [amountOfItems, setAmountOfItems] = useState(10);

  const items = useMemo(() =>
    Array(Number(amountOfItems))
      .fill({
        name: 'I am the item',
        description: 'Cool description',
      })
      .map((item, index) => ({
        ...item,
        id: index,
      })),
    [amountOfItems]
  );

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.form}>
        <Input keyboardType="numeric" value={amountOfItems} onChange={setAmountOfItems} />
      </View>
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
