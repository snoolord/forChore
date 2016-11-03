class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false
      t.timestamps null: false
    end
    add_index :groups, :creator_id
  end
end
