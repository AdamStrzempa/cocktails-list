import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const propTypes = {
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    idDrink: PropTypes.string
}

export const DrinkBox = ({
    strDrink,
    strDrinkThumb,
    idDrink
  }) => (
    <View key={idDrink} style={styles.container}>
        <Image
          style={styles.imageStyles}
          source={{uri: strDrinkThumb}}
        />
      <Text style={styles.textStyles}>{strDrink}</Text>
    </View>
)

DrinkBox.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15, 
    margin: 5,
    marginHorizontal: 25,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageStyles: {
    width: 75,
    height: 75,
    borderRadius: 50
  },
  textStyles: {
    flex: 1,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold'
  }
});