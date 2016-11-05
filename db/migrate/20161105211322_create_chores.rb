class CreateChores < ActiveRecord::Migration
  def change
    create_table :chores do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false
      t.date :complete_by, null: false
      t.boolean :complete, null: false
      t.integer :reminders
      t.date :completed_on
      t.timestamps null: false
    end
    add_index :chores, :user_id
    add_index :chores, :group_id
  end
end
