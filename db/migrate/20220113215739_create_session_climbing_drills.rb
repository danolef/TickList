class CreateSessionClimbingDrills < ActiveRecord::Migration[7.0]
  def change
    create_table :session_climbing_drills do |t|
      t.references :workout_session, null: false, foreign_key: true
      t.references :climbing_drill, null: false, foreign_key: true

      t.timestamps
    end
  end
end
