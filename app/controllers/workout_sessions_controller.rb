class WorkoutSessionsController < ApplicationController
  
    def index
        render json: WorkoutSession.all
    end

    def show
        session=WorkoutSession.find(params[:id])
        # list_items= list.list_items
        render json: session
    end

    def create
        workoutPlan= WorkoutPlan.find_by(id: params[:workout_plan_id])
        newSession = workoutPlan.workout_sessions.create!(workout_session_params)
        render json: newSession, status: :created
      end


      private
        
      def workout_session_params
        params.permit(:name, :description, :gym_area)
      end
end
