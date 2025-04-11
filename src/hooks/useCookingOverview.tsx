import { fetchCookingOverviewContent } from "@/services/cookingOverviewContent";
import { CookingOverviewContent } from "@/types/CookingOverviewContent";
import { useState, useEffect } from "react";

export const useCookingOverview = () => {
  const [content, setContent] = useState({} as CookingOverviewContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCookingOverview = async () => {
      try {
        setLoading(true);
        const data = await fetchCookingOverviewContent(); // Call the mock API function
        setContent(data);
      } catch (err) {
        setError(`Failed to fetch content: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    getCookingOverview();
  }, []); // Empty dependency array means it will only run once when the component mounts

  return { content, loading, error };
};
