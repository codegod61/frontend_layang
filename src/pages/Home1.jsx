import Footer from '@/components/Header_Footer/Footer';
import AppInfo from '@/components/Landing_Page_Section/AppInfo';
import Article from '@/components/Landing_Page_Section/Article';
import BodyNewsletter from '@/components/Landing_Page_Section/BodyNewsletter';
import Hero from '@/components/Landing_Page_Section/Hero';
import InfoMitra from '@/components/Landing_Page_Section/InfoMitra';
import MainBody from '@/components/Landing_Page_Section/MainBody';
import ChatComponent from '@/components/chat/ChatComponent';

export default function Home1() {
  return (
    <>
      <MainBody />
      <div className="flex justify-center">
        <div className="w-[1128px]">
          <Hero />
          <Article />
          <InfoMitra />
          <AppInfo />
        </div>
        <ChatComponent />
      </div>
      <BodyNewsletter />
      <Footer />
    </>
  );
}
