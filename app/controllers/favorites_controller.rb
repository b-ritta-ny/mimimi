class FavoritesController < ApplicationController
    wrap_parameters format: []

    def create 
        @current_user.favorites.create(favorite_params)
        byebug
        render json: new_favorite, status: :created
    end
    def index 
        render json: @current_user.favorites
    end

    private 
    
    def favorite_params
        params.permit(:anime_id)
    end
end
