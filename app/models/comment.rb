class Comment < ApplicationRecord
  validates :body, :artwork, :user, :total_score, presence: true

  belongs_to :user
  belongs_to :artwork
  has_many :votes, as: :votable, dependent: :destroy

end
