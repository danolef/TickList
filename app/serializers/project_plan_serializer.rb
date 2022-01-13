class ProjectPlanSerializer < ActiveModel::Serializer
  attributes :id
  has_one :project
  has_one :workout_plan
end
