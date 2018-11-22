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
import 'react-native';
import { AsyncStorage } from 'react-native'; 
import { Parse } from 'parse/react-native';

export default class ParseUtil {

    static getRestaurants(callback) {
       init(); 
        
        var restaurants = Parse.Object.extend("Restaurants");
        var query = new Parse.Query(restaurants);
        
        return query.find().then((results) => {
            var restaurantResults = [];
             // Parse the returned Parse.Object values
            for (let i = 0; i < results.length; i++) {
            var object = results[i];
            var restaurantDetails={};
            restaurantDetails.name = object.get('name');
            restaurantDetails.description = object.get('description');
            restaurantDetails.phone = object.get('phone');
            restaurantDetails.image = object.get('photo').url();
            
            restaurantResults.push(restaurantDetails);
            } 
            callback(restaurantResults);
      });
    }

    static getTopRated(callback) {
        init(); 
         
         var toprated = Parse.Object.extend("TopRated");
         var query = new Parse.Query(toprated);
         
         return query.find().then((results) => {
             var topratedResults = [];
              // Parse the returned Parse.Object values
             for (let i = 0; i < results.length; i++) {
             var object = results[i];
             var topratedDetails={};
             topratedDetails.name = object.get('name');
             topratedDetails.description = object.get('description');
             topratedDetails.phone = object.get('phone');
             topratedDetails.image = object.get('photo').url();
             topratedResults.push(topratedDetails);
             } 
             callback(topratedResults);
       });
     }

     static getOffers(callback) {
        init(); 
         
         var offers = Parse.Object.extend("Offers");
         var query = new Parse.Query(offers);
         
         return query.find().then((results) => {
             var offersResults = [];
             for (let i = 0; i < results.length; i++) {
             var object = results[i];
             var offersDetails={};
             offersDetails.image = object.get('photo').url();
             offersResults.push(offersDetails);
             } 
             callback(offersResults);
       });       
     }

     static login(user,pass,callback) {
        init(); 
        const userResult = Parse.User.logIn(user, pass).then((results) => {
            callback("success");
         }, (error) => {
            callback(error.message);
         });
       
     }

     static signup(username,pass,email,callback) {
        init(); 
        Parse.User.logOut(); 
        var user = new Parse.User();
        user.set("username", username);
        user.set("password", pass);
        user.set("email", email);
        
        user.signUp(null, {
            success: function(user) {
              callback("success");
            },
            error: function(user, error) {
              callback(error.message);
            }
          });
     }

     static logout() {
        init(); 
        Parse.User.logOut().then(() => {
            console.log("logout success ;;;;;;;;;");
          });
     }
}

const init = () =>
{
    var hostName="myHost";
    Parse.setAsyncStorage(AsyncStorage);
    Parse.initialize("myAppId", "myMasterKey");
    Parse.serverURL = 'http://' + hostName + '/mbaas';
  
}