import { youtube } from 'scrape-youtube';
// const { youtube } = require('scrape-youtube');
import express from 'express';

const app = express();
const port = 3000;




// or

app.get('/search/:type/:q/:locale',async (req, myres) => {

    const options = {
        type: req.params.type,
        request: {
            headers: {
                Cookie: 'PREF=f2=8000000',
                'Accept-Language': req.params.locale
            }
        }
    };
    youtube.search(req.params.q,options).then((results) => {
        // Unless you specify a custom type you will only receive 'video' results
        // console.log(results.videos);
        myres.json(results);
    });


  
});

app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});