class WorkoutSessionSerializer < ActiveModel::Serializer
  attributes :id, :description, :gym_area
  has_one :workout_plan
  has_one :workout_exercise
  has_one :climbing_drill
end
