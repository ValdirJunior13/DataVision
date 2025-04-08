
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./Node/routes/usuario');
const adminRouter = require('./Node/routes/admin');
const errorHandler = require('./Node/middlewares/errorHandler');
const limiter = require('./Node/middlewares/rateLimiter');
const cors = require('cors');

const app = express();


export default App;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter); 
app.use(userRouter);
app.use(adminRouter);
app.use(errorHandler); 

const PORT = 3050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
