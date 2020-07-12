import React, {useRef} from "react";
import { useDispatch } from 'react-redux'
import { importSongName, importSongArtist, importSongAtmosphere } from '../actions'
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import "../App.css";

function SongInfoForm() {
  const songField = useRef(null);
  const artistField = useRef(null);
  // const atmosphereField = useRef(null);
  const dispatch = useDispatch();
  const handleClick = atmo => {
    // let type;
    // switch(atmo){
    //   case 'jogging':{
    //     type = '路跑'
    //     break;
    //   }
    //   case 'workout':{
    //     type = '健身'
    //     break;
    //   }
    //   case 'working':{
    //     type = '工作'
    //     break;
    //   }
    //   case 'party':{
    //     type = '派對'
    //     break;
    //   }
    //   case 'dinner':{
    //     type = '晚餐'
    //     break;
    //   }
    //   case 'morning':{
    //     type = '清晨'
    //     break;
    //   }
    //   default: {
    //     console.log('wrong type')
    //   }
    // }
    // atmosphereField.current.value = type
    dispatch(importSongAtmosphere(atmo))
  }

  // from Chinese to English
  // const atmosphereFormat = atmo => {
  //   let returnVal;
  //   switch(atmo){
  //     case '路跑':{
  //       returnVal = 'jogging'
  //       break;
  //     }
  //     case '健身':{
  //       returnVal = 'workout'
  //       break;
  //     }
  //     case '工作':{
  //       returnVal = 'working'
  //       break;
  //     }
  //     case '派對':{
  //       returnVal = 'party'
  //       break;
  //     }
  //     case '晚餐':{
  //       returnVal = 'dinner'
  //       break;
  //     }
  //     case '清晨':{
  //       returnVal = 'morning'
  //       break;
  //     }
  //     default: {
  //       returnVal = atmo;
  //     }
  //   }
  //   return returnVal;
  // }

  const handleSongChange = () => {
    dispatch(importSongName(songField.current.value))
  }

  const handleArtistChange = () => {
    dispatch(importSongArtist(artistField.current.value))
  }

  // const handleAtmoChange = () => {
  //   dispatch(importSongAtmosphere(atmosphereFormat(atmosphereField.current.value)))
  // }

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>歌曲名稱</Form.Label>
          <Form.Control ref={songField} onChange={handleSongChange} placeholder="輸入歌名" />
        </Form.Group>
        <Form.Group>
          <Form.Label>歌手</Form.Label>
          <Form.Control ref={artistField}onChange={handleArtistChange}  placeholder="輸入歌手" />
        </Form.Group>

        <Form.Group>
          <Form.Label>選擇情境</Form.Label>
          {/* <Form.Control placeholder="輸入情境" ref={atmosphereField} onChange={handleAtmoChange}/> */}
          <DropdownButton style={{marginTop: '10px'}}id="dropdown-basic-button" title="現有情境">
            <Dropdown.Item onClick={()=>{handleClick('jogging')}}>路跑</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleClick('workout')}}>健身</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleClick('working')}}>工作</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleClick('dinner')}}>晚餐</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleClick('party')}}>派對</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleClick('morning')}}>清晨</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SongInfoForm;
