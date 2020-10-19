import React, { useEffect, useState }  from 'react';
import CameraButtons from './CameraButtons';
import axios from 'axios';

function Curiosity() {

    const [camera, setCamera] = useState("FHAZ");
    const [images, setImage ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getImage = async function() {
        setIsLoading(true);
        const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-10-17&api_key=JEpXIu5OCt18svGOcI1BxSZjtq1IDKSwj221JWZ4`);
        console.log(resp);
        setImage(resp.data.photos.slice(0,10));
        setIsLoading(false);
    }
    useEffect(() => {
        getImage();
        console.log(images);
        localStorage.setItem("curiosityImages", JSON.stringify(images));
    }, [])
 
    return (
        <>
            <h1>Curiosity</h1>
            <CameraButtons />
            <ul>
                {isLoading ? <p>loading...</p> : images.map( (image, i) => {
                    return (
                        <li>
                            <img style={{height: "20vh"}}src={image.img_src}></img>
                        </li>
                    )
                })}
            </ul>
          
        </>
    )
}

export default Curiosity;