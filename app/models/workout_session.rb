class WorkoutSession < ApplicationRecord
  belongs_to :workout_plan
  
  has_many :session_exercises, dependent: :destroy
  has_many :workout_exercises, through: :session_exercises

  has_many :session_climbing_drills, dependent: :destroy
  has_many :climbing_drills, through: :session_climbing_drills
end
