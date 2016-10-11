import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
//we use * as to import all actions from the action file
import * as actions from '../actions';

class ListItem extends Component {
	//when user clicks selected item it will expand fade in animation
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		if (this.props.expanded) {
			console.log('matches');
			//flex 1 will wrap the text content inside
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
					{this.props.library.description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		// console.log('actions', actions);
		// console.log('selectLibrary function', this.props);
		// console.log('library id', this.props.library.id);
		// console.log('selected library id', this.props.selectedLibraryId);

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(this.props.library.id)}
			>
				<View>
					<CardSection>
						<Text style={styles.titleSize}>{this.props.library.title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleSize: {
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = (state, ownProps) => {
	//checks if selected id matches to library id
	const expanded = state.selectedLibraryId === ownProps.library.id;

	return { expanded };
};

//pass null in first argument if we are not using mapstatetoprops.
//second argument actions to let us dispatch in the component
export default connect(mapStateToProps, actions)(ListItem);

