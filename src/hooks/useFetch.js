import { useState, useEffect } from "react";

const BASE_URL = "https://woosonicpwa.com/MitchAPI/filter.php";

const baseOptions = {
  method: "POST",
  headers: {
    Origin: "postman",
    Cookie: "cookieName=cookieValue",
    "Content-Type": "application/json",
  },
};

const useFetch = (category, onReceived) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(BASE_URL, {
          ...baseOptions,
          body: JSON.stringify({
            category,
            //* keyword endpoint not working, so i will search for products on the client
            // keyword: query,
            products_per_page: 12,
          }),
          // signal: controller.signal,
        });

        const data = await res.json();

        if (!res.ok && res.status !== 200) {
          throw new Error(
            data || `(${res.status}), some went wrong, please try again!`
          );
        }
        onReceived(data);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchData();

    /*
    - i can't cleanup the request each time the Effect Running.
    - because response give me a message (the user aborted a request).
    - this happens when i set signal in request options.
    */
    //? return () => controller.abort();
  }, [category, onReceived]);

  return { isLoading, error };
};

export default useFetch;
