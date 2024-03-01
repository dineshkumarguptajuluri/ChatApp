import Carousel from "../LandingScreen/Carousel"
import Hero from "../LandingScreen/Hero" ;
import About from "../LandingScreen/About";
import Vit from "../LandingScreen/Vit"

export default function LandingPage(){

    return(<div>
        <Hero/>
        <About/>
        <Vit/>
        <Carousel/>
    </div>)
}