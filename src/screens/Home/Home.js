import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import { DrinkBox } from '../../components/DrinkBox'
import { ErrorLabel } from '../../components/ErrorLabel'

export default function Home (props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#6a51ae"
      />
      {props.cocktailsError && <ErrorLabel getCocktails={props.getCocktails} />}
      {
        props.cocktailsPending ? <ActivityIndicator size='large' color='white' /> : <FlatList
          data={props.cocktailsData}
          keyExtractor={(item) => item.idDrink }
          renderItem={({item}) => <DrinkBox key={item.id} strDrink={item.strDrink} strDrinkThumb={item.strDrinkThumb} idDrink={item.idDrink}/>}
        />
      }
      </SafeAreaView>
  )
}

Home.navigationOptions = {
  title: 'Random Drinks',
  headerTintColor: '#000',
  headerTitleStyle :{ flex: 1, textAlign: 'center',alignSelf:'center'},
  headerStyle: { backgroundColor: '#6a51ae' }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#6a51ae'
  }
});