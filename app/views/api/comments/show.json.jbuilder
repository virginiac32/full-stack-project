if @comment
  json.extract! @comment, :user_id, :artwork_id, :body, :total_score,
    :id, :user, :votes
end
