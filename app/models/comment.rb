class Comment < ApplicationRecord
  validates :body, :artwork_id, :user_id, :total_score, presence: true

  belongs_to :user
  belongs_to :artwork

  def self.by_artwork(artwork_id)
    self.includes(:artwork).where("artworks.id" => artwork_id)
  end

end
