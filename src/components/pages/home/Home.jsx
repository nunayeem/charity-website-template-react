import Navbar from "../../partials/Navbar";
import Topbar from "../../partials/Topbar";
import Carousel from "./components/Carousel";
import Footer from './../../partials/Footer';
import Newsletter from "../../partials/Newsletter";

import CallToAction from "../../partials/CallToAction";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import DonateForm from "./components/DonateForm";
import DonateFeature from "./components/DonateFeature";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/AboutUs";
import Spinner from "../../partials/Spinner";
import Layout from "../../layout/Layout";

function Home() {

  return (
    <Layout>
      {/* <Spinner /> */}

      <Carousel />
      <AboutUs />
      <WhyUs />
      <DonateFeature/>
      <DonateForm/>
      <Team/>
      <Testimonial/>
      
    </Layout>
  );
}

export default Home;