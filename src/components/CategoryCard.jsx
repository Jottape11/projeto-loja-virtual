const CategoryCard = ({ category }) => {
    return (
        <div className="category-card">
            <span className="category-icon">{category.icon}</span>
            <p className="category-name">{category.name}</p>
        </div>
    )
}

export default CategoryCard