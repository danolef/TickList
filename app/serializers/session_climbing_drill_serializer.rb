class SessionClimbingDrillSerializer < ActiveModel::Serializer
  attributes :id, :workoutSession, :references, :climbingDrill, :references
end
