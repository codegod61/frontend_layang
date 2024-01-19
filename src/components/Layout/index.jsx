import Header from '@/components/Header_Footer/Header'
import Footer from '../Header_Footer/Footer';
import Head from 'next/head';

export default function Layout(props) {
    return (
      <div>
        <Head>
          <title>LAYANG</title>
        </Head>
        <Header />
        {props.children}
        <Footer/>
      </div>
    );
  }