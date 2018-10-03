require 'pry'

class UsersController < ApplicationController
	def create
		# @user = User.new(:name => params[:new_user][:name], :location => params[:new_user][:location], :total_time => 0)
		@user = User.new(user_params)

		if @user.save
			redirect_to @user
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

	def login
		@user = User.find_by(:email => params[:login_user][:email])

		if !@user 
			render json: {verified: false}
		elsif !@user.authenticate(params[:login_user][:password])
			render json: {verified: false}
		else
			render json: @user
		end
	end

	private

	def user_params
		require(:new_user).permit(:name, :last_name, :password, :location, :email)
	end

	def login_params
		require(:login_user).permit(:email, :password)
	end
end
