import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const propTypes = {
    getCocktails: PropTypes.func
}

export const RefreshButton = ({
    getCocktails
  }) => (
    <TouchableOpacity onPress={getCocktails} style={styles.buttonStyles}>
      <Text style={styles.textStyles}>Refresh</Text>
    </TouchableOpacity>
)

RefreshButton.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonStyles: { 
    width: 70, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    borderRadius: 15 
  },
  textStyles: {
    fontSize: 15,
    fontWeight: 'bold' 
  }
});