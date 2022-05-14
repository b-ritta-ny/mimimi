class ChangeReviewsAnimeColumn < ActiveRecord::Migration[6.1]
  def change
    change_column :reviews, :anime_id, :integer, using: 'anime_id::integer'
  end
end
