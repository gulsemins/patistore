import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import product_data from './product_data.json';
import ProductCard from './src/components/ProductCard';

function App() {
  const renderProduct = ({item}: any) => <ProductCard product={item} />;
  const [text, onChangeText] = useState('Arama yapınız...');
  return (
    <View style={styles.container}>
      <View style={styles.main_card_container}>
        <Text style={styles.main_title}>PATIKASTORE</Text>
        <TextInput placeholder="Ara..." style={styles.search_bar}></TextInput>

        <FlatList
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          data={product_data}
          renderItem={renderProduct}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main_title: {
    fontSize: 22,
    color: '#800080',
    fontWeight: '900',
    padding: 10,
  },
  main_card_container: {
    margin: 5,
    flex: 1,
  },
  search_bar: {
    height: 40,
    margin: 12,
    padding: 5,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    color: '#b7b9bc',
  },
});
export default App;
