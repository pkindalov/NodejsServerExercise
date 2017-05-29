

module.exports = (req, res) => {
    if(req.path !== '/images/upload'){
        return true;
    }

    if(req.method === 'GET'){

    }else if(req.method === 'POST'){
        
    }

};