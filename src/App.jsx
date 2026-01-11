import { useState, useEffect } from 'react'
import CategoriesFilter from './components/CategoriesFilter'
import CardContenitor from './components/CardContenitor'
import Search from './components/Search'
import Carrello from './components/Carrello'

function App() {
  const [categories, setCategories] = useState([])
  const [prodotti, setProdotti] = useState([])
  const [filter, setFilter] = useState([])
  const [category, setCategory] = useState("electronics")
  const [cart, setCart] = useState([])
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
      if(category === "tutti") { 
        return true
      } else if(item.category === category){ 
        return true
      }
    })
    setFilter(filteredProducts)
  }
  function handleSearch(text){
    let filteredProducts = prodotti.filter(item => {
      if(item.title.toLowerCase().includes(text.toLowerCase()) && item.category === category) return true
    })
    setFilter(filteredProducts)
  }
  function handleAdding(id){
    let cartUpdate = prodotti.filter(item => {
      if(item.id === id) {
        setCart([item, ...cart])
      }
    })
  }
  function removeItem(id){
    let newCart = cart.filter(item => {
      if(item.id != id){return true}
    })
    setCart(newCart)
  }

  return (
    <>
      <Carrello cart={cart} removeItem={removeItem}></Carrello>
      <h2>Categorie prodotti</h2>
      <CategoriesFilter categories={categories} handleFilter={handleFilter} setCategory={setCategory}></CategoriesFilter>
      <Search handleSearch={handleSearch}></Search>
      <h1>Prodotti:</h1>
      <p>Risultati trovati {filter.length}</p>
      {filter.length === 0 ? <p>Nessun prodotto trovato</p> : <CardContenitor prodotti={filter} handleAdding={handleAdding}></CardContenitor>}
    </>
  )
}

export default App
