// src/components/Cart.tsx
import React from 'react';
import { View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addItem, removeItem, clearCart } from '../store/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <View>
      <Text>Cart Items:</Text>
      {cartItems.map((item) => (
        <View key={item.id}>
          <Text>{item.name} - ${item.price} x {item.quantity}</Text>
          <Button title="Remove" onPress={() => dispatch(removeItem(item.id))} />
        </View>
      ))}
      <Button
        title="Add Item"
        onPress={() =>
          dispatch(addItem({ id: '1', name: 'Product 1', price: 10, quantity: 1 }))
        }
      />
      <Button title="Clear Cart" onPress={() => dispatch(clearCart())} />
    </View>
  );
};

export default Cart;
