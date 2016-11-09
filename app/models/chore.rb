class Chore < ActiveRecord::Base
  validates :user_id, :group_id, :complete_by, :reminders, :task, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :group,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: "Group"

  has_many :comments  

end
