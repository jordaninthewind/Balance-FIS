require 'pry'

class MeditationSessionsController < ApplicationController

	def create
		@user = User.find(session_params[:user_id])
		@meditation_session = MeditationSession.new(:duration => session_params[:time])
		@meditation_session.user = @user

		if @meditation_session.save
			@user.update(:total_time => (@meditation_session.duration + @user.total_time))
		end
	end

	private

	def session_params
		params.require(:meditation_session).permit(:user_id, :time)
	end
end
