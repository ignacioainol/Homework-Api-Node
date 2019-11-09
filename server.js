const express = require('express');
const app = express();
const routes = require('./routes/routes');

//config
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//routes
app.use(routes);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});