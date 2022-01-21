class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :public_id, :photo_url
  has_one :project
end
