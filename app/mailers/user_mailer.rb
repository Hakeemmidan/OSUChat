class UserMailer < ApplicationMailer
    default from: "hakeemmidan@gmail.com"

    def confirmation_email(userId)
        @user = User.find(userId)
        return if @user.nil?
        
        mail(to: @user.email, subject: 'OSUChat Email Confirmation 🍊')
    end

    def forgot_password_email(user)
        @user = user
        return if @user.nil?
        
        mail(to: @user.email, subject: 'OSUChat Password Reset 🔑')
    end
end