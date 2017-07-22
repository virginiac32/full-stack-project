class Artwork < ApplicationRecord
  validates :title, :artist, :user_id, :link, presence: true

  belongs_to :user
  has_many :annotations

end
