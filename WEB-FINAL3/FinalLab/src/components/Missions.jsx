
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMissions, fetchMissions } from '../redux/spaceXSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(selectMissions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
    <h2>Missions</h2>
    {missions.map((mission) => (
      <MissionItem
        key={mission.mission_id}
        mission={mission}
        onJoin={() => handleJoinMission(mission.mission_id)}
        onLeave={() => handleLeaveMission(mission.mission_id)}
      />
    ))}
    </div>
  );
};

export default Missions;

