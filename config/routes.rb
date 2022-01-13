Rails.application.routes.draw do
  resources :project_plans
  resources :workout_sessions
  resources :climbing_drills
  resources :workout_exercises
  resources :workout_plans
  resources :resources
  resources :projects
  resources :climbs
  resources :project_lists
  resources :users
  

  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
