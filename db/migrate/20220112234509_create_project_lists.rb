class CreateProjectLists < ActiveRecord::Migration[7.0]
  def change
    create_table :project_lists do |t|
      t.string :name
      t.string :description
      t.string :location
      t.string :grade
      t.string :climb_type
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
