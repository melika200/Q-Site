import According from "../../components/According/According"
import Creative from "../../components/Creative/Creative"
import Feature from "../../components/Feature/Feature"
import Learn from "../../components/Learn/Learn"
import Mynavbar from "../../components/Navbar/Mynavbar"
import Pricing from "../../components/Pricing/Pricing"
import Provident from "../../components/Provident/Provident"
import Services from "../../components/Services/Services"
import Test from "../../components/Testimonials/Test"
import Tool from "../../components/Tool/Tool"
import Welcom from "../../components/Welcom/Welcom"
import Contact from "../Contact/Contact"

function Home(){
    return(
        <>
        <Mynavbar />
        <Welcom />
        <Creative />
        <Feature/>
        <Provident />
        <Learn />
        <Services />
        <Tool/>
        <Pricing/>
        <According />
        <Test/>
        <Contact/>
        </>
    )
}
export default Home