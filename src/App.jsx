import { useState, useEffect } from 'react'
import CategoriesFilter from './components/CategoriesFilter'
import CardContenitor from './components/CardContenitor'
import Search from './components/Search'

function App() {
  const [categories, setCategories] = useState([])
  const [prodotti, setProdotti] = useState([])
  const [filter, setFilter] = useState([])
  const [category, setCategory] = useState("electronics")
  useEffect(() => {
    async function getDataCategories(){
      try{
        let response = await fetch("https://fakestoreapi.com/products/categories")
        let data = await response.json()
        setCategories(data)
      } catch {
        console.log("errore!!!")
      }
    }

    async function getDataProducts(){
      try{
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json()
        setProdotti(data)
        setFilter(data)
      } catch {
        console.log("errore!!!")
      } 
    }
    getDataCategories()
    getDataProducts()
  }, [])

  function handleFilter(category){
    let filteredProducts = prodotti.filter(item => {
      if(item.category === category) return true
    })
    setFilter(filteredProducts)
  }
  function handleSearch(text){
    let filteredProducts = prodotti.filter(item => {
      if(item.title.toLowerCase().includes(text) && item.category === category) return true
    })
    setFilter(filteredProducts)
  }

  return (
    <>
      <h2>Categorie prodotti</h2>
      <CategoriesFilter categories={categories} handleFilter={handleFilter} setCategory={setCategory}></CategoriesFilter>
      <Search handleSearch={handleSearch}></Search>
      <h1>Prodotti:</h1>
      <CardContenitor prodotti={filter}></CardContenitor>
    </>
  )
}

export default App
