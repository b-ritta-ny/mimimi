class User < ApplicationRecord
    has_secure_password

    has_many :reviews 
    
    validates :username, uniqueness: true
    validates :username, presence: true 
    validates :username, length:{minimum: 8}
end
