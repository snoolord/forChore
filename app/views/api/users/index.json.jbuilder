json.users do
  @users.each do |user|
    json.set! user.id, user.username
  end
end
