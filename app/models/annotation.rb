class Annotation < ApplicationRecord
  validates :user_id, :artwork_id, :body, :x_pos, :y_pos, :total_score, presence: true

  belongs_to :user
  belongs_to :artwork
end
