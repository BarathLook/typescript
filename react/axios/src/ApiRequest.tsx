import React, { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios'; // Import AxiosError and AxiosResponse
import './styles.css';

interface ApiResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ApiRequest: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null); // Use AxiosError for the error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse, AxiosResponse<ApiResponse>>(
          'https://jsonplaceholder.typicode.com/posts/1'
        );
        setData(response.data);
      } catch (error) {
        // setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container">
      <h2>API Response:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ApiRequest;
