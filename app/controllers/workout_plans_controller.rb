class WorkoutPlansController < ApplicationController
  before_action :set_workout_plan, only: %i[ show update destroy ]

  # GET /workout_plans
  def index
    @workout_plans = WorkoutPlan.all

    render json: @workout_plans
  end

  # GET /workout_plans/1
  def show
    render json: @workout_plan
  end

  # POST /workout_plans
  def create
    @workout_plan = WorkoutPlan.new(workout_plan_params)

    if @workout_plan.save
      render json: @workout_plan, status: :created, location: @workout_plan
    else
      render json: @workout_plan.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /workout_plans/1
  def update
    if @workout_plan.update(workout_plan_params)
      render json: @workout_plan
    else
      render json: @workout_plan.errors, status: :unprocessable_entity
    end
  end

  # DELETE /workout_plans/1
  def destroy
    @workout_plan.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_workout_plan
      @workout_plan = WorkoutPlan.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def workout_plan_params
      params.require(:workout_plan).permit(:Description, :Focus, :user_id)
    end
end
