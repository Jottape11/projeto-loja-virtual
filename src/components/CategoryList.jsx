import CategoryCard from './CategoryCard';

const CategoryList = ({ categories }) => {
    return (
        <div className="category-list">
            {categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
            ))}
        </div>
    )
}

export default CategoryList