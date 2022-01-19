class ProjectPlansController < ApplicationController
  
    def show
        projectPlan= Project.find(params[:id]).project_plans
        render json: projectPlan
    end

end
