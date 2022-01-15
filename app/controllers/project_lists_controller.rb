class ProjectListsController < ApplicationController
  

  def index
    render json: @current_user.project_lists, include: ['climbs', 'projects.climb']
  end

  def show
    projects=ProjectList.find(params[:id]).projects
    render json: projects
  end

  def create
    project_list = @current_user.project_lists.create!(project_list_params)
    render json: project_list, status: :created
  end

  

  private
    
    def project_list_params
      params.permit(:name, :description, :location, :grade, :climb_type)
    end
end
