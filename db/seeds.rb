User.create!([
  {username: "Snoopy", session_token: "gLMgSfMHi3KTitlrVjsLQg", password_digest: "$2a$10$IJJJreMrhigBLlIRYM85yOnJLqF9rQXA3l9nfgKQG37ZovGdYe6w2"},
  {username: "Charlie", session_token: "n-eeSrC7rMU3AOFINXNUDA", password_digest: "$2a$10$VHMTPmM43WnwkV64vgjKa.wrRDzXCTSWJnm0CPJRPP5MvRumxb7i."},
  {username: "Woodstock", session_token: "UYv84ZdZiFyHumrzBDaQvQ", password_digest: "$2a$10$CDHloohQFfMPs0nLdX3XGeZcujoj.JhboX92ab63cnbdF5bXGAJGK"},
  {username: "Sally", session_token: "ebZSVXNnNMhaJmDJlsHVzg", password_digest: "$2a$10$1SQWwmOHJP49I6LvN4Jh8OgRguVUnOfzgxRNdUqL0fkpHYQokDJBq"},
  {username: "Patty", session_token: "bfmDdSGDALCvCfrC2eTQrg", password_digest: "$2a$10$66GP5/..v71S366dYnFNPulSJWIm07iZiBHI/o1N5eFTIg21N2vUK"},
  {username: "Schroeder", session_token: "bswqgz6CSJKlk3rHIyNbFA", password_digest: "$2a$10$giW98D2yNgP50J5AYnGNm.cX7qUvYKjJEpfUu6YcoawFKz/.B/xXy"},
  {username: "Marcie", session_token: "sJGMI9jKAtsRu9zt3rEIdw", password_digest: "$2a$10$wz8SaYM6bBy/sigqJRnNQOiYLFprRgoEFLo5XgJLeeKOmTzKhjubK"},
  {username: "Linus", session_token: "ldO939_L5R7xWs0dfsnMXA", password_digest: "$2a$10$MZHedeXu4Wafbgbga6uJ6.UDoqjpR7c89cKmlStYzO9995KoPXkiu"},
  {username: "Pigpen", session_token: "m9HOfoC0q04k1RtrqrietQ", password_digest: "$2a$10$tHDNoceRu8AfBCZIOTQqNOJF8HxAJ0.0utaoOtqX3.VwGSZI.X5UK"},
  {username: "Lucy", session_token: "923-ZhONe1jxZeISFXLZEw", password_digest: "$2a$10$D9Zx7ask5Nblszu2IT6PtuEaXWt2wTNjMGrlNZ8YPW2vkydp0mW8e"},
  {username: "Franklin", session_token: "LLLK9PKHk-2JEeGzyqCVVA", password_digest: "$2a$10$Qv7toVA/K/RFXiE8gOu8N.wSJGu23cPSET3LqygDtN2yP18Kz3x9K"}
])
Group.create!([
  {title: "Snoopy's Doghouse", creator_id: 1},
  {title: "Charlie Brown's House", creator_id: 1},
  {title: "Schoolhouse", creator_id: 1},
  {title: "Baseball Team", creator_id: 1},
]);
Grouping.create!([
  {user_id: 1, group_id: 1 },
  {user_id: 2, group_id: 1},
  {user_id: 3, group_id: 1},
  {user_id: 1, group_id: 2},
  {user_id: 2, group_id: 2},
  {user_id: 3, group_id: 2},
  {user_id: 4, group_id: 2},
  {user_id: 1, group_id: 3},
  {user_id: 2, group_id: 3},
  {user_id: 4, group_id: 3},
  {user_id: 5, group_id: 3},
  {user_id: 6, group_id: 3},
  {user_id: 7, group_id: 3},
  {user_id: 8, group_id: 3},
  {user_id: 9, group_id: 3},
  {user_id: 10, group_id: 3},
  {user_id: 11, group_id: 3},
  {user_id: 1, group_id: 4},
  {user_id: 2, group_id: 4},
  {user_id: 3, group_id: 4},
  {user_id: 4, group_id: 4},
  {user_id: 5, group_id: 4},
  {user_id: 6, group_id: 4},
  {user_id: 11, group_id: 4},
  {user_id: 8, group_id: 4},
  {user_id: 9, group_id: 4},
  {user_id: 10, group_id: 4}
]);
#
# current_date[2] = current_day.to_s
# date1 = current_date.join('-')
#
# current_day = current_date[2].to_i + 3
# current_date[2] = current_day.to_s
# date2 = current_date.join('-')

