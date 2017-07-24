class Comment < ApplicationRecord
  validates :body, :artwork_id, :user_id, :total_score, presence: true

  belongs_to :user
  belongs_to :artwork

end
