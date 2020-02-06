class AddUserIdToMessages < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :author_id, :integer
  end
end
