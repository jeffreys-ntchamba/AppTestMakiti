import React from 'react';
import { SafeAreaView } from 'react-native';
import ProductScreen from './src/screens/main/Product.screen';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductScreen />
    </SafeAreaView>
  );
}
