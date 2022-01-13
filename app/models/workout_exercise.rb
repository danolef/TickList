class WorkoutExercise < ApplicationRecord
    has_many :session_exercises
    has_many :workout_sessions, through: :session_exercises

end
