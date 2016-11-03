class CreateHousemates < ActiveRecord::Migration
  def change
    create_table :housemates do |t|

      t.timestamps null: false
    end
  end
end
