import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])



  return (
    <>
      <h2>GIFT EXPERT</h2>
      <hr/>
      <AddCategory setCategories={ setCategories } />
      {
        categories.map( category => (
          <GifGrid  key={ category } category={ category } />
        ))
      }
    </>
  )
}
