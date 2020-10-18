import React from 'react';
import { Button } from 'react-bootstrap';

function CameraButtons() {
    return(
        <>
            <Button className="camera-button" variant="dark">FHAZ</Button>
            <Button className="camera-button" variant="dark">RHAZ</Button>
            <Button className="camera-button" variant="dark">MAST</Button>
            <Button className="camera-button" variant="dark">CHEMCAM</Button>
            <Button className="camera-button" variant="dark">MAHLI</Button>
            <Button className="camera-button" variant="dark">MARDI</Button>
            <Button className="camera-button" variant="dark">NAVCAM</Button>
            <Button className="camera-button" variant="dark">PANCAM</Button>
            <Button className="camera-button" variant="dark">MINITES</Button>
        </>
    )
}

export default CameraButtons;