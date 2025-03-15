const express = require('express');
const bodyParser = require('body-parser')
const userRouter = require('./routes/usuario');
const adminRouter = require('./routes/admin');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter);
app.use(adminRouter);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});