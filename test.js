"use strict";
const sync_async = require('./index');
const request = require('request');

/**
 * Simulate sync of async functions ES5
 */
const process_data = (() => {
  return new Promise((resolve, reject) => {
      sync_async.async_await(function* () {
        
        // Get page
        let page = yield getUrl('hd7exploit.wordpress.com');
        //console.log(page);
        // Check URL
        let checkUrl = yield check('params').then((data)=>{
          console.log(data);
        }).catch((err)=>{
          console.log(err);
        });

        // Check error
        let checkErrs = yield checkErr('params').then((data)=>{
          console.log(data);
        }).catch((err)=>{
          console.log(err);
        });
        const data = '===>>happy coding<====';
        resolve(data);
      })();
  });

});

function getUrl(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      resolve(body);
    });
  });
}

function check(url) {
  return new Promise((resolve, reject) => {
      setTimeout( function cb() {
        resolve('DONE');
      }, 2000);
  });
}

function checkErr(url) {
  return new Promise((resolve, reject) => {
    reject('ERR');
  });
}


/**
 * main fucnton 
 */
process_data().then((data)=>{
  console.log(data);
}).catch((err)=>{
  console.log(err);
})

