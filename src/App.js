import React, { useState,useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Searchbar from './components/searchBar/Searchbar'
import Card from './components/card/Card'

const App = () => {

    const[products,setProducts] = useState([]);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const[max,setMax] = useState("");
    const[min,setMin] = useState("");
    const[searchQuery,setSearchQuery] = useState("");
    const[selectedRating,setSelectedRating] = useState(null);

    const clearCategories = () =>{
        setSelectedCategories([]);
        setMin("");
        setMax("");
        setSelectedRating(null);
    }

    const handleCategoryChange = (newCategories) =>{
        setSelectedCategories(newCategories);
    };

    // const filteredProducts = selectedCategories.length === 0 ? products 
    // : products.filter((product)=> selectedCategories.includes(product.category));

    const filterByMinMax = (product) => {
        const price = product.price;
        const minPrice = min!==""?parseFloat(min):0;
        const maxPrice = max!==""?parseFloat(max):Infinity;
        return price>=minPrice && price<=maxPrice;
    }

    const filteredProducts = products.filter((product)=>{
        const categoryMatch = selectedCategories.length===0||selectedCategories.includes(product.category);
        const priceMatch = filterByMinMax(product);
        const searchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchRating = selectedRating === null || Math.floor(product.rating.rate) ===  selectedRating;
        return categoryMatch && priceMatch && searchMatch && matchRating;
    });

    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
            if(data && data.length){
                setProducts(data);
                setLoading(false);
            }
        }catch(err){
            setError(err.message);
            setLoading(false);
        }
    }
    
    useEffect(()=>{
        fetchProducts();
    },[])

  return (
    <div>
      <Navbar />
      <div className='homePage'>
        <Sidebar
        categories = {["electronics", "jewelery", "men's clothing", "women's clothing"]}
        selectedCategories={selectedCategories}
        onCategoryChange = {handleCategoryChange}
        min={min}
        max={max}
        setMin={setMin}
        setMax={setMax}
        clearCategories={clearCategories}
        setSelectedRating={setSelectedRating}
        />
        <div className='feed'>
            <Searchbar setSearchQuery={setSearchQuery} />
            <div className='products'>
                {
                    filteredProducts ? 
                    filteredProducts.map((item,ind)=>{
                        return <Card
                        key={item.id}
                        category={item.category}
                        image = {item.image}
                        title = {item.title}
                        stars = {item.rating.rate}
                        count= {item.rating.count}
                        price = {item.price}
                        description = {item.description}
                        />
                    })
                    :null
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default App


/*
    <Navbar />
    <div>
        <sidebar/> 
        <div>
            <Searchbar />
            {products render}
        </div>
    </div>
*/