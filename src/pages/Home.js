import React from 'react'
import Carousel from 'react-elastic-carousel';
import image1 from '../assets/img_background.jpg';
import {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avatar11,
    avatar12
}
from '../assets'

function Home() {

    const items = [{
        character: avatar1,
        sword: avatar2,
        hachette: avatar3,
        flail: avatar4
    },
    {
        character: avatar8,
        sword: avatar6,
        hachette: avatar7,
        flail: avatar5

    },
    {
        character: avatar9,
        sword: avatar12,
        hachette: avatar10,
        flail: avatar11

    }];
    
    return (
        <div>
            <div className="sec1">
                <h1>Discover MORE</h1>
                <p>We have released new character</p>
                <div className="btn-container">
                    <button className="discover-btn" type="button" >
                        Discover
                    </button>
                </div>
                {/* <img src={image1} alt='test' /> */}
            </div>

            <div className="sec2">
                <h1>OUR CUSTOM PLAYERS</h1>

                {/* <img src={items[0].character} alt='test' id='image1'/> */}

                <Carousel itemsToShow={1}>

                    {items.map((item,index)=>{

                        return(<div className="image-container" key={index}>
                            <img src={item.character} alt='test' id='image1'/>
                        </div>)

                    })}
                    
                </Carousel>
            </div>

            <div className="sec3">
                <div className="sec3_container">
                    <div className="top">
                        <h1>CUSTOM ART ONLY FOR YOU</h1>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>

                    </div>

                    <div className="middle">
                        <div className="card-container">
                            <div className="arche">
                                <img/>
                                <h1>ARCHE</h1>
                                <p>lorem ipsum dolor sit amet, consect</p>
                            </div>

                            <div className="sword">
                                <img/>
                                <h1>SWORD</h1>
                                <p>lorem ipsum dolor sit amet, consect</p>
                            </div>

                            <div className="fleau">
                                <img/>
                                <h1>FLEAU</h1>
                                <p>lorem ipsum dolor sit amet, consect</p>
                            </div>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="bottom1">
                            <h1>JOIN US AND GET SOME FUN</h1>
                            <p>lorem ipsum dolor sit amet, con</p>
                        </div>
                        <form>
                            <label></label>
                            <input></input>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
