import React, { useContext, useEffect } from 'react';
import Filter from '../../components/filter/Filter';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';

function Allproducts() {
    const context = useContext(myContext);
    const { mode, product, searchkey, filterType, filterPrice, filterTitle } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter products based on search key, category, title, and price
    const filteredProducts = product.filter((item) => {
        return (
            (searchkey ? item.title.toLowerCase().includes(searchkey.toLowerCase()) : true) &&
            (filterType ? item.category.toLowerCase() === filterType.toLowerCase() : true) &&
            (filterTitle ? item.title.toLowerCase() === filterTitle.toLowerCase() : true) &&
            (filterPrice ? item.price.toString() === filterPrice.toString() : true)
        );
    });

    return (
        <Layout>
            <div className='container mx-auto px-4 mt-10' style={{ maxWidth: '1500px' }}>
                <h1 className='text-center text-3xl font-bold mb-10'>Our Latest Collection</h1>
                <Filter />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                    {filteredProducts.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'default-image-path.jpg'; }}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                                <p className="mt-2 font-semibold text-black">Brand: {item.brandName}</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <div>
                                        {item.salePrice ? (
                                            <>
                                                <span className="text-xl font-bold text-black">₹{item.salePrice}</span>
                                                <span className="ml-2 text-lg line-through text-gray-500">₹{item.price}</span>
                                            </>
                                        ) : (
                                            <span className="text-xl font-bold">₹{item.price}</span>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => addCart(item)}
                                        className="px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredProducts.length === 0 && (
                        <div className="col-span-4 text-center text-gray-500">
                            No products found.
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Allproducts;
