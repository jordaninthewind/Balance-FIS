require 'pry'

class MeditationSessionsController < ApplicationController

	def create
		binding.pr
		@user = User.find(session_params[:user_id])
		@meditation_session = MeditationSession.new(:duration => session_params[:time])
		@meditation_session.user = @user

		if @meditation_session.save
			@user.update(:total_time => (@meditation_session.duration + @user.total_time))
		end

		# on this return, add returned value to current state
	end

	def index
		@user = User.find(params[:user_id])
		@meditation_sessions = @user.meditation_sessions

		respond_to do |f|
			f.json { render json: @meditation_sessions }
		end
	end

	private

	def session_params
		params.require(:meditation_session).permit(:user_id, :time)
	end
end
