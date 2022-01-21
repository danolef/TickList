class CreatePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.belongs_to :project, null: false, foreign_key: true
      t.string :public_id
      t.string :photo_url

      t.timestamps
    end
  end
end
