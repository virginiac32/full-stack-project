if @artwork
  json.extract! @artwork, :title, :description, :artist, :user_id, :link, :year, :id, :annotations, :comments
end
