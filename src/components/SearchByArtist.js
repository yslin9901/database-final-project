import React, {useRef} from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const SearchByArtist = () => {
  const searchByArtistField = useRef(null);
  const handleSearch = () => {
    const artist = searchByArtistField.current.value;
    console.log(artist)
    // send request
  }
  return (
    <>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>利用歌手搜尋</Form.Label>
      <Form.Control ref={searchByArtistField} placeholder="輸入歌手" />
    </Form.Group>
    <Button style={{marginTop: '15px'}} variant="secondary" onClick={handleSearch}>搜尋</Button>
    </>
  )
}

export default SearchByArtist;