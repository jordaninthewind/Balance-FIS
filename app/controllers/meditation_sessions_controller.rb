require 'pry'

class MeditationSessionsController < ApplicationController

	def create
		@user = User.find(params[:user_id])
		@meditation_session = MeditationSession.new(:duration => session_params[:time])
		@meditation_session.user = @user

		if @meditation_session.save
			@user.update(:total_time => (@meditation_session.duration + @user.total_time))
		end
	end

	def index
		@user = User.find(params[:user_id])
		@meditation_sessions = @user.meditation_sessions

		respond_to do |f|
			f.json { render json: @meditation_sessions }
		end
	end

	def destroy
		@meditation_session = MeditationSession.find(params[:id])

		if @meditation_session.user_id.to_s == params[:user_id]
			@meditation_session.destroy
		end
	end

	private

	def session_params
		params.require(:meditation_session).permit(:time)
	end
end
