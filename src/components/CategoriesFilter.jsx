import FiltersButton from "./FilterButton"

export default function CategoriesFilter({categories, handleFilter}){
    let categoriesButtons = categories.map(category=>(
        <FiltersButton category={category} handleFilter={handleFilter}></FiltersButton>
    ))
    return (
        <div>
            {categoriesButtons}
        </div>
    )
}