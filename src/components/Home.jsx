import React from 'react'
import vg from "../assests/2.webp"
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai"; 

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>Shaswat Sinha</h1>
                <p>FrontEnd Developer</p>
                {/* <p>Solution to your Problems</p> */}
            </main>
        </div>
        <div className='home2'>
            <img src={vg} alt="Graphics"/>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi blanditiis maxime eaque hic, sit natus cupiditate velit id aut illo inventore eos quidem minima esse! Aspernatur autem dolorum corporis.
                </p>
            </div>
        </div>
        <div className='home3' id='about'>
            <div>
                <h1>Who are we?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in necessitatibus quae dignissimos ad voluptatibus fugit, aspernatur praesentium modi consectetur, architecto consequuntur ipsam nam numquam perspiciatis nihil iure. Repellendus, totam?</p>
            </div>

        </div>
        <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home; 
