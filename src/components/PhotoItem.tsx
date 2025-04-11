import ImageListItem from "@mui/material/ImageListItem";
import { Photo } from "@/types/Photo";
import { useMobileBreakpoint } from "@/hooks/useMobileBreakpoint";
import { motion } from "framer-motion";

export interface PhotoDetailProps {
  photo: Photo;
  onClick: (photo: string, photoAlt: string) => void;
  index: number;
}

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const MotionImageListItem = motion(ImageListItem); // Convert to motion-capable

export const PhotoItem = ({ photo, onClick, index }: PhotoDetailProps) => {
  const onClickHandler = () => {
    onClick(photo.link, `photodetail-${photo.alt}`);
  };
  const isMobile = useMobileBreakpoint();
  return (
    <MotionImageListItem
      key={photo.link}
      cols={isMobile ? 4 : photo.cols}
      rows={isMobile ? 4 : photo.rows}
      onClick={onClickHandler}
      sx={{ cursor: "pointer" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3, duration: 0.8 }}
    >
      <img
        {...srcset(photo.link, 121, photo.rows, photo.cols)}
        alt={photo.alt}
        loading="lazy"
      />
    </MotionImageListItem>
  );
};
