class CreateAnnotations < ActiveRecord::Migration[5.0]
  def change
    create_table :annotations do |t|
      t.integer :user_id, null: false
      t.integer :artwork_id, null: false
      t.text :body, null: false
      t.integer :x_pos, null: false
      t.integer :y_pos, null: false
      t.integer :total_score, null: false

      t.timestamps
    end

    add_index :annotations, :user_id
    add_index :annotations, :artwork_id

  end
end
