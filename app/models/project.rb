class Project < ApplicationRecord
  belongs_to :project_list
  belongs_to :climb

  has_many :project_plans
  has_many :workout_plans, through: :project_plans

  has_many :resources
  
end
