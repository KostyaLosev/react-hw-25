const API_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";

export const fetchMeals = async (fetchWithLogging) => {
    try {
        const response = await fetchWithLogging(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch meals");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching meals:", error);
        return [];
    }
};
