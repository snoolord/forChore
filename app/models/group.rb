class Group < ActiveRecord::Base
  has_many :groupings,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: "Grouping"

  has_many :housemates,
    through: :groupings,
    source: :user
    
end
