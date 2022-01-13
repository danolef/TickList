class WorkoutSession < ApplicationRecord
  belongs_to :workout_plan
  belongs_to :workout_exercise, optional: true
  belongs_to :climbing_drill, optional: true
end
