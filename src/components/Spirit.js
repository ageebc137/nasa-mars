import React, { useState, useEffect } from 'react';
import CameraButtons from './CameraButtons';
import axios from 'axios';

function Spirit() {
    const [camera, setCamera] = useState("FHAZ");
    const [images, setImage ] = useState([]);
    const [rover, setRover] = useState("spirit");
    const [isLoading, setIsLoading] = useState(false);
    
    const getImage = async function() {
        const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2020-10-17&api_key=JEpXIu5OCt18svGOcI1BxSZjtq1IDKSwj221JWZ4`);
        console.log(resp);
        setImage(resp.data.photos.slice(0,10));
    }
    useEffect(() => {
        getImage();
        console.log(images);
        localStorage.setItem("spiritImages", JSON.stringify(images));
    }, [])
 
    return (
        <>
            <h1>Opportunity</h1>
            <CameraButtons />
            <ul>
                {images.map( (image, i) => {
                    return (
                        <div>
                            <img style={{height: "20vh"}}src={image.img_src}></img>
                        </div>
                    )
                })}
            </ul>
          
        </>
    )
}

export default Spirit;