require 'pry'

class UsersController < ApplicationController

	def create
		@user = User.new(:name => params[:new_user][:name], :location => params[:new_user][:location])

		if @user.save
			respond_to do |f|
				f.json { render json: @user }
			end
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

end
