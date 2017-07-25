class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :value, null: false
      t.integer :annotation_id
      t.integer :comment_id
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :votes, :user_id
    add_index :votes, :annotation_id
    add_index :votes, :comment_id

  end
end
