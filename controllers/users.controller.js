const db = require('../database');

// Cadastro
exports.createUser = (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Preencha todos os campos" });
    }

    const userExistente = db.users.find(u => u.email === email);

    if (userExistente) {
        return res.status(400).json({ message: "Email já cadastrado" });
    }

    const novoUsuario = {
        id: db.users.length + 1,
        nome,
        email,
        senha,
        seguidores: [],
        seguindo: []
    };

    db.users.push(novoUsuario);

    res.status(201).json({ message: "Usuário criado com sucesso", user: novoUsuario });
};