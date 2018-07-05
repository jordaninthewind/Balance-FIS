class User < ApplicationRecord
	has_many :quotes
	has_many :meditation_sessions

end
