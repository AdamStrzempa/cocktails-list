import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import { RefreshButton } from '../RefreshButton'
const { width } = Dimensions.get('window');

const propTypes = {
    getCocktails: PropTypes.func,
    error: PropTypes.string
}

export const ErrorLabel = ({
    getCocktails,
    error
  }) => {
    return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <RefreshButton getCocktails={getCocktails} />
      </View>
      <Text style={styles.textStyles}>{error}</Text>
      <View style={{ flex: 3 }}/>
    </View>
)}

ErrorLabel.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  textStyles: {
    fontSize: 15, 
    textAlign: 'center'
  }
});