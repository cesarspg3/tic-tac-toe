const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(require('./routes'));

app.listen(port, () => {
    console.log(`'Server started at http://localhost:${port}`);
});
