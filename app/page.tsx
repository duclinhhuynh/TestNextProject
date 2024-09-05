import Body from "./components/Body";
import Footer from "./components/Footer";
import Layout from "./components/layout";
export default function Home() {
  return (
    <div className="flex relative flex-col">
      {/* <Body />
      <Footer /> */}
      <Layout>
        <h1 className="text-3xl font-bold">Welcome to Exam Prep</h1>
        <p className="mt-4">Navigate to practice questions, study materials, or contact us for more information.</p>
      </Layout>
    </div>
  );
}
