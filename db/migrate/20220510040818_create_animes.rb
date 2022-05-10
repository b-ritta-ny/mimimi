class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :name
      t.string :bio
      t.string :image
      t.string :studio
      t.string :episodes

      t.timestamps
    end
  end
end