dates = []

current_date = Time.now.to_s.split(' ')[0].split('-')
i = 1
while i < 10
  current_day = current_date[2].to_i + 1
  current_day = 0 unless current_day < 29
  current_date[2] = current_day.to_s
  dates << current_date.join('-')
  i += 1
end

Chore.create!([
  {user_id: 2, group_id: 1, task: "buy bird bath cleaner", complete_by: dates[8], complete: false, dismissed: false, reminders: 0},
  {user_id: 2, group_id: 1, task: "feed Snoopy", complete_by: dates[0], complete: false, dismissed: false, reminders: 0},
  {user_id: 1, group_id: 1, task: "buy typewriter ink", complete_by: dates[3], complete: false, dismissed: false, reminders: 0},
  {user_id: 1, group_id: 1, task: "tidy up his room", complete_by: dates[1], complete: false, dismissed: false, reminders: 0},
  {user_id: 2, group_id: 1, task: "take Snoopy on a walk", complete_by: dates[3], complete: false, dismissed: false, reminders: 0},
  {user_id: 1, group_id: 1, task: "clean his dog bowl", complete_by: dates[8], complete: true, dismissed: false, reminders: 0},
  {user_id: 3, group_id: 2, task: "clean his mess on the roof", complete_by: dates[0], complete: false, dismissed: false, reminders: 0},
  {user_id: 3, group_id: 2, task: "clean his tracks inside the house", complete_by: dates[3], complete: false, dismissed: false, reminders: 0},
  {user_id: 2, group_id: 2, task: "take out the trash", complete_by: dates[7], complete: false, dismissed: false, reminders: 0},
  {user_id: 4, group_id: 2, task: "wash the dishes", complete_by: dates[8], complete: false, dismissed: false, reminders: 0},
  {user_id: 4, group_id: 2, task: "wash the windows", complete_by: dates[5], complete: true, dismissed: false, reminders: 0},
  {user_id: 2, group_id: 2, task: "tidy up his room", complete_by: dates[2], complete: true, dismissed: false, reminders: 0},
  {user_id: 2, group_id: 2, task: "get the mailman to drop off the packages inside", complete_by: dates[5], complete: false, dismissed: false, reminders: 0},
  {user_id: 2, group_id: 2, task: "take his laundry out of the washer", complete_by: dates[3], complete: false, dismissed: false, reminders: 0},
  {user_id: 1, group_id: 2, task: "clean the pitcher's mound", complete_by: dates[6], complete: false, dismissed: false, reminders: 0},
  {user_id: 7, group_id: 3, task: "give Joe Cool a tour around school", complete_by: dates[4], complete: false, dismissed: false, reminders: 0},
  {user_id: 5, group_id: 3, task: "clean up the auditorium", complete_by: dates[2], complete: false, dismissed: false, reminders: 0},
  {user_id: 4, group_id: 4, task: "bring baseball bats", complete_by: dates[2], complete: false, dismissed: false, reminders: 0},
  {user_id: 8, group_id: 4, task: "clean bleachers", complete_by: dates[2], complete: false, dismissed: false, reminders: 0},
  {user_id: 3, group_id: 4, task: "bring balls", complete_by: dates[2], complete: false, dismissed: false, reminders: 0},
  {user_id: 2, group_id: 4, task: "set up popcorn machine", complete_by: dates[2], complete: false, dismissed: false, reminders: 0},
  {user_id: 1, group_id: 4, task: "bring camera", complete_by: dates[2], complete: false, dismissed: false, reminders: 0},
  {user_id: 2, group_id: 4, task: "call ref", complete_by: dates[2], complete: false, dismissed: false, reminders: 0},
  {user_id: 4, group_id: 4, task: "bring baseball bats", complete_by: dates[8], complete: false, dismissed: false, reminders: 0},
  {user_id: 8, group_id: 4, task: "clean bleachers", complete_by: dates[8], complete: false, dismissed: false, reminders: 0},
  {user_id: 3, group_id: 4, task: "bring balls", complete_by: dates[8], complete: false, dismissed: false, reminders: 0},
  {user_id: 2, group_id: 4, task: "set up popcorn machine", complete_by: dates[8], complete: false, dismissed: false, reminders: 0},
  {user_id: 1, group_id: 4, task: "bring camera", complete_by: dates[8], complete: false, dismissed: false, reminders: 0},
  {user_id: 2, group_id: 4, task: "call ref", complete_by: dates[8], complete: false, dismissed: false, reminders: 0}
])
Comment.create!([
  {user_id: 1, chore_id: 2, body: "I'm so hungry!!"},
  {user_id: 2, chore_id: 2, body: "I'll feed you after school, Snoopy!"},

  {user_id: 3, chore_id: 1, body: "My bath is so dirty!"},
  {user_id: 2, chore_id: 1, body: "I'll go to the hardware store soon!"},

  {user_id: 1, chore_id: 3, body: "What brand do you guys think is best?"},
  {user_id: 2, chore_id: 3, body: "I think Epson has the nicest ink"},
  {user_id: 3, chore_id: 3, body: "I agree!"},

  {user_id: 2, chore_id: 4, body: "Snoopy! Your doghouse is too messy"},
  {user_id: 1, chore_id: 4, body: "I'll clean it after I take down the Red Baron!"},

  {user_id: 1, chore_id: 5, body: "I'm getting restless, Charlie Brown!!"},
  {user_id: 2, chore_id: 5, body: "Ok, Ok, Snoopy. Let's go for a walk."},

  {user_id: 2, chore_id: 6, body: "Thanks, Snoopy!"},
  {user_id: 3, chore_id: 6, body: "Thanks, Snoopy!"},

  {user_id: 2, chore_id: 7, body: "Woodstock! Your friends made a huge mess"},
  {user_id: 3, chore_id: 7, body: "I'm on it!"},

  {user_id: 4, chore_id: 8, body: "Woodstock, your footprints are all over the rug"},
  {user_id: 3, chore_id: 8, body: "I'll call the rug cleaners"},

  {user_id: 4, chore_id: 9, body: "Big Brother, please take out the trash"},
  {user_id: 2, chore_id: 9, body: "On it, Sally!"},

  {user_id: 2, chore_id: 10, body: "Sally, the dishes are dirty!"},
  {user_id: 4, chore_id: 10, body: "I'm on it, Big Brother"},

  {user_id: 2, chore_id: 11, body: "The windows have mud on them"},
  {user_id: 4, chore_id: 11, body: "I'm on it, Big Brother"},

  {user_id: 1, chore_id: 12, body: "I can't sleep here. Your room is too messy, Charlie Brown!!"},
  {user_id: 2, chore_id: 12, body: "Oh, sorry, Snoopy!"},

  {user_id: 3, chore_id: 13, body: "My package is coming today, watch out for it!"},
  {user_id: 2, chore_id: 13, body: "I got it, Woodstock!"},

  {user_id: 3, chore_id: 14, body: "I need to do laundry!"},
  {user_id: 2, chore_id: 14, body: "I'll take it out after school"},

  {user_id: 2, chore_id: 15, body: "It needs to be ready by game day"},
  {user_id: 1, chore_id: 15, body: "I'm on it"},

  {user_id: 1, chore_id: 16, body: "Looking forward to the tour"},
  {user_id: 7, chore_id: 16, body: "Me too!"},

  {user_id: 2, chore_id: 17, body: "Thanks, Sally!"},
  {user_id: 4, chore_id: 18, body: "Thanks, Linus!"},
  {user_id: 1, chore_id: 19, body: "Thanks, Woodstock!"},
  {user_id: 4, chore_id: 20, body: "Thanks, Big Brother!"},
  {user_id: 3, chore_id: 21, body: "Thanks, Snoopy!"},
  {user_id: 8, chore_id: 22, body: "Thanks, Good Ol' Charlie Brown!"},

])
