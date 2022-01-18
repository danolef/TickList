class WorkoutSessionsController < ApplicationController
  
    def index
        render json: WorkoutSessions.all
    end

end
