import Hore from '../components/Product_Page/Hore';
import BodyProduct from '../components/Product_Page/BodyProduct';
import Layout from '@/components/Layout';

export default function Product() {
  return (
    <>
      <Layout>
        <div className="flex justify-center">
          <div className="w-[1128px]">
            <Hore />
            <BodyProduct />
          </div>
        </div>
      </Layout>
    </>
  );
}
