import React, {Fragment} from 'react';
import AppNavigator from './screens'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/createStore'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    );
};

export default App;