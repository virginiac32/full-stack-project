if @artworks
  @artworks.each do |artwork|
    json.set! artwork.id do
      json.extract! artwork, :title, :description, :artist,
        :user_id, :link, :year
    end
  end
end
