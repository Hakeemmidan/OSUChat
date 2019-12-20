# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
    def sample_email_preview
        UserMailer.sample_email(User.first.id)
    end

    def forgot_password_email_preview
        UserMailer.forgot_password_email(User.first.id)
    end
end