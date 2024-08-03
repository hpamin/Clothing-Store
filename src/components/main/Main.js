import React from 'react'
import InfoMain from './infoMain/InfoMain'
import ProductSpecialMain from './productSpecialMain/ProductSpecialMain'
import ProductBestSeller from './productBestSeller/ProductBestSeller'
import CategoryMain from './categoryMain/CategoryMain'
import AmazingMain from './amazingMain/AmazingMain'
import BrandsMain from './brandsMain/BrandsMain'
import BlogMain from './BlogMain/BlogMain'

function Main() {
  return (
    <main>
        <InfoMain />
        <ProductSpecialMain />
        <ProductBestSeller />
        <CategoryMain />
        <AmazingMain />
        <BrandsMain />
        <BlogMain />
    </main>
  )
}

export default Main