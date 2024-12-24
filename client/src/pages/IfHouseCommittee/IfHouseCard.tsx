import { IHouse } from "../../types/types";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

interface IfHouseCardProps {
  card: IHouse;
}

const IfHouseCard = ({ card }: IfHouseCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 400 }} onClick={() => navigate(`/${card._id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={card.image[0]}
          alt="alt"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {card.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default IfHouseCard;
