class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :comment
      t.string :anime_id
      t.string :user_id

      t.timestamps
    end
  end
end
