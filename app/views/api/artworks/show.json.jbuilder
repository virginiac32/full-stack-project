if @artwork
  json.extract! @artwork, :title, :description, :artist, :user_id,
    :link, :year, :id

    json.comments @artwork.comment_ids
    json.annotations @artwork.annotation_ids
end
