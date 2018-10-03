class QuotesController < ApplicationController

	def index
		@quotes = Quote.all

		respond_to do |f|
			f.json {render json: @quotes}
		end
	end

end
