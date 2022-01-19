class ResourcesController < ApplicationController

    def create
        project = Project.find(params[:id])
        newResource = project.resources.create!(resource_params)
        render json: newResource, status: :created
      end

      def destroy
        resource= Resource.find_by(id: params[:id])
        resource.destroy
        head :no_content
      end

private

def resource_params
    params.permit(:site_url)
  end
  
end
