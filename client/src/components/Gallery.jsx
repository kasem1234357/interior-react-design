import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Gallery() {
    const [data,setData] = useState([])
    const [filterData,setFilterData] = useState([])
    const filter = (type)=>{
        const newDt = data.filter(dt => dt.type === type)
        setFilterData(newDt)
    }
    useEffect(()=>{
      axios.get('https://interior-server-xxlm.onrender.com/api/user/post').then(res => {
        setData(res.data.products)
        setFilterData(res.data.products)
      })
      
    },[])
  return (
    <section id="gallery" className="gallery">
        <h2>Our <br/>
        INTERIOR COLLECTIONS</h2>
        <div className="gallery-links">
            <ul>
                <li onClick={()=>{filter('home')}}>HOME</li>
                <li onClick={()=>{filter('restaurant')}}>RESTAURANT</li>
                <li onClick={()=>{filter('office')}}>OFFICE SPACE</li>
                <li onClick={()=>{filter('other')}}>OTHER SPACE</li>
            </ul>
            <div className="gallery-main-link">
                FULL GALLERY
            </div>
        </div>
        <div className="gallery-img">
            {filterData?.slice(0,6).map(dt =>(
               <img src={dt.url} alt=""/>
            ))}
            
        </div>
       
    </section>
  )
}

export default Gallery
