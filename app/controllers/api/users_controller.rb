class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      SendEmailJob.set(wait: 0.5.seconds).perform_later(@user)
      render json: ["Please check your email"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:password, :email, :username)
  end

end