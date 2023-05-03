import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Faq from './Component/Faq';
import Blog from './Blog';




function App() {

  return (
    <div>
      <div className='  top-nav '>
        <div className='container mx-auto flex justify-between'>
        <div>
          <img src='images/pal-logo.jpg' />
        </div>
        <div className=''>
        <Navigation></Navigation>
      <Routes>

       {/* <Route exact path='/' element= {<Navigation/>}></Route> */}
       <Route exact path='About' element= {<About/>}></Route>
       <Route exact path='Contact' element= {<Contact/>}></Route>
       <Route exact path='Navigation' element={<Navigation/>}></Route> 
       <Route exact path='Faq' element={<Faq/>}></Route>
       <Route exact path='Blog' element={<Blog/>}></Route>    
        </Routes>
</div>
</div>

      </div>
<section><img src='images/home-banner.jpg'/></section>
<section>
<div className='container mx-auto p-12'>
  <div className='flex justify-between'>
    <div>
      <h2>COMPETENCY – AN ASSET</h2>
    </div>
    <div>fgdfgfdg</div>
  </div>
  </div>  
</section>
</div>

  );
}

export default App;
