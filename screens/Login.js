import React, { Component } from 'react';
import { 
    View, 
    KeyboardAvoidingView, 
    StyleSheet, 
    TouchableOpacity, 
    Text, TextInput, 
    Alert, 
    Image,
    ImageBackground } from 'react-native';
import firebase from "firebase";

const bgImage = require("../assets/background1.png");
const bgImage2 = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleLogin = (email, password) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=>{
            this.props.navigation.navigate("Sistem");
        })
        .catch(error => {
            Alert.alert(error.message);
        })
    }

    render(){
        const { email, password } = this.state;
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <ImageBackground source={bgImage} style={styles.bgImage}>
                    <ImageBackground source={bgImage2} style={styles.bgImage}>
                        <View style={styles.upperContainer}>
                            <Image source={appIcon} style={styles.appIcon}/>
                            <Text style={styles.title}>Fazer Login</Text>
                        </View>
                        <View style={styles.lowerContainer}>
                            <TextInput
                            style={styles.textInput}
                            onChangeText={text => this.setState({email: text})}
                            placeholder={"Insira o endereço de email"}
                            placeholderTextColor={"#000"}
                            backgroundColor={"#CCCCCC"}
                            inputMode={"email"}
                            autoFocus
                            />
                            <TextInput
                            style={styles.textInput}
                            onChangeText={text => this.setState({password: text})}
                            placeholder={"Insira sua senha"}
                            placeholderTextColor={"#000"}
                            backgroundColor={"#CCCCCC"}
                            secureTextEntry
                            />
                            <TouchableOpacity style={styles.button}
                            onPress={()=>this.handleLogin(email, password)}>
                                <Text style={styles.buttonText}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#5653D4'
    },
    bgImage:{
        resizeMode: 'cover',
        justifyContent: 'center',
        flex: 1
    },
    upperContainer:{
        flex: 0.5,
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Rajdhani_600SemiBold',
        marginTop: 20
    },
    lowerContainer:{
        flex: 0.5,
        alignItems: 'center'
    },
    appIcon:{
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 50
    },
    textInput:{
        marginBottom: 25,
        padding: 20,
        borderRadius: 10
    },
    button:{
        textAlign: 'center',
        backgroundColor: '#DFF6DA',
        borderRadius: 15,
        padding: 10
    },
    buttonText:{
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 10,
        fontFamily: 'Rajdhani_600SemiBold'
    }
})