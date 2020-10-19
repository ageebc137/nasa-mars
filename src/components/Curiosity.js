import React, { useEffect, useState }  from 'react';
import CameraButtons from './CameraButtons';
import axios from 'axios';

function Curiosity() {

    const [camera, setCamera] = useState("FHAZ");
    const [images, setImage ] = useState([]);
    const [rover, setRover] = useState("curiosity");

    const getImage = async function() {
        const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-10-17&api_key=JEpXIu5OCt18svGOcI1BxSZjtq1IDKSwj221JWZ4`);
        console.log(resp);
        setImage(resp.data.photos.slice(0,10));
    }
    useEffect(() => {
        getImage();
        console.log(images);
    }, [])
 
    return (
        <>
            <h1>Curiosity</h1>
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

export default Curiosity;