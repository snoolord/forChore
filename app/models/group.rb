class Group < ActiveRecord::Base
  validates :title, :creator_id, presence: true
  has_many :groupings,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: "Grouping"

  has_many :chores,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: "Chore"

  has_many :housemates,
    through: :groupings,
    source: :user

  has_many :comments,
    through: :chores,
    source: :comments

  def destroy_if_empty_housemates
    if housemates.count == 0
      self.destroy
    end
  end
end
