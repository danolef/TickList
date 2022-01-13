class AddNameToWorkoutPlan < ActiveRecord::Migration[7.0]
  def change
    add_column :workout_plans, :name, :string
  end
end
