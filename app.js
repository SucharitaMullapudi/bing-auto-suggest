var express = require('express')
var app = express();

// swagger-UI
var swaggerUi = require('swagger-ui-express'); 
swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const searchApi  = require("./routes/bing_search");
app.use('/v1/search',searchApi);

app.listen(3000,function(){
    console.log('app started on port 3000');
})