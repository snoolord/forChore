class Comment < ActiveRecord::Base
  validates :user, :chore, :body, presence: true
  belongs_to :user
  belongs_to :chore
end
