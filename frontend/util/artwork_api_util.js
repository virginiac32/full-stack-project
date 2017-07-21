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

export const deleteArtwork = (artwork) => (
  $.ajax({
    method: 'DELETE',
    url: `api/artworks/${artwork.id}`
  })
);

export const addImage = image => {
  const url = 'https://api.cloudinary.com/v1_1/'+window.cloudinary_options.cloud_name+'/image/upload';
  console.log(url);
  console.log(image);
  const form = {file: image, upload_preset:window.cloudinary_options.upload_preset};
  return $.ajax({
    method: 'POST',
    url: url,
    // cache: false,
    // headers: {'form-data': 'x-www.form-urlencoded'},
    contentType: false,
    processData: false,
    xhr: function () {return $.ajaxSettings.xhr();},
    data: new FormData(form)
    // data: {file: image, upload_preset: window.cloudinary_options.upload_preset}
    // data: {file: image, upload_preset: window.cloudinary_options.upload_preset}
  });
};
