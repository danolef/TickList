class SessionExerciseSerializer < ActiveModel::Serializer
  attributes :id, :workout_exercise, :references
end
