json.extract! user, :id, :username, :votes

# json.votes do
#   user.votes.each do |vote|
#     json.set! vote.votable_type do
#       json.set! vote.votable_id do
#         json.extract! vote, :id, :votable_id, :votable_type, :value
#       end
#     end
#   end
# end
