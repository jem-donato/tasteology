import Typography from "@mui/material/Typography";

import { ColorDetail } from "@/types/TasteOfColorsContent";
import { useStyles } from "./PhotoDetail.styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import { motion } from "framer-motion";

export interface PhotoDetailProps {
  detail: ColorDetail;
  onClick: (photo: string, photoAlt: string) => void;
  index: number;
}

const MotionCard = motion(Card); // Convert to motion-capable

export const PhotoDetail = ({ detail, onClick, index }: PhotoDetailProps) => {
  const classes = useStyles();

  const onClickHandler = () => {
    onClick(detail.link, `photodetail-${detail.title}`);
  };
  return (
    <div className={classes.photoDetail}>
      <MotionCard
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        onClick={onClickHandler}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={detail.link}
            alt={`photodetail-${detail.title}`}
          />
        </CardActionArea>
      </MotionCard>

      <Typography className="title-detail" variant="body1">
        {detail.title}
      </Typography>
      <Typography className="description-detail" variant="body1">
        {detail.description}
      </Typography>
    </div>
  );
};
