json.extract! @group, :title
json.housemates do
  @group.housemates.each do |housemate|
    json.set! housemate.id, housemate

  end
end

json.housemateChores @housemateChores
json.chores @chores
