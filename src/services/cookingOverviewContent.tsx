import mockCookingOverviewContent from "../../mocks/cookingOverview.json";
import { CookingOverviewContent } from "@/types/CookingOverviewContent";

// Simulating an API call with a delay (like waiting for data from a server)
export const fetchCookingOverviewContent = () => {
  return new Promise<CookingOverviewContent>((resolve) => {
    setTimeout(() => {
      resolve(mockCookingOverviewContent);
    }, 2000); // Mock API delay of 2 seconds
  });
};
