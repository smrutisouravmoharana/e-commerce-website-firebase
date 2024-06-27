/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';

function ProductCard() {
    const context = useContext(myContext);
    const { mode, product, searchkey, filterType, setFilterType, filterPrice, setFilterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {product
                        .filter((obj) => obj.title.toLowerCase().includes(searchkey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                        .filter((obj) => obj.price.includes(filterPrice))
                        .slice(0, 8)
                        .map((item, index) => {
                            const { title, price, imageUrl, id } = item;
                            return (
                                <div key={index} className="p-4 md:w-1/4 drop-shadow-lg">
                                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                                        style={{
                                            backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '#acaef5',
                                            color: mode === 'dark' ? 'white' : '',
                                        }}
                                    >
                                        <div onClick={() => window.location.href = `/productinfo/${id}`} className="flex justify-center cursor-pointer">
                                            <img className=" w-full h-80 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={imageUrl} alt="Product" />
                                        </div>
                                        <div className="p-5 border-t-2">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-white-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '#ffffff' }}>E-Bharat</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '#ffffff' }}>{title}</h1>
                                            <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '#ffffff' }}>₹{price}</p>
                                            <div className="flex justify-center">
                                                <button type="button"
                                                    onClick={() => addCart(item)}
                                                    className="focus:outline-none text-black bg-white hover:bg-gray-200 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2">
                                                    Add To Cart
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
