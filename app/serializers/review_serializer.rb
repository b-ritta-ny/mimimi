class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :score, :comment 

  belongs_to :anime 
end
