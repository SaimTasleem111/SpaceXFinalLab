// /src/components/MyProfile.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reservedRockets = useSelector((state) => state.spaceX.reservedRockets);
  const reservedMissions = useSelector((state) => state.spaceX.reservedMissions);

  return (
    <div>
      <h2>My Profile</h2>
      <div>
        <h3>My Reserved Rockets</h3>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>My Reserved Missions</h3>
        <ul>
          {reservedMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;

