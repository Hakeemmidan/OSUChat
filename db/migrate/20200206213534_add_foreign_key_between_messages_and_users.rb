class AddForeignKeyBetweenMessagesAndUsers < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :messages, :users, column: :author_id
  end
end
