require('dotenv').config();
const app = require('./utils').app;
const v1 = require('./routers/router');

app.use('/', v1);
app.use('/about-us', v1);
app.use('/courses', v1);
app.use('/classmode', v1);
app.use('/contact', v1);
app.use('/enroll', v1);
const startApp = require('./utils').startApp;



