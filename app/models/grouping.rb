class Grouping < ActiveRecord::Base
  after_destroy :notify_group

  belongs_to :group,
    primary_key: :id,
    foreign_key: :group_id,
    class_name: "Group"

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  def notify_group
    group.destroy_if_empty_housemates
  end
end
