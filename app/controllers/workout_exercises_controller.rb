class WorkoutExercisesController < ApplicationController
  
    def create
        newExercise = WorkoutExercise.create!(exercise_params)
        newSessionExercise= newExercise.session_exercises.create!(session_exercises_params)
        render json: newSessionExercise, status: :created
    end

    private

    def exercise_params
        params.permit(:name, :weight, :duration, :reps, :sets, :notes)
      end
    
      def session_exercises_params
        params.permit(:workout_session_id)
      end
end
