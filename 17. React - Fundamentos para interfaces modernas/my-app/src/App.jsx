import { useState, useEffect } from "react";
import ProdutoCard from "./components/ProdutoCard";
import "./App.css";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";

function App() {
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: 'Produto 1',
            preco: 10.99,
            imagem: img1,
            descricao: 'Descrição do Produto 1'
        },
        {
            id: 2,
            nome: 'Produto 2',
            preco: 19.99,
            imagem: img2,
            descricao: 'Descrição do Produto 2'
        },
        {
            id: 3,
            nome: 'Produto 3',
            preco: 5.99,
            imagem: img3,
            descricao: 'Descrição do Produto 3'
        }
    ]);

    const [novoProduto, setNovoProduto] = useState({ nome: "", preco: "", imagem: "", descricao: "" });
    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar o recarregamento da página ao enviar o formulário

        if (novoProduto.nome.trim() === "") return;
        if (novoProduto.preco.trim() === "") return;
        if (novoProduto.descricao.trim() === "") return;

        const novoId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;

        const novo = { id: novoId, nome: novoProduto.nome, preco: parseFloat(novoProduto.preco), imagem: novoProduto.imagem, descricao: novoProduto.descricao };

        setProdutos([...produtos, novo]); // Adicionar a nova tarefa à lista de tarefas
        setNovoProduto({ nome: "", preco: "", imagem: "", descricao: "" }); // Limpar o campo de entrada após adicionar a tarefa
    }

    useEffect(() => {
        console.log("Produtos atualizados:", produtos);
        setTimeout(() => {
            console.log("Produtos atualizados após 2 segundos:", produtos);
        }, 2000);
    }, [produtos]);

    return (
        <main>
            <h1>Catálogo de produtos</h1>
            <h2>Adicione novos produtos:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o nome do novo produto:"
                    value={novoProduto.nome}
                    onChange={(e) => setNovoProduto({ ...novoProduto, nome: e.target.value })}
                />
                <input type="text" placeholder="Digite o preço do novo produto:"
                    value={novoProduto.preco}
                    onChange={(e) => setNovoProduto({ ...novoProduto, preco: e.target.value })}
                />
                <input type="text" placeholder="Digite o link da imagem do novo produto:"
                    value={novoProduto.imagem}
                    onChange={(e) => setNovoProduto({ ...novoProduto, imagem: e.target.value })}
                />
                <input type="text" placeholder="Digite a descrição do novo produto:"
                    value={novoProduto.descricao}
                    onChange={(e) => setNovoProduto({ ...novoProduto, descricao: e.target.value })}
                />
                <button type="submit">Adicionar</button>
            </form>
            <div className="produto-lista">
                {produtos.map((produto) => (
                    <ProdutoCard key={produto.id} produto={produto} />
                ))}
            </div>
        </main>
    )
}

export default App