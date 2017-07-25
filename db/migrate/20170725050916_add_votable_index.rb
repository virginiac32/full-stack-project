class AddVotableIndex < ActiveRecord::Migration[5.0]
  def change
    add_index :votes, [:votable_type, :votable_id]
  end
end
