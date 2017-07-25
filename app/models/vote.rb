class Vote < ApplicationRecord
  validates :user, presence: true

  belongs_to :user
  belongs_to :comment
  belongs_to :annotation

  # are the below correct?
  has_one :artwork,
    through: :comment,
    source: :artwork

  has_one :artwork,
    through: :annotation,
    source: :artwork
end
