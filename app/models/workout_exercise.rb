class WorkoutExercise < ApplicationRecord
    has_many :workout_sessions
    has_many :workout_plans, through: :workout_sessions

end
