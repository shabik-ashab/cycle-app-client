import React from "react";
import Button from '@mui/material/Button';
import banner1 from '../../../image/banner-img/banner1.jpg'
import banner2 from '../../../image/banner-img/banner2.jpg'

const Banner = () => {

  return (
    <>
      <div className="container-fluid mt-3 mb-5">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div style={{ backgroundImage: `url(${banner1})` ,
       height:'100vh',
       width: '100%'
  }} class="carousel-item  text-light active">
    <div className="banner">
      <h1>Off Road Bicycle</h1>
      <p>Here to bring yoyr life style to the next level</p>
      <p>Accompany you to the end of the road</p>
      </div>
    </div>
    <div style={{ backgroundImage: `url(${banner2})` ,
       height:'100vh',
       width: '100%',
       position: 'relative',
       top: '-40%'
  }} class="carousel-item  text-light ">
    <div className="banner">
      <h1>Off Road Bicycle</h1>
      <p>Here to bring yoyr life style to the next level</p>
     <p>Accompany you to the end of the road</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </>
  );
};

export default Banner;
