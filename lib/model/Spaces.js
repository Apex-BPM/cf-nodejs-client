/*
Copyright 2015 Juan Antonio Breña Moral.

Licensed under the MIT License;
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://choosealicense.com/licenses/mit/

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/*jslint node: true*/
/*globals Promise:true*/
"use strict";

var httpUtils = require('../utils/HttpUtils');

function Spaces(_API_URL){
    this.API_URL = _API_URL;
    this.REST = new httpUtils();
}

Spaces.prototype.getSpaces = function(token_type,access_token){

    var url = this.API_URL + "/v2/spaces"
    var headers = {
        'Authorization': token_type + " " + access_token,
    };
    var body = { };  

    return this.REST.get(url, headers, body);   
}

Spaces.prototype.getSpace = function(token_type,access_token,guid){

    var url = this.API_URL + "/v2/spaces/" + guid
    var headers = {
        'Authorization': token_type + " " + access_token,
    };
    var body = { };  

    return this.REST.get(url, headers, body);   
}

/**
 * [getSpaceApps description]
 *
 *      qs: {
            'q': 'name:' + params.appName,
            'inline-relations-depth': 1
        }
 * 
 * @param  {[type]} token_type   [description]
 * @param  {[type]} access_token [description]
 * @param  {[type]} guid         [description]
 * @param  {[type]} filter       [description]
 * @return {[type]}              [description]
 */
Spaces.prototype.getSpaceApps = function(token_type,access_token,guid,filter){

    var url = this.API_URL + "/v2/spaces/" + guid + "/apps"
    var headers = {
        'Authorization': token_type + " " + access_token,
    };

    var body = { };
    if (filter) {
        body = filter;   
    }

    return this.REST.get(url, headers, body);   
}

module.exports = Spaces;
