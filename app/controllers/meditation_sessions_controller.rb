class MeditationSessionsController < ApplicationController
	before_action :session_params

	def create
		@user = User.find(params[:user_id])
		byebug
	end

	private

	def session_params
		params.require(:user_id, :time)
	end
end
