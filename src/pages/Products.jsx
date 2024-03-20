import React from 'react'
import Card from '../components/Card'

const Products = () => {
    const shoe = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/8265531/1.jpg?7006'
    const necklace = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/7811342/1.jpg?9910'
    const bag = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/545695/1.jpg?0441'
    const earrings = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/7230032/1.jpg?3713'
    const wristWatch = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/8467341/1.jpg?4780'
    const  sunglasses = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/9509012/1.jpg?5709'
    const dress = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/0513422/1.jpg?0703'


  return (
    <>
    
      <h1>Select below</h1>
      
      <Card title='Casual Sneakers' description='2024 Ladies Classic Fashion Casual Shoes Sneakers - Pink' price='$100' imageUrl={shoe}/>
      <Card title='Couple Heart Necklace' description='The pendant is composed of two hearts to form a complete heart. One pendant represents the key and the other represents the lock. ' price='$15' imageUrl={necklace}/>
      <Card title='Women Bags' description='4 PCS Women Bags Ladies Bags Handbags Purse Shoulder Bags' price='$300' imageUrl={bag}/>
      <Card title='Diamond Pearl Earrings' description='6 Pairs Ladies Hoop Diamond Pearl Earrings Set Punk Earrings II' price='$5.99' imageUrl={earrings}/>
      <Card title='Wrist Watch' description='2 In 1 Women Female Fashion Quartz Wrist Watch Bracelet Set' price='$130' imageUrl={wristWatch}/>
      <Card title='Sunglasses' description='Diamond Trimming Cut-Edge Ladies UV Protection Sunglasses' price='$70' imageUrl={sunglasses}/>
      <Card title='Leopard Dress' description='2023 Fashion Women Leopard Dress Knee Length Dresses Casual For Work & Date Dresses ' price='$200' imageUrl={dress}/>
      <Card title='Casual Sneakers' description='2024 Ladies Classic Fashion Casual Shoes Sneakers - Pink' price='$100' imageUrl={shoe}/>
      <Card title='Casual Sneakers' description='2024 Ladies Classic Fashion Casual Shoes Sneakers - Pink' price='$100' imageUrl={shoe}/>
      <Card title='Casual Sneakers' description='2024 Ladies Classic Fashion Casual Shoes Sneakers - Pink' price='$100' imageUrl={shoe}/>
      
    </>
  )
}

export default Products
