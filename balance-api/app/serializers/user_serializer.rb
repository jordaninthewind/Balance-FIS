class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :last_name, :email, :location, :total_time
  # has_many :meditation_sessions
end
