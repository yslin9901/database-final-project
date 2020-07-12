import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SongInfoForm from "./SongInfoForm";
import "../App.css";

function ImportSongModal() {
  const name = useSelector((state) => state.import_song_name);
  const artist = useSelector((state) => state.import_song_artist);
  const atmo = useSelector((state) => state.import_song_atmosphere);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    console.log(atmo);
    fetchData();
    setShow(false);
  };
  const style = {
    marginRight: "30px",
    color: "white",
  };

  const fetchData = () => {
    const api_key = "AIzaSyACXMpIuPD38LSqpHeXr8nY9kj8cR54vEg";
    // get videoId
    fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${
        artist + name
      }&part=snippet&type=video&key=${api_key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("video id =", data.items[0]["id"]["videoId"]);
        const videoId = data.items[0]["id"]["videoId"];
        const api = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${api_key}`;
        // get duration
        fetch(api)
          .then((res) => res.json())
          .then((data) => {
            let origin_duration = data.items[0]["contentDetails"]["duration"];
            var time = origin_duration.split("PT");
            var min = time[1].split("M");
            var sec = min[1].split("S");
            var duration = Number(min[0]) * 60 + Number(sec[0]);
            console.log("duration = ", duration);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal-button">
      <Button
        variant="success"
        onClick={handleShow}
        className="btn-lg"
        style={style}
      >
        新增歌曲至資料庫
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>歌曲詳細資訊</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SongInfoForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
          <Button variant="primary" onClick={handleSave}>
            匯入
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ImportSongModal;
