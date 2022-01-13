class ClimbingDrillSerializer < ActiveModel::Serializer
  attributes :id, :name, :climb_type, :grade, :climb_attributes, :duration, :reps, :sets, :notes
end
