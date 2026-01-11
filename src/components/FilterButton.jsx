export default function FiltersButton({category, handleFilter, setCategory}){
    return (
        <button onClick={() => {
            handleFilter(category)
            setCategory(category)
        }}>{category}</button>
    )
}