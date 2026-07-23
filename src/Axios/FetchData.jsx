//!Example 1:
import axios from 'axios'
import { useEffect, useState } from 'react'

const FetchData = () => {
  let [items, setItems] = useState(null)
  useEffect(() => {
    let api = async () => {
      let { data: { products } } = await axios.get("https://dummyjson.com/products")
      setItems(products)
    }
    api()
  }, [])
  return (
    <table border={1} rules="all" cellPadding={10} width="100%">
      <thead>
        <tr>
          <th>Sl.No.</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          items && items.map((product) => {
            return <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td><img src={product.images[0]} alt={product.title} height="200" width="200"/></td>
              <td>${product.price}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default FetchData

//!Example 2:
import axios from 'axios'
import { useEffect, useState } from 'react'

const FetchData = () => {
  let [items, setItems] = useState()
  useEffect(() => {
    let api = async () => {
      let { data: { recipes } } = await axios.get("https://dummyjson.com/recipes")
      setItems(recipes)
    }
    api()
  }, [])
  return (
    <table border={1} rules="all" cellPadding={10} width="100%">
      <thead>
        <tr>
          <th>Sl.No.</th>
          <th>Recipe</th>
          <th>Cuisine</th>
          <th>Ingredients</th>
          <th>Instructions</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {
          items?.map((recipe) => {
            return <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.instructions}</td>
              <td><img src={recipe.image} alt={recipe.name} height="200" width="200"/></td>
           </tr>
         })
        }
      </tbody>
    </table>
  )
}

export default FetchData