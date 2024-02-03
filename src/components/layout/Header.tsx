import React, { useState } from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { CgShoppingCart } from 'react-icons/cg';
import logo from '@/assets/Logo.png';
import Link from 'next/link';


const Navbar = () => {

  return (
    <nav>
      <Link href='/'>
        <Image src={logo} width={140} height={25} alt='logo' />
      </Link>
      <ul className='nav-links'>
        <Link href='/female'><li>Female</li></Link>
        <Link href='/male'><li>Male</li></Link>
        <Link href='/kids'><li>Kids</li></Link>
        <Link href='/products'><li>All Products</li></Link>
      </ul>

      <div className='search-bar'>
        <CiSearch />
        <input
          type='text'
          placeholder='What you looking for'
        />
      </div>

     
        <Link href='/cart'>
          <button className='cart'>
            <CgShoppingCart size={22} />
            <span className='cart-item-qty'></span>
          </button>
        </Link>
        
    </nav>
  );
};

export default Navbar;
