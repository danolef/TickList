class WorkoutPlanSerializer < ActiveModel::Serializer
  attributes :id, :Description, :Focus, :name
  has_one :user
end
