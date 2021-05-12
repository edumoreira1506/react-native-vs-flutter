import React, { useMemo, useState, useRef, useCallback } from 'react';
import { View, StatusBar, FlatList } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Item from '../../components/Item';

import styles from './styles';

export default function HomePage() {
  const [amountOfItems, setAmountOfItems] = useState('10');
  const listRef = useRef();

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

  const handleScrollToTheBottom = useCallback(() => {
    if (!listRef.current) return;

    listRef.current.scrollToEnd();
  }, [listRef])

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.form}>
        <View style={styles.input}>
          <Input keyboardType="numeric" value={amountOfItems} onChange={setAmountOfItems} />
        </View>
        <View style={styles.button}>
          <Button onClick={handleScrollToTheBottom}>
            Bottom
          </Button>
        </View>
      </View>
      <FlatList
        ref={listRef}
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
