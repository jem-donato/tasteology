import { fetchTasteOfColorsContent } from "@/services/tasteOfColorsContent";
import { TasteOfColorsContent } from "@/types/TasteOfColorsContent";
import { useState, useEffect } from "react";

export const useTasteOfColors = () => {
  const [content, setContent] = useState({} as TasteOfColorsContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getContent = async () => {
      try {
        setLoading(true);
        const data = await fetchTasteOfColorsContent(); // Call the mock API function
        setContent(data);
      } catch (err) {
        setError("Failed to fetch content");
      } finally {
        setLoading(false);
      }
    };

    getContent();
  }, []); // Empty dependency array means it will only run once when the component mounts

  return { content, loading, error };
};
