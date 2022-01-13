class CreateWorkoutSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :workout_sessions do |t|
      t.string :description
      t.string :gym_area
      t.references :workout_plan, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
