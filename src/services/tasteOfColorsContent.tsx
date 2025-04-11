import { TasteOfColorsContent } from "@/types/TasteOfColorsContent";
import mockTasteOfColorsContent from "../../mocks/tasteOfColors.json";

// Simulating an API call with a delay (like waiting for data from a server)
export const fetchTasteOfColorsContent = () => {
  return new Promise<TasteOfColorsContent>((resolve) => {
    setTimeout(() => {
      resolve(mockTasteOfColorsContent);
    }, 2000); // Mock API delay of 2 seconds
  });
};
