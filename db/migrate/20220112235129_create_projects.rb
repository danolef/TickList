class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :beta
      t.boolean :completed, default: false
      t.references :project_list, null: false, foreign_key: true
      t.references :climb, null: false, foreign_key: true

      t.timestamps
    end
  end
end
