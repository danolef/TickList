class WorkoutSessionsController < ApplicationController
  before_action :set_workout_session, only: %i[ show update destroy ]

  # GET /workout_sessions
  def index
    @workout_sessions = WorkoutSession.all

    render json: @workout_sessions
  end

  # GET /workout_sessions/1
  def show
    render json: @workout_session
  end

  # POST /workout_sessions
  def create
    @workout_session = WorkoutSession.new(workout_session_params)

    if @workout_session.save
      render json: @workout_session, status: :created, location: @workout_session
    else
      render json: @workout_session.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /workout_sessions/1
  def update
    if @workout_session.update(workout_session_params)
      render json: @workout_session
    else
      render json: @workout_session.errors, status: :unprocessable_entity
    end
  end

  # DELETE /workout_sessions/1
  def destroy
    @workout_session.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_workout_session
      @workout_session = WorkoutSession.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def workout_session_params
      params.require(:workout_session).permit(:description, :gym_area, :workout_plan_id, :workout_exercise_id, :climbing_drill_id)
    end
end
