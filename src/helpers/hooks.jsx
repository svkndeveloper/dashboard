import { useEffect, useState } from 'react';

export const useTimeRemaining = (date, time) => {
    const [timeRemaining, setTimeRemaining] = useState(false);
    useEffect(() => {
    const checkTimeAndSetRemaining = () => {
      const current_time = new Date();
      const [hours, minutes] = time.split(':').map(part => parseInt(part, 10));
      const currentDate = new Date(date);
      currentDate.setHours(hours, minutes, 0, 0);
      const time_difference = currentDate - current_time;
      const seconds_remaining = Math.floor(time_difference / 1000);
      if (seconds_remaining < 2 * 60 * 60) {
        setTimeRemaining(true);
      } else {
        setTimeRemaining(false);
      }
    };

    checkTimeAndSetRemaining();

    const intervalId = setInterval(checkTimeAndSetRemaining, 100000);

    return () => clearInterval(intervalId);
  }, [date, time]);

  return timeRemaining;
};


export const useCheckOvertime = (date, time) => {
  const [overtimed, setOvertimed] = useState(false);

  useEffect(() => {
    const targetTime = new Date(date);
    const [targetHours, targetMinutes] = time.split(":");
    targetTime.setHours(Number(targetHours), Number(targetMinutes), 0);
    const currentTime = new Date();
    const isEarlier =
      currentTime.getHours() > targetTime.getHours() || (
        currentTime.getHours() >= targetTime.getHours() &&
        currentTime.getMinutes() > targetTime.getMinutes()
      );
    const isToday =
      currentTime.getDate() === targetTime.getDate() &&
      currentTime.getMonth() === targetTime.getMonth() &&
      currentTime.getFullYear() === targetTime.getFullYear();

    if (isEarlier && isToday) {
      setOvertimed(true);
    } else {
      setOvertimed(false);
    }
  }, [date, time]);

  return overtimed;
};

export const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Easy':
      return '#00D7FF';
    case 'Normal':
      return '#24D40C';
    case 'Hard':
      return '#DB0837';
    default:
      return '#24D40C';
  }
};

export const getCategoryBackgroundColor = (category) => {
  switch (category) {
    case 'Stuff':
      return '#B9C3C8';
    case 'Family':
      return '#FFE6D3';
    case 'Leisure':
      return '#F8D2FF';
    case 'Health':
      return '#CDF7FF';
    case 'Learning':
      return '#FFF6C0';
    case 'Work':
      return '#9AC2A5';
    default:
      return '#B9C3C8';
  }
};

export function useNarrowScreen() {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(min-width: 768px)");

    setIsNarrowScreen(mediaWatcher.matches);

    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }

    if (mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsNarrowScreen);

      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
      };
    } else {
      mediaWatcher.addListener(updateIsNarrowScreen);

      return function cleanup() {
        mediaWatcher.removeListener(updateIsNarrowScreen);
      };
    }
  }, []); 

  return isNarrowScreen;
}
















