import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { IoCloudUploadOutline, IoPricetagOutline, IoBagAddOutline } from "react-icons/io5";

const ProductsManager = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: 'men',
    description: '',
    on_sale: false,
    discount_price: ''
  });
  const [imageFile, setImageFile] = useState(null);

  // وظيفة رفع الصورة لـ Supabase Storage والحصول على الرابط
  const uploadImage = async (file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `products/${fileName}`;

    let { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from('product-images').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const { error } = await supabase
        .from('products')
        .insert([{ 
          ...product, 
          image_url: imageUrl,
          created_at: new Date() 
        }]);

      if (error) throw error;
      alert('تم إضافة المنتج بنجاح إلى متجر الدعيس مول! 🎉');
      // إعادة تعيين النموذج
      setProduct({ name: '', price: '', category: 'men', description: '', on_sale: false, discount_price: '' });
    } catch (error) {
      alert('خطأ في الإضافة: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-gray p-8 text-right" dir="rtl">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-center gap-4 mb-8 border-b pb-4">
          <IoBagAddOutline size={35} className="text-brand-gold" />
          <h1 className="text-2xl font-bold text-brand-black">إضافة قطعة جديدة للمول</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* اسم المنتج */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">اسم المنتج (مثلاً: فستان سهرة ملكي)</label>
            <input 
              required
              className="p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-brand-gold outline-none"
              value={product.name}
              onChange={(e) => setProduct({...product, name: e.target.value})}
            />
          </div>

          {/* القسم */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">القسم</label>
            <select 
              className="p-3 bg-gray-50 border rounded-xl outline-none"
              value={product.category}
              onChange={(e) => setProduct({...product, category: e.target.value})}
            >
              <option value="men">رجالي</option>
              <option value="women">نسائي</option>
              <option value="kids">أطفال</option>
            </select>
          </div>

          {/* السعر */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">السعر الأساسي (ريال)</label>
            <input 
              type="number" required
              className="p-3 bg-gray-50 border rounded-xl outline-none"
              value={product.price}
              onChange={(e) => setProduct({...product, price: e.target.value})}
            />
          </div>

          {/* رفع الصورة */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">صورة المنتج (8K/WebP)</label>
            <label className="flex items-center justify-center p-3 border-2 border-dashed border-brand-gold rounded-xl cursor-pointer hover:bg-brand-gold/5 transition">
              <IoCloudUploadOutline className="ml-2" />
              <span>{imageFile ? imageFile.name : 'اختر صورة من جهازك'}</span>
              <input type="file" hidden onChange={(e) => setImageFile(e.target.files[0])} />
            </label>
          </div>

          {/* التحكم في الخصم */}
          <div className="md:col-span-2 bg-brand-gold/5 p-4 rounded-xl flex items-center gap-6 border border-brand-gold/20">
             <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="onSale"
                  checked={product.on_sale}
                  onChange={(e) => setProduct({...product, on_sale: e.target.checked})}
                  className="w-5 h-5 accent-brand-gold"
                />
                <label htmlFor="onSale" className="font-bold text-brand-black">تفعيل خصم خاص</label>
             </div>
             {product.on_sale && (
               <input 
                 placeholder="السعر بعد الخصم..."
                 className="p-2 border rounded-lg bg-white outline-none w-40"
                 value={product.discount_price}
                 onChange={(e) => setProduct({...product, discount_price: e.target.value})}
               />
             )}
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="md:col-span-2 bg-brand-black text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-gold transition-all shadow-lg flex justify-center items-center gap-3"
          >
            {loading ? 'جاري الرفع الفوري...' : 'نشر المنتج في الموقع الآن'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductsManager;
