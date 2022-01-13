class ProjectList < ApplicationRecord
  belongs_to :user

  has_many :projects
  has_many :climbs, through: :projects
end
