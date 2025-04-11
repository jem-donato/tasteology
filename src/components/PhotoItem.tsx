import ImageListItem from "@mui/material/ImageListItem";
import { Photo } from "@/types/Photo";
import { useMobileBreakpoint } from "@/hooks/useMobileBreakpoint";

export interface PhotoDetailProps {
  photo: Photo;
  onClick: (photo: string, photoAlt: string) => void;
}

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

export const PhotoItem = ({ photo, onClick }: PhotoDetailProps) => {
  const onClickHandler = () => {
    onClick(photo.link, `photodetail-${photo.alt}`);
  };
  const isMobile = useMobileBreakpoint();
  return (
    <ImageListItem
      key={photo.link}
      cols={isMobile ? 4 : photo.cols}
      rows={isMobile ? 4 : photo.rows}
      onClick={onClickHandler}
      sx={{ cursor: "pointer" }}
    >
      <img
        {...srcset(photo.link, 121, photo.rows, photo.cols)}
        alt={photo.alt}
        loading="lazy"
      />
    </ImageListItem>
  );
};
