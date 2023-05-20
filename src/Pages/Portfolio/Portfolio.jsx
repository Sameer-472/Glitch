import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


const Portfolio = () => {
  return (
    <div>
      <div className="portfolio">
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
    </div>
  );
};

export default Portfolio;
