class WorkoutExercisesController < ApplicationController
  before_action :set_workout_exercise, only: %i[ show update destroy ]

  # GET /workout_exercises
  def index
    @workout_exercises = WorkoutExercise.all

    render json: @workout_exercises
  end

  # GET /workout_exercises/1
  def show
    render json: @workout_exercise
  end

  # POST /workout_exercises
  def create
    @workout_exercise = WorkoutExercise.new(workout_exercise_params)

    if @workout_exercise.save
      render json: @workout_exercise, status: :created, location: @workout_exercise
    else
      render json: @workout_exercise.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /workout_exercises/1
  def update
    if @workout_exercise.update(workout_exercise_params)
      render json: @workout_exercise
    else
      render json: @workout_exercise.errors, status: :unprocessable_entity
    end
  end

  # DELETE /workout_exercises/1
  def destroy
    @workout_exercise.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_workout_exercise
      @workout_exercise = WorkoutExercise.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def workout_exercise_params
      params.require(:workout_exercise).permit(:name, :weight, :duration, :reps, :sets, :notes)
    end
end
