import { useState } from 'react'
import { Row, Col, Button, Image } from "react-bootstrap";
import ImageModal from "../../../global/ImageModal/ImageModal";

const photoAlbum = require('../photos.json')

const Photos = () => {
  const [ showModal, setShowModal ] = useState(false)
  const [ imageFile, setImageFile ] = useState(null)

  const handleShowModal = (photo) => {
    setImageFile(photo)
    setShowModal(true)
  }
  
  return (
    <div className="text-primary p-32 fs-5">
      <Row>
        {photoAlbum.photos.map((photo) => {
          return (
          <Col xs={3} className="p-0 m-0">
            <Button className="w-100 h-100 bg-transparent rounded-0 border-0 px-0">
              <Image 
                src={`/images/${photo}`}
                className="mw-100" 
                style={{objectFit: 'cover', width: '9rem', height: '9rem'}}
                onClick={() => handleShowModal(photo)}
              />
            </Button>
          </Col>
          )
        })}
      </Row>
      <ImageModal show={showModal} setShow={setShowModal} imageFile={imageFile} setImageFile={setImageFile} album={photoAlbum.photos} />
      <p className="mt-32 fs-6">Copyright 2022 United Church of Norwood. All rights reserved.</p>
    </div>

  );
};
  
  export default Photos;