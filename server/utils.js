import fetch from 'isomorphic-fetch';
import qs from 'query-string';

export const getData = (url, options = {}) => {
  if (options.query) {
    url = `${url}?${options.query}`;
    delete options.query;
  }
  return fetch(url, options);
}

export const processIds = markers => {
  if (!markers || !markers.length) return '';

  const ids = markers.map(marker => marker.id); // get all the ids for the markers
  return qs.stringify({ ids }, { arrayFormat: 'bracket' });
}

export const transformMarkersByRange = (data, start = 0, end = 30) => {
  if (!data || !data.length) return [];

  return data
    .sort((a, b) => b.relevance > a.relevance ? 1 : -1) // order list by relevance
    .slice(start, end) // get the number of items specified by the range
}

export const transformHomecards = data => {
  if (!data || !data.homecards || !data.homecards.length) return { homecards: [] };

  const homecards = data.homecards.map(buildHomeCardData);
  return { homecards };
}

const buildHomeCardData = ({ id, adId, currencySymbol, pricePerMonth, photoUrls, title }) =>
  ({ id, adId, currencySymbol, pricePerMonth, photoUrls, title });
