class SessionClimbingDrillSerializer < ActiveModel::Serializer
  attributes :id, :workout_session_id, :climbing_drill
  belongs_to :climbing_drill
end

# :workoutSession, :references, 