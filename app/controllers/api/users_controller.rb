class Api::UsersController < ApplicationController
  # API Endpoints connected to React
  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.confirmation_email(@user.id).deliver_now
      render json: ["Please check your email (#{@user.email})"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    user = User.find(user_params[:id])

    if user.destroy
      render json: {}
    else
      render user.errors.full_messages, status: 422
    end
  end

  def update_username
    user = User.find(params[:id])
    
    if (user.username == params[:username])
      render json: user
      return
    end

    user.username = params[:username]

    if user.save
      user.messages.each { |msg|
        msg.author_username = user.username
        msg.save
      }
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  # API Endpoints with Rails views 
    # (done this way to utilize some of Rails' built in methods)
  def confirm_email
    user = User.find_by_confirm_token(params[:id])
    if user
      user.email_activate
    end
  end

  def new_pass_form
    user = User.find_by_reset_password_token(params[:id])
    
    if user && user.password_token_valid?
      @link_valid = true
    else
      @link_valid = false
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :email, :username)
  end
end