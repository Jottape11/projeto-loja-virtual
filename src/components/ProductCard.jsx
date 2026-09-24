const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3>
      <p className="product-price">R$ {product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
