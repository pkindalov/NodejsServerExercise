const fs = require('fs');
const database = require('../database/database');

module.exports = (req, res) => {

    if(req.path === '/'){

       fs.readFile('./index.html', 'utf8', (err, data) => {
                if(err){
                    console.log(err);
                    return;
                }

                let images = database.getAll();

                let result = ' ';
                result += '<ul>';

                for (let image of images){
                    result += `
                    <li>
                        <a href="${image.url}">${image.name}</a>
                    </li>
                    
                    `;
                }

                result += '</ul>';

                data = data.replace('{{content}}', result);

                res.writeHead(200, {
                    'Content-type': 'text/html'
                });

                res.write(data);
                res.end();

            });
    }else{
        return true;
    }
};