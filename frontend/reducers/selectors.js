import {values} from 'lodash';

export const selectAllArtworks = ({artworks}) => values(artworks.artworks);

export const selectArtwork = (artworks, artworkId) => {
  const artwork = artworks[artworkId] || {};
  return artwork;
};

export const selectArtworkComments = ({comments},artworkId) => {
  let artworkComments = [];
  comments.forEach( comment => {
    if (comment.artwork_id === artworkId) {
      artworkComments.push(comment);
    }});
  return artworkComments;
};
