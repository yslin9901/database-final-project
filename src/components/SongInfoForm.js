import React from 'react';
import Form from 'react-bootstrap/Form';

import '../App.css';

function SongInfoForm() {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>歌曲名稱</Form.Label>
          <Form.Control placeholder="輸入歌名" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>bpm</Form.Label>
          <Form.Control placeholder="輸入 bpm" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>情境</Form.Label>
          <Form.Control placeholder="輸入情境" />
        </Form.Group>

        <Form.File
          id="custom-file"
          label="上傳歌曲"
          custom
        />
      </Form>
    </div>
  );
}

export default SongInfoForm;

