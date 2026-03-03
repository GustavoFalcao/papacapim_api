const express = require('express');
const app = express();

const usersRoutes = require('./routes/users.routes');

app.use(express.json());

app.use(usersRoutes);

const postsRoutes = require('./routes/posts.routes');

app.use(postsRoutes);

app.get('/', (req, res) => {
    res.json({ message: "API Papacapim rodando" });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});