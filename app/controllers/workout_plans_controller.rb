class WorkoutPlansController < ApplicationController
  
    def index
        render json: @current_user.workout_plans
    end

    def show
        workoutSessions=WorkoutPlans.find(params[:id]).workout_sessions
        render json: workoutSessions
      end
    
      def create
        workoutPlan = @current_user.workout_plans.create!(workout_plans_params)
        render json: workoutPlan, status: :created
      end
    
      def update
        workoutPlan= WorkoutPlan.find_by(id: params[:id])
        workoutPlan.update!({name:params[:name], Description:params[:Description], Focus:params[:focus]})
        render json: workoutPlan
      end
    
      def destroy
        workoutPlan= WorkoutPlan.find_by(id: params[:id])
        workoutPlan.destroy
        head :no_content
      end
    
      private
        
        def workout_plans_params
          params.permit(:name, :Description, :Focus)
        end
end
