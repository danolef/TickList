class AddNameToWorkoutSession < ActiveRecord::Migration[7.0]
  def change
    add_column :workout_sessions, :name, :string
  end
end
