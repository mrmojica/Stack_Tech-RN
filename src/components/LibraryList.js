import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

	//since we want listview to run the instant our component is about to render
	componentWillMount() {
		//boilerplate for listview (can find in the docs)
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		//pass the data that you want to be within the listview
		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}
//the props library can be named anything, but is used to indicate 
//how many times we want listItem to duplicate using the value of the renderRow paramter
	renderRow(library) {
		return <ListItem library={library} />; 
	}

	render() {
		console.log(this.props);
		//render the listview
		return (
			<ListView
				dataSource={this.dataSource}
				//to tell the listview how to render a specific row
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	//console.log(state);
	return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

