class ClimbingDrillsController < ApplicationController
  
    def create
        newClimbingDrill = ClimbingDrill.create!(exercise_params)
        newSessionClimbingDrill= newClimbingDrill.session_climbing_drills.create!(session_exercises_params)
        render json: newSessionClimbingDrill, status: :created
    end

    def update
      updateClimbingDrill= ClimbingDrill.find_by(id: params[:id])
      updateClimbingDrill.update!({name:params[:name], climb_type:params[:climb_type], grade:params[:grade], climb_attributes:params[:climb_attributes], duration:params[:duration], reps:params[:reps], sets:params[:sets], notes:params[:notes]})
      sessionClimbingDrill= SessionClimbingDrill.find_by(id: params[:session_climbing_drill_id])
      render json: sessionClimbingDrill
    end

    private

    def exercise_params
        params.permit(:name, :climb_type, :grade, :climb_attributes, :duration, :reps, :sets, :notes)
      end
    
      def session_exercises_params
        params.permit(:workout_session_id)
      end

end
