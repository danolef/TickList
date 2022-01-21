# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_21_165136) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "climbing_drills", force: :cascade do |t|
    t.string "name"
    t.string "climb_type"
    t.string "grade"
    t.string "climb_attributes"
    t.float "duration"
    t.integer "reps"
    t.integer "sets"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "climbs", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "grade"
    t.string "climb_type"
    t.string "climb_attribute"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "photos", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.string "public_id"
    t.string "photo_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_photos_on_project_id"
  end

  create_table "project_lists", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "location"
    t.string "grade"
    t.string "climb_type"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_project_lists_on_user_id"
  end

  create_table "project_plans", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.bigint "workout_plan_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_project_plans_on_project_id"
    t.index ["workout_plan_id"], name: "index_project_plans_on_workout_plan_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "beta"
    t.boolean "completed", default: false
    t.bigint "project_list_id", null: false
    t.bigint "climb_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["climb_id"], name: "index_projects_on_climb_id"
    t.index ["project_list_id"], name: "index_projects_on_project_list_id"
  end

  create_table "resources", force: :cascade do |t|
    t.string "site_url"
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_resources_on_project_id"
  end

  create_table "session_climbing_drills", force: :cascade do |t|
    t.bigint "workout_session_id", null: false
    t.bigint "climbing_drill_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["climbing_drill_id"], name: "index_session_climbing_drills_on_climbing_drill_id"
    t.index ["workout_session_id"], name: "index_session_climbing_drills_on_workout_session_id"
  end

  create_table "session_exercises", force: :cascade do |t|
    t.bigint "workout_session_id", null: false
    t.bigint "workout_exercise_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["workout_exercise_id"], name: "index_session_exercises_on_workout_exercise_id"
    t.index ["workout_session_id"], name: "index_session_exercises_on_workout_session_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "workout_exercises", force: :cascade do |t|
    t.string "name"
    t.integer "weight"
    t.float "duration"
    t.integer "reps"
    t.integer "sets"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "workout_plans", force: :cascade do |t|
    t.string "Description"
    t.string "Focus"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.index ["user_id"], name: "index_workout_plans_on_user_id"
  end

  create_table "workout_sessions", force: :cascade do |t|
    t.string "description"
    t.string "gym_area"
    t.bigint "workout_plan_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.index ["workout_plan_id"], name: "index_workout_sessions_on_workout_plan_id"
  end

  add_foreign_key "photos", "projects"
  add_foreign_key "project_lists", "users"
  add_foreign_key "project_plans", "projects"
  add_foreign_key "project_plans", "workout_plans"
  add_foreign_key "projects", "climbs"
  add_foreign_key "projects", "project_lists"
  add_foreign_key "resources", "projects"
  add_foreign_key "session_climbing_drills", "climbing_drills"
  add_foreign_key "session_climbing_drills", "workout_sessions"
  add_foreign_key "session_exercises", "workout_exercises"
  add_foreign_key "session_exercises", "workout_sessions"
  add_foreign_key "workout_plans", "users"
  add_foreign_key "workout_sessions", "workout_plans"
end
