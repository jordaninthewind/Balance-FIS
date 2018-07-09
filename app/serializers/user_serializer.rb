class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  has_many :meditation_sessions
end
