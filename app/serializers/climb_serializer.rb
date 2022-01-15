class ClimbSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :grade, :climb_type, :climb_attribute
  
end
