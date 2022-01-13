class ClimbsController < ApplicationController
  before_action :set_climb, only: %i[ show update destroy ]

  # GET /climbs
  def index
    @climbs = Climb.all

    render json: @climbs
  end

  # GET /climbs/1
  def show
    render json: @climb
  end

  # POST /climbs
  def create
    @climb = Climb.new(climb_params)

    if @climb.save
      render json: @climb, status: :created, location: @climb
    else
      render json: @climb.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /climbs/1
  def update
    if @climb.update(climb_params)
      render json: @climb
    else
      render json: @climb.errors, status: :unprocessable_entity
    end
  end

  # DELETE /climbs/1
  def destroy
    @climb.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_climb
      @climb = Climb.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def climb_params
      params.require(:climb).permit(:name, :location, :grade, :climb_type, :climb_attribute)
    end
end
