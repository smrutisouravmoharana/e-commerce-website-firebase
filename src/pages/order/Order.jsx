import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';

function Order() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userid = user ? user.user.uid : null;
  const email = user ? user.user.email : null;
  const context = useContext(myContext);
  const { mode, loading, order } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (email === "smrutisouravmoharana222@gmail.com") {
      navigate('/dashboard'); // Navigate to DashboardTab page
    }
  }, [email, navigate]);

  if (!userid) {
    return <h2 className='text-center text-2xl text-white'>Please log in to view your orders</h2>;
  }

  const userOrders = order.filter(obj => obj.userid === userid);

  return (
    <Layout>
      {loading && <Loader />}
      {userOrders.length > 0 ? (
        <div className="h-full pt-10">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Price</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.map((order, orderIndex) => (
                order.cartItems.map((item, itemIndex) => (
                  <tr key={`${orderIndex}-${itemIndex}`}>
                    <td className="py-2 px-4 border-b">
                      <img src={item.imageUrl} alt="product-image" className="w-20 h-20 object-cover" />
                    </td>
                    <td className="py-2 px-4 border-b" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                      {item.title}
                    </td>
                    <td className="py-2 px-4 border-b" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                      {item.description}
                    </td>
                    <td className="py-2 px-4 border-b" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                      ₹{item.price}
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className='text-center text-2xl text-white'>No Orders</h2>
      )}
    </Layout>
  );
}

export default Order;
