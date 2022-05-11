class AddCreatorToAnime < ActiveRecord::Migration[6.1]
  def change
    add_column :animes, :creator, :string
  end
end
