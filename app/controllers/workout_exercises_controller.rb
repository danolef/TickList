class WorkoutExercisesController < ApplicationController
  
    def create
        newExercise = WorkoutExercise.create!(exercise_params)
        newSessionExercise= newExercise.session_exercises.create!(session_exercises_params)
        render json: newSessionExercise, status: :created
    end

    def update
      exercise= WorkoutExercise.find_by(id: params[:id])
      exercise.update!({name:params[:name], weight:params[:weight], duration:params[:duration], reps:params[:reps], sets:params[:sets], notes:params[:notes]})
      sessionExercise= SessionExercise.find_by(id: params[:session_exercise_id]) 
      render json: sessionExercise
    end

    private

    def exercise_params
        params.permit(:name, :weight, :duration, :reps, :sets, :notes)
      end
    
      def session_exercises_params
        params.permit(:workout_session_id)
      end
end
