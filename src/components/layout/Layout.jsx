import Topbar from "../partials/Topbar"
import Navbar from "../partials/Navbar"
import Footer from './../partials/Footer';
import CallToAction from "../partials/CallToAction";
import Newsletter from "../partials/Newsletter";

const Layout = (props) => {
  return (
    <div>
        <Topbar />
        <Navbar />
        {props.children}
        <Newsletter />
        <Footer />
        <CallToAction/>
    </div>
  )
}

export default Layout
