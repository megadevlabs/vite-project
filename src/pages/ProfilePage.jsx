import React from 'react';
import Menu from '../component/Menu';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  let { fbID, youTubeID } = useParams();
  return (
    <div>
      <Menu />
      <h1>This is Profile Page</h1>
      <p>Facebook ID: {fbID}</p>
      <p>Youtube ID: {youTubeID}</p>
    </div>
  );
};

export default ProfilePage;
