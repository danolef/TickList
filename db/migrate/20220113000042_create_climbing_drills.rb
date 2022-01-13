class CreateClimbingDrills < ActiveRecord::Migration[7.0]
  def change
    create_table :climbing_drills do |t|
      t.string :name
      t.string :climb_type
      t.string :grade
      t.string :climb_attributes
      t.float :duration
      t.integer :reps
      t.integer :sets
      t.string :notes

      t.timestamps
    end
  end
end
