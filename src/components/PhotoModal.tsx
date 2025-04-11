import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

interface PhotoModalProps {
  isOpen: boolean;
  onClick?: () => void;
  photo: string;
  photoAlt: string;
}

export const PhotoModal = ({
  isOpen,
  onClick,
  photo,
  photoAlt,
}: PhotoModalProps) => {
  return (
    <Modal open={isOpen} onClose={onClick}>
      <Fade in={isOpen}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <img height="50%" src={photo} alt={photoAlt}></img>
        </Box>
      </Fade>
    </Modal>
  );
};
