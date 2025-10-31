import React, { useEffect, useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { db, auth } from "../firebase";
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setWishlist([]);
        setLoading(false);
        return;
      }

      const q = query(collection(db, "wishlist"), where("userId", "==", user.uid));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setWishlist(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const removeFromWishlist = async (id) => {
    await deleteDoc(doc(db, "wishlist", id));
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading wishlist...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-100">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Heart className="text-[#44bc78]" size={22} /> My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <Heart className="mx-auto mb-3 text-gray-400" size={36} />
            <p className="text-base">Your wishlist is empty.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-5">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl p-4 bg-gray-50 hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-3">₹{item.price}</p>
                <div className="flex gap-2">
                  <button className="w-1/2 bg-[#44bc78] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#3aa86c] transition">
                    <ShoppingBag size={16} /> Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="w-1/2 bg-red-100 text-red-500 py-2 rounded-lg font-medium hover:bg-red-200 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
