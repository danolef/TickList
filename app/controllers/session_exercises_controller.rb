class SessionExercisesController < ApplicationController

    def destroy
        exercise= SessionExercise.find(params[:id])
        exercise.destroy
        head :no_content
    end

end
