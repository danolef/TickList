class WorkoutPlan < ApplicationRecord
  belongs_to :user

  has_many :workout_sessions, dependent: :destroy 
  has_many :workout_exercises, through: :workout_sessions
  has_many :climbing_drills, through: :workout_sessions

  has_many :project_plans, dependent: :destroy
  has_many :projects, through: :project_plans
end
