import CategoryList from "./CategoryList";

const Categories = () => {
  const listaCategorias = [
    { id: 1, name: "Roupas", icon: "👕" },
    { id: 2, name: "Eletrônicos", icon: "📱" },
    { id: 3, name: "Calçados", icon: "👟" },
    { id: 4, name: "Acessórios", icon: "🎒" },
  ];

  return (
    <section className="categories">
      <h2>Categorias</h2>
      <CategoryList categories={listaCategorias} />
    </section>
  );
};

export default Categories;
