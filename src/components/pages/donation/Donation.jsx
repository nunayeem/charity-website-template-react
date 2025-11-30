import Layout from "../../layout/Layout";
import Breadcrumb from "../../partials/Breadcrumb";
import DonateFeature from "../home/components/DonateFeature";
import DonateForm from "../home/components/DonateForm";

function Donation() {
  return (
    <Layout>
      <Breadcrumb title='Donation' />
      <DonateFeature />
      <DonateForm />
    </Layout>
  );
}   

export default Donation;