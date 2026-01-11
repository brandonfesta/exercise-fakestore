import FiltersButton from "./FilterButton"

export default function CategoriesFilter({categories, handleFilter, setCategory}){
    let categoriesButtons = categories.map(category=>(
        <FiltersButton category={category} handleFilter={handleFilter} setCategory={setCategory}></FiltersButton>
    ))
    return (
        <div>
            {categoriesButtons}
        </div>
    )
}