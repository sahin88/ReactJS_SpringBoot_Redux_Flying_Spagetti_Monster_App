import { useEffect, useState } from "react";
import "../css/slider_image.css"

import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';

export default function SliderImage() {
  const [current, setCurrentId] = useState(1);
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
  const nextPage = () => {
    current > 1 ? setCurrentId(0) : setCurrentId(current + 1);
  };
  const prevPage = () => {
    current < 1 ? setCurrentId(2) : setCurrentId(current - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentId((current) => {
        return current > 1 ? setCurrentId(0) : setCurrentId(current + 1);
      });
    }, 9000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="home_page_image_slider">
      {current}
      <div className="home_page_image_slider_button">
        <div className="home_page_image_slider_button_right" onClick={prevPage}>
        <KeyboardArrowLeftOutlinedIcon/>
        </div>
        <div className="home_page_image_slider_button_left" onClick={nextPage}>
        <KeyboardArrowRightOutlinedIcon/>
        </div>
      </div>

      {userinfo.map((user_image, user_index) => {
        if (user_index === current) {
          return (
            <div
              style={{
                ...styles.home_page_image_slider_image,
                backgroundImage: `url(${user_image.image})`
              }}
              className={
                user_index === current
                  ? "home_page_image_slider_image_active"
                  : "home_page_image_slider_image"
              }
              alt={`user_${user_index + 1}`}
            >
              <div className="home_page_image_slider_text_group">
                <div className="home_page_image_slider_text_group_header">
                  {user_image.header}
                </div>
                <div className="home_page_image_slider_text_group_helper">
                  {user_image.explanation}
                </div>
              </div>
              ;
            </div>
          );
        }
      })}
    </div>
  );
}

const styles = {
  home_page_image_slider_image: {
    backgroundImage: ``,
    position: "relative",
    width: "100%",
    height: "50%",
    backgroundSize: "cover"
  }
};
