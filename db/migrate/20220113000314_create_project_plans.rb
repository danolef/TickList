class CreateProjectPlans < ActiveRecord::Migration[7.0]
  def change
    create_table :project_plans do |t|
      t.references :project, null: false, foreign_key: true
      t.references :workout_plan, null: false, foreign_key: true

      t.timestamps
    end
  end
end
