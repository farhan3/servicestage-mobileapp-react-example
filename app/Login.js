/**
 * Copyright 2018 Huawei Technologies Co., Ltd. All rights reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Dimensions,
  Alert
} from 'react-native';

import ParseUtil from './data/ParseUtil'

const { width } = Dimensions.get('window');

export default class Login extends Component {
  static navigationOptions = {
    title : 'LOGIN',
    headerStyle: {
      backgroundColor: '#00a0fe',
    },
    headerTintColor: 'white',
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1,
      fontSize: 15,
    },
  };

  constructor(props) {
    super(props);
    state = {
      user   : '',
      password: ''
    }
    this.loginState = this.loginState.bind(this);
  }

  onClickListener = (viewId) => {
    if(viewId == "login")
    {
   const { user, password } = this.state;
   
   ParseUtil.login(user,password, this.loginState);
    }
    else if(viewId == "signup")
    {
      this.props.navigation.navigate('Signup');
    }
  }

  loginState(result) {
    if(result == "success")
    {
      this.props.navigation.navigate('Home');
     
    }
    else
    {
    Alert.alert("Error", "Login Failed."+result);
    }
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          style={styles.logo}
          source={require('./res/logo.png')}
        />

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./res/user.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Username"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(user) => this.setState({user})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./res/pass.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

       <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('signup')}>
            <Text>Signup</Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  logo: {
    width: width - 100,
    maxHeight: 100,
    marginBottom:20
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});