const express = require('express');

const app = express();

app.get('/', (_, res) => {
    res.send('Hello, world! Server is running.');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
