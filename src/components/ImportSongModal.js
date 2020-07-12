import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SongInfoForm from "./SongInfoForm";
import axios from "axios";
import "../App.css";

function ImportSongModal(props) {
  const name = useSelector((state) => state.import_song_name);
  const artist = useSelector((state) => state.import_song_artist);
  const atmo = useSelector((state) => state.import_song_atmosphere);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    console.log(atmo);
    //get videoId
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyACXMpIuPD38LSqpHeXr8nY9kj8cR54vEg",
        {
          params: {
            part: "snippet",
            q: artist + name,
            type: "video",
          },
        }
      )
      .then((res) => {
        console.log(res.data.items[0]["id"]["videoId"]); //video id
      })
      .catch((e) => {
        console.log(e);
      });

    //get duration
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyACXMpIuPD38LSqpHeXr8nY9kj8cR54vEg",
        {
          params: {
            part: "snippet,contentDetails",
            id: "FonjL7DQAUQ", //need to modify video id
          },
        }
      )
      .then((res) => {
        var origin_duration = res.data.items[0]["contentDetails"]["duration"];
        //console.log(origin_duration) //PT5M32S
        var time = origin_duration.split("PT");
        var min = time[1].split("M");
        var sec = min[1].split("S");

        var duration = Number(min[0]) * 60 + Number(sec[0]);
        console.log(duration); //duration of this song
      })
      .catch((e) => {
        console.log(e);
      });
    setShow(false);
  };
  const style = {
    marginRight: "30px",
    color: "white",
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
