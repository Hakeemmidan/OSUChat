class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      SendEmailJob.set(wait: 20.seconds).perform_later(@user)
      render :show
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