class ProjectPlan < ApplicationRecord
  belongs_to :project
  belongs_to :workout_plan
end
