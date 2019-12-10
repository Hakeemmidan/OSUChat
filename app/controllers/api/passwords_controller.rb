class Api::PasswordsController < ApplicationController
  def forgot
    if params[:email].blank?
      return render json: ['Email not present'], status: :not_found
    end

    user = User.find_by(email: params[:email])

    if user.present?
      user.generate_password_token!
      ExampleMailer.forgot_password_email(user).deliver_now
      render json: ['Please check your email'], status: :ok
    else
      render json: ['Email address not found. Please try again.'], status: :not_found
    end
  end

  def reset
    token = params[:token].to_s

    if params[:token].blank?
      return render html: 
          "<h1 class='u-horizontally-center-text'>
            Something unexpected happened. Please try resetting your password again.
            <br/>
            If that doesn't work. Please contact me at hakeemmidan@gmail.com and we'll see what is going on.
          </h1>"
    end

    user = User.find_by(reset_password_token: token)

    if user.present? && user.password_token_valid?
      if user.reset_password!(params[:password])
        render json: {status: 'ok'}, status: :ok
      else
        render json: {error: user.errors.full_messages}, status: :unprocessable_entity
      end
    else
      render json: {error:  ['Link not valid or expired. Try generating a new link.']}, status: :not_found
    end
  end

  private

  def password_params
    params.permit(:token, :password)
  end
end