class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :total_time
  # has_many :meditation_sessions
end
