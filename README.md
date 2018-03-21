# syns_async
Testing function. Check test.js for more detail.

### Example

```
sync_async.async_await(function* () {
          // Get page
          let page = yield getUrl('https://hd7exploit.wordpress.com');
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
})();

```

