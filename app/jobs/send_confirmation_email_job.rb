class SendConfirmationEmailJob < ApplicationJob
  queue_as :default

  # deprecated due to current difficulty of integration with Heroku
  def perform(userId)
    return if userId.nil?

    UserMailer.confirmation_email(userId).deliver_later
  end
end
