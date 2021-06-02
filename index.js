/*
 * @Author: JoyWT
 * @Date: 2021-06-01 13:32:39
 * @LastEditors: JoyWT
 * @LastEditTime: 2021-06-02 13:31:36
 * @version: 1.0
 * @Description: 
 */

import GitHub from 'github-api';
import { Base64 } from 'js-base64';
var userName = "EnjoyWT";
var rpoName = "fileSystem";

// basic auth
var gh = new GitHub({
    token: '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'
});

// var me = gh.getUser("EnjoyWT"); // no user specified defaults to the user for whom credentials were provided

// me.listFollowers().then(function(data){
//     console.log("=======")
//     console.log(data.data)
//     console.log("=======")
// }).catch((error) => {
//     console.error(error);
// });
var rpo = gh.getRepo(userName,rpoName);

// rpo.getContents("main","test/test.js",false).then(function(data){
//     console.log("=======")
//     console.log(Base64.decode(data.data.content))
//     console.log("=======")
// }).catch((error) => {
//     console.error(error);
// });
rpo.writeFile("main", "test/test.js", "a test 3345", "test for file  ").then(function(data){
        console.log("=======")
        console.log(data)
        console.log("=======")
    }).catch((error) => {
        console.error(error);
});