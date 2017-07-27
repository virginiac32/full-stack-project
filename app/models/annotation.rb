class Annotation < ApplicationRecord
  validates :user, :artwork, :body, :x_pos, :y_pos, :total_score, presence: true

  belongs_to :user
  belongs_to :artwork
  has_many :votes, as: :votable, dependent: :destroy
end
