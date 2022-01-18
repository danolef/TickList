class ResourcesController < ApplicationController

    def create
        project = Project.find(params[:id])
        newResource = project.resources.create!(resource_params)
        render json: newResource, status: :created
      end

private

def resource_params
    params.permit(:site_url)
  end
  
end
