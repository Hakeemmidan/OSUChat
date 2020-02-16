class AddEmailConfirmedToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :email_confirmed, :bool, default: false
  end
end
