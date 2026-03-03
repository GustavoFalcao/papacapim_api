let posts = [];
let postId = 1;

// Criar postagem
exports.createPost = (req, res) => {
    const { userId, conteudo } = req.body;

    const novaPostagem = {
        id: postId++,
        userId,
        conteudo,
        curtidas: [],
        respostas: []
    };

    posts.push(novaPostagem);

    res.status(201).json({
        message: "Postagem criada com sucesso",
        post: novaPostagem
    });
};

// Buscar postagem por ID
exports.getPostById = (req, res) => {
    const { id } = req.params;

    const post = posts.find(p => p.id == id);

    if (!post) {
        return res.status(404).json({ message: "Postagem não encontrada" });
    }

    res.json(post);
};

// Excluir postagem
exports.deletePost = (req, res) => {
    const { id } = req.params;

    const index = posts.findIndex(p => p.id == id);

    if (index === -1) {
        return res.status(404).json({ message: "Postagem não encontrada" });
    }

    posts.splice(index, 1);

    res.json({ message: "Postagem excluída com sucesso" });
};

// Curtir / Descurtir
exports.toggleLike = (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    const post = posts.find(p => p.id == id);

    if (!post) {
        return res.status(404).json({ message: "Postagem não encontrada" });
    }

    const jaCurtiu = post.curtidas.includes(userId);

    if (jaCurtiu) {
        post.curtidas = post.curtidas.filter(u => u !== userId);
        return res.json({ message: "Descurtido com sucesso", post });
    } else {
        post.curtidas.push(userId);
        return res.json({ message: "Curtido com sucesso", post });
    }
};

// Responder postagem
exports.replyPost = (req, res) => {
    const { id } = req.params;
    const { userId, conteudo } = req.body;

    const post = posts.find(p => p.id == id);

    if (!post) {
        return res.status(404).json({ message: "Postagem não encontrada" });
    }

    const resposta = {
        id: post.respostas.length + 1,
        userId,
        conteudo
    };

    post.respostas.push(resposta);

    res.json({
        message: "Resposta adicionada",
        post
    });
};

// Exibir feed
exports.getFeed = (req, res) => {
    res.json(posts);
};