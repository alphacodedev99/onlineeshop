// images/logo
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
// clerk
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
// icons
import { CiUser,CiHeart,CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';
// router
import { Link } from 'react-router-dom';

function NavbarComponent() {
    const [totalProductLS, setTotalProductLS] = useState(0);

    // let totalProduct = JSON.parse(localStorage.getItem('cart_total'));
    const {totalProduct} = useSelector((state) => state.cartStore);
    const {favoriteTotal} = useSelector((state) => state.favoriteStore);

    useEffect(() => {
        let lsTotal = JSON.parse(localStorage.getItem('cart_total'));

        if(lsTotal){
            setTotalProductLS(lsTotal)
        }else{
            setTotalProductLS(0);
        }
    }, [totalProduct])

  return (
    <div className="bg-mainBlue h-full lg:h-[100px] flex items-center py-[10px]">
        <div className="container mx-auto flex justify-between items-center flex-col lg:flex-row gap-[10px]">
            <Link to='/'>
                  <img src={logo} alt="logo-image" />
            </Link>


            {/* search bar */}
            <div className='bg-textWhite rounded-[20px]'>
                <input type="text" placeholder='Search..' className='bg-transparent outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-mainYellow text-mainBlue' />
                <button className='bg-mainYellow text-textWhite px-[30px] py-[15px] rounded-[20px]'>Search</button>
            </div>

            {/* LoginSystem & Cart/Favorite */}
            <div className='flex items-center gap-[10px]'>
                <div className='flex items-center gap-[5px]'>
                    <CiUser color='white' size={25}/>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton showName />
                        </SignedIn>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <CiHeart color='white' size={25}/>
                    <span className='bg-mainYellow rounded-full text-textWhite w-[20px] h-[20px] flex items-center justify-center'>{favoriteTotal}</span>
                    <Link to='/favorite' className='text-textWhite text-[18px]'>Favorite</Link>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <CiShoppingCart color='white' size={25}/>
                    <span className='bg-mainYellow rounded-full text-textWhite w-[20px] h-[20px] flex items-center justify-center'>{totalProductLS}</span>
                    <Link to='/cart' className='text-textWhite text-[18px]'>Cart</Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default NavbarComponent