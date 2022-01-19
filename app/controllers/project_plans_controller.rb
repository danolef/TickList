class ProjectPlansController < ApplicationController
  
    def show
        projectPlan= Project.find(params[:id]).project_plans
        render json: projectPlan
    end

    def create
        project = Project.find(params[:id])
        newProjectPlan = project.project_plans.create!(workout_plan_id: params[:_json])
        render json: newProjectPlan, status: :created
      end

    def destroy
        projectPlan= ProjectPlan.find_by(id: params[:id])
        projectPlan.destroy
        head :no_content
      end

end
