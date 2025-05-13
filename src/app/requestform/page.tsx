'use client';
import { useState } from 'react';
import  H1tag  from "../components/H1tag";



export default function Requestform() {
    const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNum: '',
    message: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('お問い合わせが無事、送信されました');
    } else {
      alert('送信に失敗しました');
    }
  };


  return (
      <div>  
      <section className="flex flex-col items-center mt-8 pb-16 mb-8">        
        <H1tag><i className="ri-mail-line  brownColor"></i>ご質問・お問い合わせ</H1tag>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input type="text" name="name" placeholder="お名前" required onChange={handleChange} className="border p-2 w-full" />
          <input type="email" name="email" placeholder="メールアドレス" required onChange={handleChange} className="border p-2 w-full" />
          <input type="tel" name="phone" placeholder="電話番号" required onChange={handleChange} className="border p-2 w-full" />
          <textarea name="message" placeholder="お問い合わせ内容" required onChange={handleChange} className="border p-2 w-full h-32" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-200">送信</button>
        </form>
      </section>
    </div>
  );
}
