import React, { useEffect, useState } from "react";
import { Package, Clock, Truck, CheckCircle } from "lucide-react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setOrders([]);
        setLoading(false);
        return;
      }

      const q = query(collection(db, "orders"), where("userId", "==", user.uid));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setOrders(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading orders...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-100">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Package className="text-[#44bc78]" size={22} /> My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <Clock className="mx-auto mb-3 text-gray-400" size={36} />
            <p className="text-base">You haven’t placed any orders yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex justify-between items-center"
              >
                <div>
                  <h3 className="font-medium text-gray-800">
                    Order #{order.id.slice(0, 6).toUpperCase()}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {order.items?.length || 0} item(s) • ₹{order.total || 0}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {order.status === "delivered" ? (
                    <CheckCircle className="text-green-500" size={20} />
                  ) : (
                    <Truck className="text-[#44bc78]" size={20} />
                  )}
                  <span className="text-sm capitalize text-gray-600">
                    {order.status || "processing"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
