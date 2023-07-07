import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SigninScreen from '../screens/SigninScreen';
import WelcomeScreens from '../screens/WelcomeScreens';

//Create Stack Navigators
const Stack = createNativeStackNavigator();

class AppNavigator extends Component {
    render() {
        const { props: { isLoggedIn } } = this;
        return isLoggedIn ? (
            <HomeScreen />
        ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreens} />
                <Stack.Screen name="SignIn" component={SigninScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const isLoggedIn = state.auth.isLoggedIn;
    const auth_token = state.auth.auth_token;
    return {
        isLoggedIn,
        auth_token
    }
}

export default connect(mapStateToProps, null)(AppNavigator);