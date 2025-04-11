import Typography from "@mui/material/Typography";

import { ColorDetail } from "@/types/TasteOfColorsContent";
import { useStyles } from "./PhotoDetail.styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

export interface PhotoDetailProps {
  detail: ColorDetail;
  onClick: () => void;
}

export const PhotoDetail = ({ detail, onClick }: PhotoDetailProps) => {
  const classes = useStyles();
  return (
    <div className={classes.photoDetail}>
      <Card onClick={onClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            // height="140"
            image={detail.link}
            alt={`photodetail-${detail.title}`}
          />
        </CardActionArea>
      </Card>
      <Typography className="title">{detail.title}</Typography>
      <Typography className="description">{detail.description}</Typography>
    </div>
  );
};
