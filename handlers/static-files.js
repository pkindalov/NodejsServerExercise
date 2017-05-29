const fs = require('fs');

let getContentType = (url) => {
    
     let contentType = 'text/plain';
         if(url.endsWith('.css')){
             contentType = 'text/css';
        }else if(url.endsWith('.js')){
            contentType = 'application/javascript';
        }

        return contentType;
};


let validateExtensionOfFile = (path) => {
    if(path.endsWith('.css') || path.endsWith('.js') || path.endsWith('.html') || path.endsWith('.jpg')){
        return true;
    }

    return false;
};


module.exports = (req, res) => {
     fs.readFile('.' + req.path, (err, data) => {
                if(err || req.method !== 'GET' || !req.path.startsWith('/content') || !validateExtensionOfFile(req.path)){
                    res.writeHead(404, {
                        'Content-type':'text/plain'
                    });

                    res.write('Resource not found');
                    // res.end();
                }


                res.writeHead(200, {
                    'Content-type': getContentType(req.path)
                });
                res.write(data);
                res.end();

            });
};