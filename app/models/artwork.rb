class Artwork < ApplicationRecord
  validates :title, :artist, :user, :link, presence: true

  belongs_to :user
  has_many :annotations
  has_many :comments

  # are the below correct?
  has_many :votes,
    through: :annotations,
    source: :votes

  has_many :votes,
    through: :comments,
    source: :votes

end
