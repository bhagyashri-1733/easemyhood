import React from 'react'
import Item from './Item'

import {Pages,Categories,Partner,Contact } from './Menu'

const ItemContainer = () => {
  return (
    <div className=" bg-blue-900 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 ">
        <Item Links={Pages} title="pages"/>
        <Item Links={Categories} title="Categories"/>
        <Item Links={Partner} title="Become a Partner"/>
        <Item Links={Contact} title="Contact Us"/>
        

    </div>
  )
}

export default ItemContainer

