class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :beta, :completed
  has_one :project_list
  has_one :climb
end
