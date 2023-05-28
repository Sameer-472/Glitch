import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Testimonal.css"

const Testimonal = () => {
  return (
    <div className="header testimonal">

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="./assets/profile.png" width={50} id="profile"/>
          <div className="myCarousel">
            <h2>Shirley Fultz</h2>
            <h3>CEO</h3>
            <div style={{color: 'black'}}>Glitch AF</div>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur magni voluptates ducimus eveniet pariatur minima, aliquam, at fugiat laborum, earum officia corrupti dolorem error itaque autem magnam est necessitatibus.
            </p>
          </div>
        </div>
        <div>
          <img src="./assets/profile.png" width={50} id="profile"/>
          <div className="myCarousel">
            <h2><b>Shirley Fultz</b></h2>
            <h3>CEO</h3>
            <div style={{color: 'black'}}>Glitch AF</div>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur magni voluptates ducimus eveniet pariatur minima, aliquam, at fugiat laborum, earum officia corrupti dolorem error itaque autem magnam est necessitatibus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam exercitationem labore maiores magnam eum quidem aut cupiditate veniam voluptates atque.
            </p>
          </div>
        </div>
        <div>
          <img src="./assets/profile.png" width={50} id="profile"/>
          <div className="myCarousel">
            <h2>Shirley Fultz</h2>
            <h3>CEO</h3>
            <div style={{color: 'black'}}>Glitch AF</div>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur magni voluptates ducimus eveniet pariatur minima, aliquam, at fugiat laborum, earum officia corrupti dolorem error itaque autem magnam est necessitatibus.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonal;
