class ProjectListSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :grade, :climb_type
  has_one :user
  
  has_many :projects
  
end
