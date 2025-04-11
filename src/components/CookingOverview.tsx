import { CookingOverviewContent } from "@/types/CookingOverviewContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ImageList from "@mui/material/ImageList";
import { motion } from "framer-motion";
import Fade from "@mui/material/Fade";

import { useStyles } from "./CookingOverview.styles";
import { PhotoItem } from "./PhotoItem";
import { PhotoDetails } from "@/types/PhotoDetails";

export interface CookingOverviewProps {
  content: CookingOverviewContent;
  onClick: (photoDetails: PhotoDetails) => void;
}

export const CookingOverview = ({ content, onClick }: CookingOverviewProps) => {
  const classes = useStyles();

  const onClickHandler = (photo: string, photoAlt: string) => {
    onClick({ photo, photoAlt });
  };

  return (
    <div className={classes.component}>
      <Fade in={true} timeout={1000}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <ImageList variant="quilted" cols={4} rowHeight={121}>
              {(content.photo || []).map((item, index) => (
                <PhotoItem
                  key={`photoitem-${index}`}
                  photo={item}
                  onClick={onClickHandler}
                  index={index}
                />
              ))}
            </ImageList>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Typography variant="h1" color="primary">
              {content?.title}
            </Typography>
            <Box className="divider">
              <Divider aria-hidden="true" />
            </Box>
            <Typography className="description" variant="body1">
              {content.description}
            </Typography>
            <Typography variant="overline">{content.subtitle}</Typography>
            <Typography className="subdescription" variant="body1">
              {content.subdescription}
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
};
