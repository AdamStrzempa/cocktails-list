import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import HomeScreen from './Home'

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
}, {
  navigationOptions: {
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: '#1D213C'
    }
  }
})

const App = createAppContainer(MainNavigator);

export default App