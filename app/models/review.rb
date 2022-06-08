class Review < ApplicationRecord
    belongs_to :anime
    belongs_to :user 
    
    validates :title, :comment, :score, presence: true
    validates :comment, length: {maximum: 100}
    validates :title, length: {maximum: 15}
    validates :score, numericality: { only_integer: true }    
    validates :score, inclusion: { in: 1..5 }
end
