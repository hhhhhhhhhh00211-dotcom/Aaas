import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { IoLogoWhatsapp, IoCheckmarkCircleOutline, IoTimeOutline } from "react-icons/io5";

const OrdersManager = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
    if (!error) setOrders(data);
  };

  const updateStatus = async (id, newStatus) => {
    await supabase.from('orders').update({ status: newStatus }).eq('id', id);
    fetchOrders();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border overflow-x-auto">
      <h2 className="text-xl font-bold mb-6">قائمة الطلبات الجديدة</h2>
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="p-4">العميل</th>
            <th className="p-4">العنوان</th>
            <th className="p-4">المبلغ</th>
            <th className="p-4">الحالة</th>
            <th className="p-4">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b hover:bg-gray-50 transition">
              <td className="p-4 font-medium">{order.customer_name}</td>
              <td className="p-4 text-sm text-gray-600">{order.customer_address}</td>
              <td className="p-4 font-bold text-brand-gold">{order.total_amount} ر.س</td>
              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                  {order.status === 'pending' ? 'انتظار' : 'تم التوصيل'}
                </span>
              </td>
              <td className="p-4 flex gap-2">
                <a 
                  href={`https://wa.me/${order.customer_phone}`} 
                  target="_blank"
                  className="p-2 bg-[#25D366] text-white rounded-lg hover:scale-110 transition"
                >
                  <IoLogoWhatsapp size={20} />
                </a>
                <button 
                  onClick={() => updateStatus(order.id, 'delivered')}
                  className="p-2 bg-brand-black text-white rounded-lg hover:bg-brand-gold transition"
                >
                  <IoCheckmarkCircleOutline size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersManager;
