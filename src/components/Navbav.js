import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa'

const Navbar = () => {
    const [visibleNav, setVisibleNav] = React.useState(false);

    const handleNav = () => setVisibleNav(value => !value)
    return (
        <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
            <div>
                <h1 className={visibleNav ? "hidden" : "block"}>BEACHES.</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch className="mr-2" size={20}/>
                <BsPerson size={20}/>
            </div>
            {/* Hamburger */}
            <div className="md:hidden z-10" onClick={handleNav}>
                {visibleNav ? <AiOutlineClose className="text-black" size={20}/> :
                    <HiOutlineMenuAlt4 size={20}/>
                }
            </div>
            {/* Mobile menu dropdown */}
            <div className={visibleNav ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col" : "absolute left-[-100%]"}>
                <ul>
                    <h1>BEACHES.</h1>
                    <li className="border-b">Home</li>
                    <li className="border-b">Destinations</li>
                    <li className="border-b">Travel</li>
                    <li className="border-b">Views</li>
                    <li className="border-b">Book</li>
                    <div className="flex flex-col">
                        <button className="my-6">Search</button>
                        <button>Account</button>
                    </div>
                    <div className="flex justify-between my-6">
                        <FaFacebook className="icon"/>
                        <FaTwitter className="icon"/>
                        <FaInstagram className="icon"/>
                        <FaPinterest className="icon"/>
                        <FaYoutube className="icon"/>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
