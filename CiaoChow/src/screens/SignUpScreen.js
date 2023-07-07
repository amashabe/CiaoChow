import React, { Component } from 'react'
import { Image } from "expo-image";
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ImageBackground, TextInput, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import { calculateSize } from '../utils/scale';
import * as actions from '../actions/index';

const { width, height } = Dimensions.get('screen');

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: null,
        email: null,
        password: null
    }

    _onChangeUsername = (input) => {
        this.props.setStatetoNull();
        this.setState({ username: input })
    }

    _onEmailChange = (input) => {
        this.props.setStatetoNull();
        this.setState({ email: input })
    }

    _onPasswordChange = (input) => {
        this.setState({ password: input })
        this.props.setStatetoNull();
    }


    _registerUser = (username, email, password) => {
        this.props.registerUser(username, email, password);
    }

    render() {
        const { state: { username, email, password }, props: { error, isLoading } } = this; return (
            <KeyboardAvoidingView style={styles.container} behavior='position'>
                <ImageBackground style={styles.backgroundImg} source={require("../../assets/ellipse-14.png")}>
                    <Image style={styles.headerImg} contentFit="cover" source={require("../../assets/group-764.png")} />
                    <Text style={styles.registrationText}>Register</Text>
                </ImageBackground>
                <View style={styles.formContainer}>
                    <Text style={styles.inputText}>username</Text>
                    <TextInput placeholder="mucher" onChangeText={input => this._onChangeUsername(input)} style={styles.textInputContainer} />
                    <Text style={styles.inputText}>email</Text>
                    <TextInput autoCapitalize='none' placeholder="yourmail@mail.com" onChangeText={input => this._onEmailChange(input)} style={styles.textInputContainer} />
                    <Text style={styles.inputText}>password</Text>
                    <TextInput secureTextEntry={true} placeholder="your password" onChangeText={input => this._onPasswordChange(input)} style={styles.textInputContainer} />
                    {error ? <View style={styles.errorContainer}><Text style={styles.errorMessage}>{error}</Text></View> : null}
                    <TouchableOpacity onPress={() => this._registerUser(username, email, password)} style={styles.registerbtn}>
                        {isLoading ? <ActivityIndicator size={calculateSize(20)} color={'#fff'} /> : <Text style={styles.registerBtnText}>Register</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SignIn")} style={styles.btnTextHeight}>
                        <Text style={styles.haveAnAccText}>Have an account?<Text style={styles.btnText}>{' '}Login</Text></Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        error: state.auth.error,
        isLoading: state.auth.isLoading
    }
}

export default connect(mapStateToProps, actions)(SignUpScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImg: {
        height: height * 0.47
    },
    btnTextHeight: {
        marginBottom: calculateSize(-3)
    },
    errorMessage: {
        color: "#ff3333",
        fontWeight: '700',
        fontSize: calculateSize(15)
    },
    errorContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: calculateSize(5)
    },
    headerImg: {
        height: calculateSize(316.3),
        width: calculateSize(129),
        top: calculateSize(103),
        left: calculateSize(201)
    },
    registrationText: {
        color: "#FFF",
        left: calculateSize(20),
        fontSize: calculateSize(34),
        fontWeight: 700
    },
    formContainer: {
        marginTop: calculateSize(35),
        marginStart: calculateSize(21),
        marginEnd: calculateSize(21)
    },
    inputText: {
        color: '#333',
        fontSize: calculateSize(14),
        fontFamily: 'Inter_regular',
        fontWeight: 500
    },
    textInputContainer: {
        height: calculateSize(46),
        backgroundColor: '#e6e4e3',
        width: width * 0.9,
        borderRadius: 10,
        fontSize: calculateSize(12),
        fontWeight: '400',
        paddingStart: calculateSize(12),
        marginTop: calculateSize(7),
        marginBottom: calculateSize(7)
    },
    registerbtn: {
        backgroundColor: '#4CAD73',
        borderRadius: 10,
        height: calculateSize(54),
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: calculateSize(12)
    },
    registerBtnText: {
        color: "#fff",
        fontWeight: '600',
        fontSize: calculateSize(18)
    },
    haveAnAccText: {
        color: '#0EB177',
        textAlign: 'center',
        fontSize: calculateSize(12),
        fontWeight: '400',
        marginTop: calculateSize(25)
    },
    btnText: { fontWeight: '700', color: '#0EB177', textAlign: 'center', fontSize: calculateSize(12) }
})