let mensagem = "";
try {
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrão",
        "Sabonete",
        "Detergente"
    ];

    const listaDeArgumentos = process.argv.slice(2);

    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    });

    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`este produto nos temos: ${produto}`));

    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosSolicitadosDisponiveis.find(produto => produto === argumento);
    });
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`este produto nos não temos: ${argumento}`));

    listaDeProdutosDisponiveis.sort()
    listaDeProdutosDisponiveis.forEach(produto => console.log(`este produto está disponivel: ${produto}`))

    mensagem = "Obrigado por comprar conosco, volte sempre";

} catch (e) {
    mensagem = "Não foi possivel prosseguir com a sua compra, tente novamente";
} finally {
    console.log(mensagem);
};