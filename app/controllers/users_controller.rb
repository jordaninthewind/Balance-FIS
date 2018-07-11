require 'pry'

class UsersController < ApplicationController
	def create
		@user = User.new(:name => params[:new_user][:name], :location => params[:new_user][:location], :total_time => 0)

		if @user.save
			redirect_to @user
		end	
	end

	def index
		@users = User.all

		respond_to do |f|
			f.json { render json: @users}
		end
	end

	def show
		@user = User.find(params[:id])

		respond_to do |f|
			f.json { render json: @user }
		end
	end

	def destroy
		@user = User.find(params[:id])
		@user.meditation_sessions.destroy_all
		@user.destroy

		respond_to do |f|
			f.json { render json: '200' }
		end
	end
end
