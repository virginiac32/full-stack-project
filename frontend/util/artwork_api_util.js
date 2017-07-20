export const fetchArtworks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/artworks'
  })
);

export const fetchArtwork = (id) => (
  $.ajax({
    method: 'GET',
    url: 'api/artworks/${id}'
  })
);

export const createArtwork = (artwork) => (
  $.ajax({
    method: 'POST',
    url: 'api/artworks/${id}'
  })
);
