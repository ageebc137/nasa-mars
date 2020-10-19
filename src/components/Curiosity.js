import React, { useEffect, useState }  from 'react';
import CameraButtons from './CameraButtons';
import axios from 'axios';

function Curiosity() {

    const [camera, setCamera] = useState("FHAZ");
    const [image, setImage ] = useState("");
    const [rover, setRover] = useState("curiosity");

    const getImage = async function() {
        const images = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-10-17&api_key=JEpXIu5OCt18svGOcI1BxSZjtq1IDKSwj221JWZ4`);
        console.log(images);
    }
 
    return (
        <>
            <h1>Curiosity</h1>
            <CameraButtons />
            <img src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02782/opgs/edr/fcam/FLB_644459613EDR_F0792640FHAZ00341M_.JPG" alt="nasa-rover" />
        </>
    )
}

export default Curiosity;