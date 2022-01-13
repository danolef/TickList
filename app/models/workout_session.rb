class WorkoutSession < ApplicationRecord
  belongs_to :workout_plan
  
  has_many :session_exercises
  has_many :workout_exercises, through: :session_exercises

  has_many :session_climbing_drills
  has_many :climbing_drills, through: :session_climbing_drills
end
