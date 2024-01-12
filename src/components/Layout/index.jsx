import Header from '@/components/Header_Footer/Header'
import Footer from '../Header_Footer/Footer';

export default function Layout(props) {
    return (
      <div>
        <Header />
        {props.children}
        <Footer/>
      </div>
    );
  }