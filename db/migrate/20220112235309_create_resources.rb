class CreateResources < ActiveRecord::Migration[7.0]
  def change
    create_table :resources do |t|
      t.string :site_url
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
