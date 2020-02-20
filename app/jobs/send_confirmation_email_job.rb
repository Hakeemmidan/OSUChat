class SendConfirmationEmailJob < ApplicationJob
  queue_as :default

  def perform(userId)
    return if userId.nil?

    UserMailer.confirmation_email(userId).deliver_now
  end
end
