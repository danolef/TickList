class CreateClimbs < ActiveRecord::Migration[7.0]
  def change
    create_table :climbs do |t|
      t.string :name
      t.string :location
      t.string :grade
      t.string :climb_type
      t.string :climb_attribute

      t.timestamps
    end
  end
end
