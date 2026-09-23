const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello! Application deployed using GitHub Actions and Docker.');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
