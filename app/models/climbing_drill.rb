class ClimbingDrill < ApplicationRecord
    has_many :session_climbing_drills
    has_many :workout_sessions, through: :session_climbing_drills

end
