import { useCallback, useState } from "react";

export const useRequest = () => {
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);

      try {
        if (body) {
          body = JSON.stringify(body);
        }

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так");
        }

        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        throw e;
      }
    },
    []
  );

  return { loading, request };
};
