import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import { PhotoModal } from "./PhotoModal";
import { TasteOfColorsContent } from "@/types/TasteOfColorsContent";
import { PhotoDetail } from "./PhotoDetail";
import { useStyles } from "./TasteColors.styles";

interface TasteColorsProps {
  content?: TasteOfColorsContent;
}

interface PhotoDetails {
  photo: string;
  photoAlt: string;
}

export const TasteColors = ({ content }: TasteColorsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classes = useStyles();
  const [photoDetails, setPhotoDetails] = useState<PhotoDetails | null>(null);

  const onClickCardHandler = (photo: string, photoAlt: string) => {
    setPhotoDetails({ photo, photoAlt });
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  const onClickModalHandler = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <Box className={classes.tasteColors}>
      <Typography variant="h5">{content?.title}</Typography>
      <Box className="divider">
        <Divider aria-hidden="true" />
      </Box>

      {isModalOpen && (
        <PhotoModal
          isOpen={isModalOpen}
          photoAlt={photoDetails?.photoAlt ?? ""}
          photo={photoDetails?.photo ?? ""}
          onClick={onClickModalHandler}
        />
      )}
      <Grid container spacing={1}>
        {(content?.colorDetails || []).map((detail, index) => {
          return (
            <Grid size={{ xs: 12, sm: 4 }} key={`photodetail-${index}`}>
              <PhotoDetail
                key={`photodetail-${index}`}
                detail={detail}
                onClick={onClickCardHandler}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
