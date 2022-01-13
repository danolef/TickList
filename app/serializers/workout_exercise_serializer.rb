class WorkoutExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :duration, :reps, :sets, :notes
end
