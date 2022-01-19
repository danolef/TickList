class ProjectPlansController < ApplicationController
  
    def show
        projectPlan= Project.find(params[:id]).project_plans
        render json: projectPlan
    end

    def destroy
        projectPlan= ProjectPlan.find_by(id: params[:id])
        projectPlan.destroy
        head :no_content
      end

end
