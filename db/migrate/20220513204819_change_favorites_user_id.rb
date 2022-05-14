class ChangeFavoritesUserId < ActiveRecord::Migration[6.1]
  def change
    change_column :favorites, :user_id, :integer, using: 'user_id::integer'
  end
end
