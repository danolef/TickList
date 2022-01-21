require 'cloudinary'

class PhotosController < ApplicationController

    def create
        project = Project.find_by(id: params[:project_id])
        newphoto= project.photos.create!(photo_params)
        render json: newphoto, status: :created
    end

    def destroy
        public_id= params[:public_id]
        auth = {
            cloud_name: ENV["CLOUD_NAME"],
            api_key: ENV["API_KEY"],
            api_secret: ENV["API_SECRET"]
        }
        Cloudinary::Uploader.destroy(public_id, auth)
        photo= Photo.find_by(public_id: params[:public_id])
        photo.destroy
        render json: {message: "Id destroyed"}, status: :ok
    end

private

    def photo_params
        params.permit(:public_id, :photo_url)
    end

end
