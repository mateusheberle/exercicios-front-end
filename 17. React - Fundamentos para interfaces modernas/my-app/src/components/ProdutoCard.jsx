import "./ProdutoCard.css";

function ProdutoCard({ produto }) {
  return (
    <div className="produto-card">
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco}</p>
      <img src={produto.imagem} alt={produto.nome} width="200px"/>
      <p>Descrição: {produto.descricao}</p>
    </div>
  );
}

export default ProdutoCard;