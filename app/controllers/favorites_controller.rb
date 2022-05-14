class FavoritesController < ApplicationController
    wrap_parameters format: []
    before_action :authorize 

    def create 
        new_favorite = @current_user.favorites.create(favorite_params)
        byebug
        render json: new_favorite, status: :created
    end
    def index 
        render json: @current_user.animes
    end

    private 
    
    def favorite_params
        params.permit(:anime_id)
    end
    def authorize 
        return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
