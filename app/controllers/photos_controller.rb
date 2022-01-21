class PhotosController < ApplicationController

    def create
        project = Project.find_by(id: params[:project_id])
        newphoto= project.photos.create!(photo_params)
        render json: newphoto, status: :created
    end

private

    def photo_params
        params.permit(:public_id, :photo_url)
    end

end
