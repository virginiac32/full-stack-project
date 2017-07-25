json.extract! user, :id, :username

json.votes do
  user.votes.each do |vote|
    json.set! vote.votable_type do
      json.set! vote.votable_id do
        json.extract! vote, :id, :votable_id, :votable_type, :user_id, :value
      end
    end
  end
end
