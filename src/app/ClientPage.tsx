import React, { useState } from "react";
import Container from "@mui/material/Container";

import { useTasteOfColors } from "@/hooks/useTasteOfColors";
import { TasteColors } from "../components/TasteColors";
import { useCookingOverview } from "@/hooks/useCookingOverview";
import { CookingOverview } from "@/components/CookingOverview";
import { PhotoDetails } from "@/types/PhotoDetails";
import { PhotoModal } from "@/components/PhotoModal";
import { LoadingScreen } from "@/components/LoadingScreen";

export const ClientPage = () => {
  const { content: tasteOfColorsContent, loading: tasteOfColorsLoading } =
    useTasteOfColors();

  const {
    content: cookingOverviewContent,
    loading: cookingOverviewContentLoading,
  } = useCookingOverview();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoDetails, setPhotoDetails] = useState<PhotoDetails | null>(null);

  const onClickPhotoHandler = (photoDetail: PhotoDetails) => {
    const { photo, photoAlt } = photoDetail;
    setPhotoDetails({ photo, photoAlt });
    setIsModalOpen((isModalOpen) => !isModalOpen);
    console.log("photo onclick");
  };

  const onClickModalHandler = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };
  return cookingOverviewContentLoading || tasteOfColorsLoading ? (
    <LoadingScreen />
  ) : (
    <Container maxWidth="lg">
      {isModalOpen && (
        <PhotoModal
          isOpen={isModalOpen}
          photoAlt={photoDetails?.photoAlt ?? ""}
          photo={photoDetails?.photo ?? ""}
          onClick={onClickModalHandler}
        />
      )}
      <CookingOverview
        content={cookingOverviewContent}
        onClick={onClickPhotoHandler}
      />
      <TasteColors
        content={tasteOfColorsContent}
        onClick={onClickPhotoHandler}
      />
    </Container>
  );
};
