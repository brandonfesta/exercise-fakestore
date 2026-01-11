export default function FiltersButton({category, handleFilter}){
    return (
        <button onClick={() => handleFilter(category)}>{category}</button>
    )
}