const fs = require('fs');

module.exports = (req, res) => {
    if(req.path !== '/images/upload'){
        return true;
    }

    if(req.method === 'GET'){

        fs.readFile('./views/image-upload-form.html', (err, data) => {
            if(err){
                console.log(err);
                return;
            }

            res.writeHead(200, {
                'Content-type': 'text/html'
            });

            res.write(data);
            res.end();
        });

    }else if(req.method === 'POST'){

    }

};