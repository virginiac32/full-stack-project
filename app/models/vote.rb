class Vote < ApplicationRecord
  validates :user, presence: true
  validates_uniqueness_of :user_id, scope [:votable_id, :votable_type]
  validates :value, inclusion: { in: [-1,1] }

  belongs_to :votable, polymorphic: true
  belongs_to :user

  has_one :artwork,
    through: :votable,
    source: :artwork
end
