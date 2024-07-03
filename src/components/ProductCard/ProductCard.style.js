import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  search_bar: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },
  main_card_container: {
    margin: 5,
  },
  card_container: {
    margin: 5,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'column',
    textAlign: 'left',
    flex: 1,
  },
  product_title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  product_price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
  product_stock: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 18,
  },
  product_img: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: 'white',
    // height: Dimensions.get('window').height / 4,
    // width: 'auto',

    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});
