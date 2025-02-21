import { useEffect, useState } from "react";
import "./App.css";
import style from "./css file/navbar.module.css";
import img from "./img/me.png";
import close from "./img/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
function App() {
  let x = [
    { title: "home", src: "#home" },
    { title: "contact", src: "#" },
    { title: "about me", src: "#about-me" },
    { title: "for you", src: "#" },
    { title: "client", src: "#" },
  ];
  let [g, setg] = useState(false);
  let [count, setcount] = useState(0);
  let socialMedia = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      color: "#E1306C",
      link: "https://www.instagram.com/ahmad._.hyasat0/",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      color: "#188DF2",
      link: "https://www.facebook.com/profile.php?id=100069143982725",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      color: "#6e5494",
      link: "https://github.com/ahmad-hiasat",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      color: "#0A66C2",
      link: "https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%AD%D9%8A%D8%A7%D8%B5%D8%A7%D8%AA-102610332/",
    },
  ];
  let [color, setColoe] = useState("white");
  let [slide, setSlide] = useState(false);
  let [Count, setCount] = useState(0);
  let [close, setClose] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = () =>
      setWindowWidth(document.documentElement.clientWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div id="home"></div>
      <div className={slide ? style.blurit : style.dontblurit} >
        <div
          className={style.res}
          style={g ? { display: "none" } : {}}
          onClick={() => {
            setg(!g);
            setcount(1);
          }}
        ></div>
        <div
          className={g ? style.divtrue : style.divflase}
          style={count == 0 && windowWidth <= 480 ? { display: "none" } : {}}
        >
          <div onClick={() => setg(!g)} className={style.close}></div>

          {x.map((pre, index) => {
            return (
              <>
                <a href={pre.src} className={style.a} key={index}>
                  {pre.title}
                </a>
              </>
            );
          })}
        </div>
        <div className={style.imgdiv}>
          <img src={img} className={style.img}></img>
        </div>
        <div className={style.divahmad}>
          <p className={style.ahmad}>Ahmad Hiasat</p>
          <p className={style.soft}>software eng</p>
        </div>
        <div className={style.social} style={{ backgroundColor: color }}>
          {socialMedia.map((so, index) => {
            return (
              <a target="_blank" key={index} href={so.link}>
                <img
                  src={so.img}
                  className={style.sociald}
                  onMouseLeave={() => setColoe("white")}
                  onMouseEnter={() => setColoe(so.color)}
                />
              </a>
            );
          })}
        </div>
        <div
          className={style.aboutme}
          onClick={() => {
            setSlide(!slide), setCount(1);
          }}
        >
          <p>About me</p>
        </div>
      </div>
      {windowWidth > 799 ? (
        <div
          className={slide ? style.AnimateIt : style.DontAnimateIt}
          style={
            Count == 0
              ? { display: "none" }
              : {
                  borderRadius: "20px",
                  display: "inline-block",
                  position: "absolute",
                }
          }
        >
         I'm a frontend developer who enjoys creating smooth and engaging user experiences. I love bringing ideas to life using React and CSS, and I'm always looking to learn new things and improve my skills in the web development world.
        </div>
      ) : (
        <div className={slide ? style.popit : style.Dontpopit} style={Count==0?{display:'none'}:{}}>
          <div
            className={style.clsoeinpop}
            onClick={() => {
              setClose(false);
              setSlide(false);
            }}
          ></div>
         I'm a frontend developer who enjoys creating smooth and engaging user experiences. I love bringing ideas to life using React and CSS, and I'm always looking to learn new things and improve my skills in the web development world.
        </div>
      )}
      <div id="about-me" className={style.divabout}>
        <p> sooon......</p>
      </div>
    </>
  );
}

export default App;
