if @artwork
  json.extract! @artwork, :title, :description, :artist, :user,
    :link, :year, :id

  json.comments do
    @artwork.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :user, :id, :body, :total_score
      end
    end
  end

  json.annotations do
    @artwork.annotations.each do |annotation|
      json.set! annotation.id do
        json.extract! annotation, :user, :id, :body, :total_score, :x_pos, :y_pos
      end
    end
  end

end
