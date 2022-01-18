class SessionClimbingDrillSerializer < ActiveModel::Serializer
  attributes :id, :climbingDrill, :references
end

# :workoutSession, :references, 