class ClimbingDrillsController < ApplicationController
  
    def create
        newClimbingDrill = ClimbingDrill.create!(exercise_params)
        newSessionClimbingDrill= newClimbingDrill.session_climbing_drills.create!(session_exercises_params)
        render json: newSessionClimbingDrill, status: :created
    end

    private

    def exercise_params
        params.permit(:name, :climb_type, :grade, :climb_attributes, :duration, :reps, :sets, :notes)
      end
    
      def session_exercises_params
        params.permit(:workout_session_id)
      end

end
