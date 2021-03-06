import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Website's Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Header />
        <HomeBody />
        <Footer />
      </section>
    </section>
  );
};

export default Home;
