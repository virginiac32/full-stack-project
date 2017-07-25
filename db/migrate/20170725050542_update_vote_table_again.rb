class UpdateVoteTableAgain < ActiveRecord::Migration[5.0]
  def change
    change_column_null :votes, :votable_id, false
    change_column_null :votes, :votable_type, false
  end
end
