# syns_async

Check test.js for more detail how to use this.

### Installing

```
npm install syns_async

```

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
## Authors

* **Hd7exploit** 

## License

This project is licensed under the MIT License - see the LICENSE.md file for details


