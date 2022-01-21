class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :beta, :completed
    has_one :climb
    has_one :project_list
    has_many :project_plans
    has_many :resources
    has_many :photos
end
