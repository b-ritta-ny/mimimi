class ChangeReviewUsers < ActiveRecord::Migration[6.1]
  def up
    change_table :reviews do |t|
      t.change :user_id, :integer
    end
  end
  def down 
    change_table :reviews do |t|
      t.change :user_id, :string
    end
  end
end
