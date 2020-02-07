class AddUsernameToMessages < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :author_username, :string
  end
end
