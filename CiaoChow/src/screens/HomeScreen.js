import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { connect } from 'react-redux';
import CarouselCards from '../components/CarouselCards';

import * as actions from '../actions/index';
import { Color } from "../GlobalStyles";
import { calculateSize } from '../utils/scale';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getCiaoChow();
    }

    render() {
        const { props: { food } } = this;
        if (food) {
            return (
                <CarouselCards data_food={food} />
            )
        }
        return (
            <View style={styles.container}>
                <ActivityIndicator size={calculateSize(50)} color={Color.white} />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        food: state.auth.food
    }
}

export default connect(mapStateToProps, actions)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.brandColorGreen
    }
});