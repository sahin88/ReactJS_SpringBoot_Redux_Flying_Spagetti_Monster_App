import { useState } from "react";
import "../css/card_clean.css";
import { FaSprayCan } from 'react-icons/fa';


export default function CardClean() {

    
  const [userinfo, setUserInfo] = useState([
    {
      header: "Fliegende Spagetti Monster ist echt",
      image:
        "https://hpd.de/sites/hpd.de/files/styles/head_crop_autoreuse/public/cover_fsm-buch.jpg?itok=HaF-ku--&c=a5dd48dc1b90c3ad26e46aaa4c1e1897",
      explanation: "Das  heilige fliegende Spaghettimonster "
    },
    {
      header: "Das heilige fliegende Spagetti Monster",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Creaci%C3%B3n_de_Ad%C3%A1m.jpg",
      explanation: "Moschee of Spagetti Monster"
    },
    {
      header: "Das heilige fliegende Spagetti Monster ist barmherzig",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/MEVyMosey.png",
      explanation: "Moschee of Spagetti Monster"
    }
  ]);
  return (
    <div className="dienste">
      {userinfo.map((userdata, index) => {
        return (
          <div className="card_clean">
            <div
              style={{
                ...styles.card_image,
                backgroundImage: `url(${userdata.image})`
              }}
              className="card_clean_image"
              alt={`user_${index + 1}`}
            ></div>
            <div className="card_clean_explanation_logo_header">
              <div className="card_clean_logo"><FaSprayCan style={{width:'35px',color:'#fff',height:'35px'}}/> </div>
              <div className="card_clean_header" key={index + 1}>
                {userdata.header}
              </div>
              <div className="card_clean_explanation">{userdata.explanation}</div>
              <div className="card_clean_button">Read More!</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  card_image: {
    backgroundImage: ``,
    position: "relative",
    width: "300px",
    height: "50%",
    backgroundSize: "cover"
  }
};
