import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";

import { TasteOfColorsContent } from "@/types/TasteOfColorsContent";
import { PhotoDetail } from "./PhotoDetail";
import { useStyles } from "./TasteColors.styles";
import { PhotoDetails } from "@/types/PhotoDetails";

interface TasteColorsProps {
  content?: TasteOfColorsContent;
  onClick: (photoDetails: PhotoDetails) => void;
}

export const TasteColors = ({ content, onClick }: TasteColorsProps) => {
  const classes = useStyles();

  const onClickHandler = (photo: string, photoAlt: string) => {
    onClick({ photo, photoAlt });
  };
  return (
    <Box className={classes.tasteColors}>
      <Fade in={true} timeout={1000}>
        <div>
          <Typography variant="h1" color="primary">
            {content?.title}
          </Typography>
          <Box className="divider">
            <Divider aria-hidden="true" />
          </Box>

          <Grid container spacing={1}>
            {(content?.colorDetails || []).map((detail, index) => {
              return (
                <Grid size={{ xs: 12, sm: 4 }} key={`photodetail-${index}`}>
                  <PhotoDetail
                    key={`photodetail-${index}`}
                    detail={detail}
                    onClick={onClickHandler}
                    index={index}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Fade>
    </Box>
  );
};
