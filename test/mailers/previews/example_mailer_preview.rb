# Preview all emails at http://localhost:3000/rails/mailers/example_mailer
class ExampleMailerPreview < ActionMailer::Preview
    def sample_email_preview
        ExampleMailer.sample_email(User.first.id)
    end

    def forgot_password_email_preview
        ExampleMailer.forgot_password_email(User.first.id)
    end
end