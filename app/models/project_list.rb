class ProjectList < ApplicationRecord
  belongs_to :user

  has_many :projects dependent: :destroy
  has_many :climbs, through: :projects
end
