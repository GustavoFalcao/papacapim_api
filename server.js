const express = require('express');
const cors = require('cors');

const app = express();

// 🟢 Ativar CORS antes das rotas
app.use(cors());

// Para interpretar JSON
app.use(express.json());

// Rotas
const usersRoutes = require('./routes/users.routes');
const postsRoutes = require('./routes/posts.routes');

app.use(usersRoutes);
app.use(postsRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.json({ message: "API Papacapim rodando" });
});

// Servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});