class UpdateVoteTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :votes, :annotation_id
    remove_column :votes, :comment_id
    add_column :votes, :votable_id, :integer
    add_column :votes, :votable_type, :string
  end
end
