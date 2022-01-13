class SessionExercise < ApplicationRecord
    belongs_to :workout_session
    belongs_to :workout_exercise
end
