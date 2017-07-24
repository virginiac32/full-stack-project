if @annotations
  @annotations.each do |annotation|
    json.set! annotation.id do
      json.extract! annotation, :body, :x_pos, :y_pos, :artwork_id,
        :total_score, :user_id, :id
    end
  end
end
