class Chore < ActiveRecord::Base
  validates :user, :group, :complete_by, :complete, presence: true
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :group,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: "Group"
end
