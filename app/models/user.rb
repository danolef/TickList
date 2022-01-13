class User < ApplicationRecord
    has_secure_password
    
    has_many :project_lists
    has_many :workout_plans
end
