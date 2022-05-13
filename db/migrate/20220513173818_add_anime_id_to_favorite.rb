class AddAnimeIdToFavorite < ActiveRecord::Migration[6.1]
  def change
    add_column :favorites, :anime_id, :integer
  end
end
