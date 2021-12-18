import React, { useState } from "react";
import "./Gallery.css";
import image1 from "./images/undraw_Campfire_re_9chj.png";
import image2 from "./images/undraw_Collaborators_re_hont.png";
import image3 from "./images/undraw_Interview_re_e5jn.png";
import image4 from "./images/undraw_Late_at_night_re_d3mx.png";
import image5 from "./images/undraw_Launching_re_tomg.png";
import image6 from "./images/undraw_Organizing_projects_re_9p1k.png";

const imagesArray = [image1, image2, image3, image4, image5, image6];

function Gallery() {
  const [overlay, setOverlay] = useState(true);

  return (
    <div className="gallery-section-container">
    
      <div
        className="gallery-container"
        onMouseEnter={() => setOverlay(false)}
        onMouseLeave={() => setOverlay(true)}
      >
        {imagesArray.map((image, index) => {
          return (
            <div className="image-wrapper">
              <img
                className={`image${index}`}
                key={index}
                src={imagesArray[index]}
              ></img>

              <div className="overlay">
                <h3>Overlay Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  semper faucibus dictum. In hac habitasse platea dictumst.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
