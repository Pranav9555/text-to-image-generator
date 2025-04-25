import Description from "../component/Description";
import GenerateBtn from "../component/GenerateBtn";
import Header from "../component/Header";
import Steps from "../component/Steps";
import Testimonials from "../component/Testimonials";

function Home() {
  return (<div className="home">
    <Header />
    <Steps />
    <Description/>
    <Testimonials/>
    <GenerateBtn/>
  </div>);
}

export default Home;