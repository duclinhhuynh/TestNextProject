'use client'
import { useState } from 'react';
import Layout from '../components/layout';
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-2 border h-32"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">Send</button>
      </form>
    </Layout>
  );
}
