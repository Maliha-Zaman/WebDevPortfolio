import React from 'react'; 
import "./home.css";
import Me from "../assets/maliha.jpg";
import HeaderSocials from './HeaderSocials';

const Home = () => {
     return (

<section className="home container" id="home">
<div className="intro">
<img src={Me} height={180} width={180} alt="" className="home_img" />
<h1 className="home_name">Maliha</h1>
<span className="home___education">I'm a Developer</span>
<HeaderSocials/>
<a href="/CV.pdf" download className='btn'>Download CV</a>

</div>
</section>
)
}
export default Home