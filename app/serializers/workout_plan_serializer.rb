class WorkoutPlanSerializer < ActiveModel::Serializer
  attributes :id, :Description, :Focus
  has_one :user
end
