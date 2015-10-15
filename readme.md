# async-catcher

async-catcher is an error catching wrapper for ES7 async/await functions in express.

#### Usage
```
    var catcher = require('async-catcher')
    
    app.get('/my/url', catcher(async function(req, res) {
        throw Error('Unhandled error');
    }));
```
In this scenario, the default handler will call Express's `next()` function and pass in the unhandled error.

You may also supply a handler:
```
    var catcher = require('async-catcher')
    
    app.get('/my/url', catcher(async function(req, res) {
        throw Error('Unhandled error');
    }, function(err, req, res){
        res.status(400).send('An error occurred');
    }));
```

## NOTE
This module does not inherently add async support, but plays well with the transpiled implementations from Babel and Traceur.