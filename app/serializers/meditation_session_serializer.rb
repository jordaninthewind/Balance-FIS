class MeditationSessionSerializer < ActiveModel::Serializer
  attributes :id, :duration, :created_at
  belongs_to :user
end
