user_chores = Hash.new { |hash, key| hash[key] = [] }

json.extract! @group, :title

json.chores do
  @chores.each do |chore|
    json.set! chore.id, chore
    user_chores[chore.user_id] += [chore.id]
  end
end

json.housemates do
  @group.housemates.each do |housemate|
    json.set! housemate.id do
      json.extract! housemate, :username, :id
      json.chore_ids user_chores[housemate.id]
    end
  end
end
