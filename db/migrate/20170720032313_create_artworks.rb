class CreateArtworks < ActiveRecord::Migration[5.0]
  def change
    create_table :artworks do |t|
      t.string :title, null: false
      t.text :description
      t.string :artist, null: false
      t.integer :user_id, null: false
      t.string :link, null: false
      t.string :year

      t.timestamps
    end

    add_index :artworks, :user_id

  end
end
