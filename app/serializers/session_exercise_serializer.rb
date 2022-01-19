class SessionExerciseSerializer < ActiveModel::Serializer
  attributes :id, :workout_exercise, :workout_session_id
  has_one :workout_exercise
end
