if @artwork
  json.extract! @artwork, :title, :description, :artist, :user_id,
    :link, :year, :id

  json.comments do
    @artwork.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :user_id, :id, :body, :total_score, :created_at
      end
    end
  end

  json.annotations do
    @artwork.annotations.each do |annotation|
      json.set! annotation.id do
        json.extract! annotation, :user_id, :id, :body, :total_score,
          :x_pos, :y_pos, :created_at
      end
    end
  end
  #
  # json.user do
  #   @artwork.user do
  #     json.set! user.id do
  #       json.extract! user, :id, :votes
  #     end
  #   end
  # end

end
