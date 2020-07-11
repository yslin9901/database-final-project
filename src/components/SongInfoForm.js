import React, {useRef} from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

import "../App.css";

function SongInfoForm() {
  const atmosphereField = useRef(null);
  const handleClick = atmo => {
    let type;
    switch(atmo){
      case 'jogging':{
        type = '路跑'
        break;
      }
      case 'workout':{
        type = '健身'
        break;
      }
      case 'working':{
        type = '工作'
        break;
      }
      case 'party':{
        type = '派對'
        break;
      }
      case 'dinner':{
        type = '晚餐'
        break;
      }
      case 'morning':{
        type = '清晨'
        break;
      }
      default: {
        console.log('wrong type')
      }
    }
    atmosphereField.current.value = type
  }
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>歌曲名稱</Form.Label>
          <Form.Control placeholder="輸入歌名" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>歌手</Form.Label>
          <Form.Control placeholder="輸入歌手" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>情境</Form.Label>
          <Form.Control placeholder="輸入情境" ref={atmosphereField} />
          <DropdownButton style={{marginTop: '10px', marginLeft: '75%'}}id="dropdown-basic-button" title="現有情境">
            <Dropdown.Item onClick={()=>{handleClick('jogging')}}>路跑</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleClick('workout')}}>健身</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleClick('working')}}>工作</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleClick('dinner')}}>晚餐</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleClick('party')}}>派對</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleClick('morning')}}>清晨</Dropdown.Item>
          </DropdownButton>
        </Form.Group>

        {/* <Form.File
          id="custom-file"
          label="上傳歌曲"
          custom
        /> */}
      </Form>
    </div>
  );
}

export default SongInfoForm;
