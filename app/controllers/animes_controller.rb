class AnimesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize 
    
    def index 
        animes = Anime.all 
        byebug
        render json: animes 
    end
    def show 
        anime = Anime.find(params[:id])
        render json: anime 
    end

    private 

    def render_not_found_response
        render json: { error: "Plant not found" }, status: :not_found
    end
    def authorize 
        return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
