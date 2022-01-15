class ProjectsController < ApplicationController
    
    def index
        render json: Project.all
      end

      def show
        project=Project.find(params[:id])
        # list_items= list.list_items
        render json: project
    end

end
