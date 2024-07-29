import React from 'react';
import logo from '../assets/logo.jpg';
import sports from '../assets/sports.jpg';
import science from '../assets/science.jpg'
import culture from '../assets/culture.jpg'
const Home = () => {
  return (
    <div className=" mt-5">
      <div className="text-center mb-5">
        <img src={logo} alt="Springdale Public School Logo" className="img-fluid" style={{ height: '100px', width: '100px' }} />
        <h1 className="mt-3">Springdale Public School</h1>
        <p className="lead">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sports} className="d-block w-100" alt="Annual Sports Day" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Annual Sports Day - Celebrating Excellence in Sports</h1>
              <h4>Join us in celebrating our students' achievements in sports.</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={science} className="d-block w-100" alt="Science Exhibition" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Science Exhibition - Showcasing Student Innovations</h1>
              <h4>Explore the innovative projects created by our talented students.</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={culture} className="d-block w-100" alt="Cultural Fest" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Cultural Fest - Embracing Diversity and Creativity</h1>
              <h4>Experience the vibrant cultural diversity of our school community.</h4>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
