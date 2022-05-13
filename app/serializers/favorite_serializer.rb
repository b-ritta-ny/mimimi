class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :anime_id, :user_id

  belongs_to :anime 
  
end
