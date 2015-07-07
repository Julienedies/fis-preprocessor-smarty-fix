# fis-preprocessor-smarty-fix


## usage

    $ npm install -g fis-preprocessor-smarty-fix
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js
fis.config.merge({
    modules : {
        preprocessor : {
            html : 'smarty-fix'
        }
    }
});
```