if @annotation
  json.extract! @annotation, :user_id, :artwork_id, :body,
    :x_pos, :y_pos, :total_score, :id, :user, :votes
end
