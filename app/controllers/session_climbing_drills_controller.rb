class SessionClimbingDrillsController < ApplicationController

    def destroy
        climbingDrill= SessionClimbingDrill.find(params[:id])
        climbingDrill.destroy
        head :no_content
    end

end
