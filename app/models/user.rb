class User < ApplicationRecord
    has_secure_password

    has_many :reviews 
    has_many :favorites
    has_many :animes, through: :favorites
    
    validates :username, uniqueness: true
    validates :username, presence: true 
    validates :username, length:{minimum: 8}
end
