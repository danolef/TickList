class WorkoutSessionSerializer < ActiveModel::Serializer
  attributes :id, :description, :gym_area, :name
  has_one :workout_plan
  has_many :workout_exercises
  has_many :climbing_drills
end
