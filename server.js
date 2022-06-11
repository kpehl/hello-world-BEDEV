const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {
    response.send('hello world');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});