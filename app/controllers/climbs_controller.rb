class ClimbsController < ApplicationController
  
    def create
        newclimb = Climb.create!(climb_params)
        newproject= newclimb.projects.create!(project_params)
        render json: newproject, status: :created
    end

    def update
      project= Project.find_by(id: params[:id])
      project.update!({beta:params[:beta], completed:params[:completed]})
      climb= project.climb
      climb.update!({name:params[:name], location:params[:location], grade:params[:grade], climb_type:params[:climb_type], climb_attribute:params[:climb_attribute]})
      render json: project
    end

private

  def climb_params
    params.permit(:name, :location, :grade, :climb_type, :climb_attribute)
  end

  def project_params
    params.permit(:beta, :completed, :project_list_id)
  end

end
