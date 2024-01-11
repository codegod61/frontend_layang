import Header from '@/components/Header_Footer/Header'
import Footer from '../Header_Footer/Footer';
import Head from 'next/head';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="../../../public/favicon.ico" />
      </Head>

      <Header />
      {props.children}
      <Footer />
    </div>
  );
}