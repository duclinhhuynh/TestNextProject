// pages/materials.js
'use client'
import Layout from "../components/layout";
export default function Materials() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Study Materials</h1>
      <ul className="list-disc pl-5">
        <li><a href="#" className="text-blue-500">Study Guide 1 (PDF)</a></li>
        <li><a href="#" className="text-blue-500">Study Guide 2 (PDF)</a></li>
      </ul>
    </Layout>
  );
}
