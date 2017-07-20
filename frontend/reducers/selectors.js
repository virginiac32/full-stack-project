import {values} from 'lodash';

export const selectAllArtworks = ({artworks}) => values(artworks.artworks);

export const selectArtwork = (artworks, artworkId) => {
  const artwork = artworks[artworkId] || {};
  return artwork;
};
