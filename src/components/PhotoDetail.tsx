import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";

import { ColorDetail } from "@/types/TasteOfColorsContent";
import { useStyles } from "./PhotoDetail.styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

export interface PhotoDetailProps {
  detail: ColorDetail;
  onClick: (photo: string, photoAlt: string) => void;
}

export const PhotoDetail = ({ detail, onClick }: PhotoDetailProps) => {
  const classes = useStyles();

  const onClickHandler = () => {
    onClick(detail.link, `photodetail-${detail.title}`);
  };
  return (
    <div className={classes.photoDetail}>
      <Grow in={true}>
        <Card onClick={onClickHandler}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={detail.link}
              alt={`photodetail-${detail.title}`}
            />
          </CardActionArea>
        </Card>
      </Grow>
      <Typography className="title-detail">{detail.title}</Typography>
      <Typography className="description-details">
        {detail.description}
      </Typography>
    </div>
  );
};
