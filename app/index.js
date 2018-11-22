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
import React from 'react';

import { StackNavigator } from 'react-navigation';
import Home from './LoginHome';
import Login from './Login';
import ParseUtil from './data/ParseUtil'

const RootStack = StackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: LoginHome,
    navigationOptions: {
      header: null
  }
  },
});


export default class App extends React.Component {
  
  render() {
    return <RootStack />;
  }

}