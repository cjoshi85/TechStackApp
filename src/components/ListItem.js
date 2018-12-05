import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TouchableWithoutFeedback,
    LayoutAnimation,
    UIManager
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardItem } from './common';


class ListItem extends Component {

    constructor(props) {
        super(props);
        UIManager.setLayoutAnimationEnabledExperimental && 
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <CardItem>
                    <Text style={{ flex: 1 }}> {library.description} </Text>
                </CardItem>     
            );
        }
    }
    render() {
        const { textStyle } = styles;
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardItem>
                        <Text style={textStyle}> { title} </Text>
                    </CardItem>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        expanded: state.selectedLibraryId === ownProps.library.id
    };
};

export default connect(mapStateToProps, actions)(ListItem);
