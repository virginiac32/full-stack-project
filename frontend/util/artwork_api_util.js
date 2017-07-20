export const fetchArtworks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/artworks/'
  })
);

export const fetchArtwork = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/artworks/${id}`
  })
);

export const createArtwork = (artwork) => (
  $.ajax({
    method: 'POST',
    url: 'api/artworks/',
    dataType: 'json',
    data: artwork
  })
);

export const deleteArtwork = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/artworks/${id}`
  })
);
