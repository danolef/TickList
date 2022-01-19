class SessionExerciseSerializer < ActiveModel::Serializer
  attributes :id, :workout_exercise, :workout_session_id
  belongs_to :workout_exercises
end
