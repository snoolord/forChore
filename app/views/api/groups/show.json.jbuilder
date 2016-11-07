json.extract! @group, :title
json.housemates do
  @group.housemates.each do |housemate|
    json.set! housemate.id, housemate

  end
end
# #
# json.chores do
#   # @group.chores.each do |chore|
#   #   json.set! chore.user_id, housemates
#   # end
# end
