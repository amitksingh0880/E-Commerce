import React from 'react'
const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish cursor-pointer'>
                <div className="navbar_link relative">HOME</div>
                <div className='navbar_link relative'>CATEGORIES</div>
                <div className='navbar_link relative'>{`MEN'S`} </div>
                <div className='navbar_link relative'>{`WOMEN'S`}</div>
                <div className='navbar_link relative'>JEWELLERY</div>
                <div className='navbar_link relative'>PERFUME</div>
                <div className='navbar_link relative'>BLOG</div>
                <div className='navbar_link relative'>HOT OFFERS</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar