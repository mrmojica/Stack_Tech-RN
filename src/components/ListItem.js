import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

class ListItem extends Component {
	render() {
		return (
			<CardSection>
				<Text style={styles.titleSize}>{this.props.library.title}</Text>
			</CardSection>
		);
	}
}

const styles = {
	titleSize: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;

