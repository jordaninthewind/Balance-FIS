class QuotesController < ApplicationController

	def index
		@quotes = Quote.all

		respond_to do |format|
			format.json {render json: @quotes}
		end
	end

end
