class ExampleMailer < ApplicationMailer
    default from: "hakeemmidan@gmail.com"

    def sample_email(userId)
        @user = User.find(userId)
        return if @user.nil?
        
        mail(to: @user.email, subject: 'Sample Email')
    end

    def forgot_password_email(user)
        @user = user
        return if @user.nil?
        
        mail(to: @user.email, subject: 'OSUSCN Password Reset 🔑')
    end
end