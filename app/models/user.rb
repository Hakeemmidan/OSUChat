class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :email, presence: true,
            format: { with: /[a-zA-Z0-9_.+-]+@(oregonstate)\.edu/,
                    message: "must have an @oregonstate.edu domain" },
            uniqueness: true
  validates :password_digest, presence: { message: 'Password can\'t be blank' }
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password
  before_create :confirmation_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def email_activate
    self.email_confirmed = true
    self.confirm_token = nil
    save!(:validate => false)
  end

  private

  def confirmation_token
    if self.confirm_token.blank?
        self.confirm_token = SecureRandom.urlsafe_base64.to_s
    end
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end  
end
