class ClimbsController < ApplicationController
  
    def create
        # projectList= ProjectList.find(params(:id))
        newproject = Climb.create!(climb_params).projects.create!(project_params)
        render json: newproject, status: :created
      end

private

  def climb_params
    params.permit(:name, :location, :grade, :climb_type, :climb_attribute)
  end

  def project_params
    params.permit(:beta, :completed, :climb_id, :project_list_id)
  end

end
