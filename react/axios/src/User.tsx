import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface UserParams {
  username: string;
}

const User: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <div>
      <h2>User: {username}</h2>
      <button onClick={handleNavigate}>Navigate to About</button>
    </div>
  );
};

export default User;
