import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.card_container}>
      <Image style={styles.product_img} source={{uri: product.imgURL}} />
      <Text style={styles.product_title}>{product.title}</Text>
      <Text style={styles.product_price}>{product.price}</Text>
      {product.inStock ? null : (
        <Text style={styles.product_stock}> Stokta Yok</Text>
      )}
    </View>
  );
};
export default ProductCard;
