import './App.css';
import Header from '../Components/Header/Header';
import Slider from '../Components/Slider/Slider';
import Category from '../Components/Category/Category';
import About from '../Components/About/About';
import Shop from '../Components/Shop/Shop';
import Banner from '../Components/Banner/Banner';
import Gallery from '../Components/Gallery/Gallery';
import Message from '../Components/Message/Message';
import Blog from '../Components/Blog/Blog';
import Services from '../Components/Services/Services';
import Footer from '../Components/Footer/Footer';
import SimpleSlider from '../Components/Partners/Partners';
import Staff from '../Components/Staff/Staff';
import Testimony from '../Components/Testimony/Testimony';
import Location from '../Components/Location/Location';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Category></Category>
      <About></About>
      <Shop></Shop>
      <Banner></Banner>
      <Gallery></Gallery>
      <Message></Message>
      <Blog></Blog>
      <Testimony></Testimony>
      <Location></Location>
      <Staff></Staff>
      <SimpleSlider></SimpleSlider>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
