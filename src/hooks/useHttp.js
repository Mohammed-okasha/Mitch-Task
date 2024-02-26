import { useState, useCallback } from "react";

const BASE_URL = "https://woosonicpwa.com/MitchAPI/filter.php";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const performRequest = useCallback(async (reqOptions, onReceived) => {
    setIsLoading(true);
    setError(null);

    const baseHeaders = {
      Origin: "postman",
      Cookie: "cookieName=cookieValue",
      "Content-Type": "application/json",
    };

    try {
      const res = await fetch(BASE_URL, {
        method: reqOptions.method || "POST",
        body: reqOptions.body ? JSON.stringify(reqOptions.body) : null,
        headers: { ...baseHeaders, ...reqOptions.headers },
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(
          result.message ||
            `(${res.status}), some went wrong, please try again!`
        );
      }

      onReceived?.(result);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  return { isLoading, error, performRequest };
};
