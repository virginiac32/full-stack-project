class Comment < ApplicationRecord
  validates :body, :artwork, :user, :total_score, presence: true

  belongs_to :user
  belongs_to :artwork
  has_many :votes

  # def self.by_artwork(artwork_id)
  #   self.includes(:artwork).where("artworks.id" => artwork_id)
  # end

end
