class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
        SendEmailJob.set(wait: 0.5.seconds).perform_later(@user.id)
        render json: ["Please check your email (#{@user.email})"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def confirm_email
    user = User.find_by_confirm_token(params[:id])
    if user
      user.email_activate
      flash[:success] = "Welcome to the Sample App! Your email has been confirmed.
      Please sign in to continue."
    else
      flash[:error] = "Sorry. User does not exist"
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :email, :username)
  end

end