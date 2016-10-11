import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
	//we set flex 1 style to view to say we want to take up as much space possible (full height)
	return (
		<Provider store={createStore(reducers)}>
			<View style={{ flex: 1 }}>
				<Header headerText="Tech Stack" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;

