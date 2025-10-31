import React, { useState, useEffect } from "react";
import { updateProfile, updateEmail } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { LogOut, Heart, Package, Camera, Edit2, Save } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [editing, setEditing] = useState({ name: false, email: false });
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setFormData({
          name: currentUser.displayName || "",
          email: currentUser.email || "",
        });
      }
    });
    return () => unsubscribe();
  }, []);

  // Profile image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !user) return;
    setUploading(true);
    try {
      const fileRef = ref(storage, `profileImages/${user.uid}.jpg`);
      await uploadBytes(fileRef, file);
      const photoURL = await getDownloadURL(fileRef);
      await updateProfile(user, { photoURL });
      setUser({ ...user, photoURL });
    } catch (err) {
      console.error("Image upload error:", err);
    }
    setUploading(false);
  };

  // ✅ Save name/email
  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    try {
      if (formData.name !== user.displayName) {
        await updateProfile(user, { displayName: formData.name });
      }
      if (formData.email !== user.email) {
        await updateEmail(user, formData.email);
      }
      setUser({ ...user, displayName: formData.name, email: formData.email });
      setEditing({ name: false, email: false });
    } catch (err) {
      alert("Failed to update profile. Please re-authenticate.");
      console.error(err);
    }
    setSaving(false);
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-poppins">
        <p className="text-gray-600 text-lg">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-14 px-4 font-poppins">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center border border-gray-100">
        {/* Profile Image */}
        <div className="relative w-28 h-28 mx-auto mb-5">
          <img
            src={
              user.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-[#44bc78]/30"
          />
          <label
            htmlFor="profileUpload"
            className="absolute bottom-2 right-2 bg-[#44bc78] text-white rounded-full p-2 cursor-pointer hover:bg-[#3aa86c] transition"
          >
            <Camera size={16} />
            <input
              id="profileUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Editable Name */}
        <div className="flex justify-center items-center gap-2 mb-2">
          {editing.name ? (
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-b border-gray-300 text-center text-lg outline-none"
            />
          ) : (
            <h2 className="text-xl font-semibold text-gray-900">
              {formData.name || "User"}
            </h2>
          )}
          <button
            onClick={() =>
              editing.name ? handleSave() : setEditing({ ...editing, name: true })
            }
            className="text-gray-500 hover:text-[#44bc78]"
          >
            {editing.name ? <Save size={18} /> : <Edit2 size={18} />}
          </button>
        </div>

        {/* Editable Email */}
        <div className="flex justify-center items-center gap-2 mb-6">
          {editing.email ? (
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-b border-gray-300 text-center text-sm outline-none"
            />
          ) : (
            <p className="text-gray-500 text-sm">{formData.email}</p>
          )}
          <button
            onClick={() =>
              editing.email ? handleSave() : setEditing({ ...editing, email: true })
            }
            className="text-gray-500 hover:text-[#44bc78]"
          >
            {editing.email ? <Save size={18} /> : <Edit2 size={18} />}
          </button>
        </div>

        {/* Menu Options */}
        <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
          <button
            onClick={() => navigate("/orders")}
            className="flex items-center justify-between bg-gray-50 hover:bg-[#44bc78]/10 border border-gray-200 rounded-lg px-4 py-3 transition"
          >
            <span className="flex items-center gap-2">
              <Package size={18} className="text-[#44bc78]" />
              My Orders
            </span>
            <span className="text-gray-400">›</span>
          </button>

          <button
            onClick={() => navigate("/wishlist")}
            className="flex items-center justify-between bg-gray-50 hover:bg-[#44bc78]/10 border border-gray-200 rounded-lg px-4 py-3 transition"
          >
            <span className="flex items-center gap-2">
              <Heart size={18} className="text-[#44bc78]" />
              My Wishlist
            </span>
            <span className="text-gray-400">›</span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center justify-between border border-red-200 rounded-lg px-4 py-3 text-red-600 transition"
          >
            <span className="flex items-center gap-2">
              <LogOut size={18} />
              Logout
            </span>
            <span className="text-red-400">›</span>
          </button>
        </div>

        {uploading && (
          <p className="text-sm text-gray-500 mt-4 animate-pulse">
            Uploading image...
          </p>
        )}
        {saving && (
          <p className="text-sm text-gray-500 mt-2 animate-pulse">
            Saving changes...
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
