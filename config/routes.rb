Rails.application.routes.draw do
  # namespace :api do 
    post "/login", to: "sessions#create"
    get "/auth", to: "users#show"
    delete "/logout", to: "sessions#destroy"
  
    resources :animes, only: [:index, :show, :create]
    resources :reviews 
    resources :users, only: [:show, :create]
    resources :favorites, only: [:index, :create]
  # end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # post "/login", to: "sessions#create"
  # get "/auth", to: "users#show"
  # delete "/logout", to: "sessions#destroy"
  
  # resources :animes, only: [:index, :show, :create]
  # resources :reviews 
  # resources :users, only: [:show, :create]
  # resources :favorites, only: [:index, :create]
  
end
