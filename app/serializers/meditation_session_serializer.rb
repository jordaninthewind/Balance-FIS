require 'pry'

class MeditationSessionSerializer < ActiveModel::Serializer
  attributes :id, :duration, :date

  def date
  	object.created_at.strftime("%b %e, %Y %R EST")
  end

end
