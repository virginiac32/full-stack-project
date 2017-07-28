class Artwork < ApplicationRecord
  validates :title, :artist, :user, :link, presence: true

  belongs_to :user
  has_many :annotations, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_many :votes,
    through: :annotations,
    source: :votes

  has_many :votes,
    through: :comments,
    source: :votes

end
