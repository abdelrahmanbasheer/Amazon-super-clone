import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Productfeed from "../components/Productfeed";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header/>
      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
<Banner></Banner>

<Productfeed></Productfeed>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
