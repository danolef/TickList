class Climb < ApplicationRecord 
    has_many :projects
    has_many :project_lists, through: :projects

end
