import React from "react";
import { useNavigate } from "react-router-dom";

const Orders = ({ orders, user: _user }) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>
        
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600 mb-4">No orders yet</h2>
            <p className="text-gray-500 mb-6">Start shopping to see your orders here!</p>
            <button 
              onClick={() => navigate("/products")}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                    <p className="text-gray-600 text-sm">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  {order.items.map(item => (
                    <div key={item.cartId} className="flex items-center gap-4 py-2 border-b">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-600 text-sm">
                          Size: {item.selectedSize} | Color: {item.selectedColor} | Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-600">Payment: {order.paymentMethod}</p>
                  </div>
                  <p className="text-lg font-bold">Total: ₹{order.total.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;