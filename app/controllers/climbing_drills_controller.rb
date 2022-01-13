class ClimbingDrillsController < ApplicationController
  before_action :set_climbing_drill, only: %i[ show update destroy ]

  # GET /climbing_drills
  def index
    @climbing_drills = ClimbingDrill.all

    render json: @climbing_drills
  end

  # GET /climbing_drills/1
  def show
    render json: @climbing_drill
  end

  # POST /climbing_drills
  def create
    @climbing_drill = ClimbingDrill.new(climbing_drill_params)

    if @climbing_drill.save
      render json: @climbing_drill, status: :created, location: @climbing_drill
    else
      render json: @climbing_drill.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /climbing_drills/1
  def update
    if @climbing_drill.update(climbing_drill_params)
      render json: @climbing_drill
    else
      render json: @climbing_drill.errors, status: :unprocessable_entity
    end
  end

  # DELETE /climbing_drills/1
  def destroy
    @climbing_drill.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_climbing_drill
      @climbing_drill = ClimbingDrill.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def climbing_drill_params
      params.require(:climbing_drill).permit(:name, :climb_type, :grade, :climb_attributes, :duration, :reps, :sets, :notes)
    end
end
