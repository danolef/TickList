class ProjectPlansController < ApplicationController
  before_action :set_project_plan, only: %i[ show update destroy ]

  # GET /project_plans
  def index
    @project_plans = ProjectPlan.all

    render json: @project_plans
  end

  # GET /project_plans/1
  def show
    render json: @project_plan
  end

  # POST /project_plans
  def create
    @project_plan = ProjectPlan.new(project_plan_params)

    if @project_plan.save
      render json: @project_plan, status: :created, location: @project_plan
    else
      render json: @project_plan.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /project_plans/1
  def update
    if @project_plan.update(project_plan_params)
      render json: @project_plan
    else
      render json: @project_plan.errors, status: :unprocessable_entity
    end
  end

  # DELETE /project_plans/1
  def destroy
    @project_plan.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_plan
      @project_plan = ProjectPlan.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_plan_params
      params.require(:project_plan).permit(:project_id, :workout_plan_id)
    end
end
