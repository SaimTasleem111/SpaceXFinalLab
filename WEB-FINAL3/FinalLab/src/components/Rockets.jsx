// /src/components/Rockets.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRockets, fetchRockets } from '../redux/spaceXSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(selectRockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
    <h2>Rockets</h2>
    {rockets.map((rocket) => (
      <Item
        key={rocket.id}
        rocket={rocket}
        onReserve={() => handleReserveRocket(rocket.id)}
        onCancelReservation={() => handleCancelReservation(rocket.id)}
      />
    ))}
  </div>
  );
};

export default Rockets;


