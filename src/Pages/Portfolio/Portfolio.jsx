import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <div>
      <div
        className="portfolio"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="mobileView">
        <Card sx={{ maxWidth: 1200 , ml: 2 , mr: 2 , mt: 5}}  data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://scx1.b-cdn.net/csz/news/800a/2023/illustration-released.jpg"
              alt="green iguana"
            />
            <CardContent sx={{backgroundColor: "#24323e", color: "white" , textAlign: "start"}}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{color: "white" , textAlign: "start"}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 1200 , ml: 2 , mr: 2 , mt: 5}}  data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.etimg.com/thumb/msid-100345955,width-210,height-158,imgsize-28048,,resizemode-75/google-bard-chatgpt-giving-stock-ideas-but-should-investors-say-aye-to-ai.jpg"
              alt="green iguana"
            />
            <CardContent sx={{backgroundColor: "#24323e", color: "white" , textAlign: "start"}}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{color: "white" , textAlign: "start"}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 1200 , ml: 2 , mr: 2 , mt: 5}}  data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://miro.medium.com/v2/resize:fit:640/format:webp/0*kGal_TgMZnDg3LCf.png"
              alt="green iguana"
            />
            <CardContent sx={{backgroundColor: "#24323e", color: "white" , textAlign: "start"}}>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{color: "white" , textAlign: "start"}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
        <div style={{margin: 20}} className="desktopView">
          <Card
            sx={{
              maxWidth: 800,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              color: "white",
              mb: 5,
            }}
          >
            <div style={{padding: 10}}>
              <h2 style={{fontWeight: "bolder"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, alias.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                nisi dignissimos minus ipsum cumque libero molestias quos,
                nesciunt fugit adipisci quas! Architecto delectus commodi
                impedit voluptatum inventore esse quo eius.
              </p>
              {/* <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "space-evenly",
                }}
              >
                <p>React</p>
                <p>14 min read</p>
                <p>Selected for you</p>
              </div> */}
            </div>
            <CardMedia
              component="img"
              height="140"
              image="https://scx1.b-cdn.net/csz/news/800a/2023/illustration-released.jpg"
              alt="green iguana"
              sx={{ width: 250 }}
            />
          </Card>
          <Card
            sx={{
              maxWidth: 800,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              color: "white",
              mb: 5,
            }}
          >
            <div style={{padding: 10}}>
              <h2 style={{fontWeight: "bolder"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, alias.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                nisi dignissimos minus ipsum cumque libero molestias quos,
                nesciunt fugit adipisci quas! Architecto delectus commodi
                impedit voluptatum inventore esse quo eius.
              </p>
              {/* <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "space-evenly",
                }}
              >
                <p>React</p>
                <p>14 min read</p>
                <p>Selected for you</p>
              </div> */}
            </div>
            <CardMedia
              component="img"
              height="140"
              image="https://img.etimg.com/thumb/msid-100345955,width-250,imgsize-28048,,resizemode-75/google-bard-chatgpt-giving-stock-ideas-but-should-investors-say-aye-to-ai.jpg"
              alt="green iguana"
              sx={{ width: 250 }}
            />
          </Card>
          <Card
            sx={{
              maxWidth: 800,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              color: "white",
              mb: 5,
            }}
          >
            <div style={{padding: 10}}>
              <h2 style={{fontWeight: "bolder"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, alias.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                nisi dignissimos minus ipsum cumque libero molestias quos,
                nesciunt fugit adipisci quas! Architecto delectus commodi
                impedit voluptatum inventore esse quo eius.
              </p>
              {/* <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "space-evenly",
                }}
              >
                <p>React</p>
                <p>14 min read</p>
                <p>Selected for you</p>
              </div> */}
            </div>
            <CardMedia
              component="img"
              height="140"
              image="https://scx1.b-cdn.net/csz/news/800a/2023/illustration-released.jpg"
              alt="green iguana"
              sx={{ width: 250 }}
            />
          </Card>
          <Card
            sx={{
              maxWidth: 800,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              color: "white",
              mb: 5,
            }}
          >
            <div style={{padding: 10}}>
              <h2 style={{fontWeight: "bolder"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, alias.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                nisi dignissimos minus ipsum cumque libero molestias quos,
                nesciunt fugit adipisci quas! Architecto delectus commodi
                impedit voluptatum inventore esse quo eius.
              </p>
              {/* <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "space-evenly",
                }}
              >
                <p>React</p>
                <p>14 min read</p>
                <p>Selected for you</p>
              </div> */}
            </div>
            <CardMedia
              component="img"
              height="140"
              image="https://scx1.b-cdn.net/csz/news/800a/2023/illustration-released.jpg"
              alt="green iguana"
              sx={{ width: 250 }}
            />
          </Card>
        </div>
        <div style={{margin: 10}} className="discoverBtns">
          <div style={{color: "white" , margin: 10}}>Discover more of you what matters to you</div>
          <div className="blogsBtns">
            <button className="blogBtn">Programming</button>
            <button className="blogBtn">Data Science</button>
            <button className="blogBtn">Technology</button>
            <button className="blogBtn">Self Improvement</button>
            <button className="blogBtn">Writing</button>
            <button className="blogBtn">Relationships</button>
            <button className="blogBtn">Machine Learning</button>
            {/* <button className="portfolio-buttons">Productivity</button> */}
            {/* <button className="portfolio-buttons">Politics</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
