json.extract! @user, :groups
json.chores do
  @chores.each do |chore|
    json.set! chore.id do
      json.chore chore
      json.comments chore.comments
    end
  end
end
  # json.chores do
  #   @user.chores.each do |chore|
  #     json.set! chore.id do
  #       json.chore chore
  #       json.comments chore.comments
  #     end
  #   end
  # end
