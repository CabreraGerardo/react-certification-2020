import { storage } from './storage';

function random(limit) {
  return Math.floor(Math.random() * limit);
}

function getTimeLapsed(publishedDate) {
  const milliseconds = Math.abs(new Date() - new Date(publishedDate));
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  let diff = '';

  if (milliseconds < 1000) {
    diff = 'Just now';
  } else if (seconds < 60) {
    diff = `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
  } else if (minutes < 60) {
    diff = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (hours < 24) {
    diff = `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (days < 7) {
    diff = `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (weeks < 4) {
    diff = `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (months < 12) {
    diff = `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    diff = `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }

  return diff;
}

function checkIfFavorite(videoId) {
  return Boolean((storage.get('favorites') || []).find((e) => e.id.videoId === videoId));
}

function addToFavorites(video) {
  storage.set('favorites', [...(storage.get('favorites') || []), video]);
}

function removeFromFavorites(videoId) {
  const videos = storage.get('favorites');
  const video = videos.find((e) => e.id.videoId === videoId);

  if (video) videos.splice(videos.indexOf(video), 1);
  storage.set('favorites', videos);
}

export { random, getTimeLapsed, checkIfFavorite, addToFavorites, removeFromFavorites };
