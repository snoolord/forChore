class CreateHousemates < ActiveRecord::Migration
  def change
    create_table :housemates do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false
      t.timestamps null: false
    end
    add_index :housemates, :user_id
    add_index :housemates, :group_id
  end
end
