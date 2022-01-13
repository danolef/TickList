class CreateWorkoutExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :workout_exercises do |t|
      t.string :name
      t.integer :weight
      t.float :duration
      t.integer :reps
      t.integer :sets
      t.string :notes

      t.timestamps
    end
  end
end
