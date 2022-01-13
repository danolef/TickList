class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :site_url, :project, :references
end
