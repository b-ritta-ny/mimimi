class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :name, :studio, :creator, :bio, :episodes, :image 

  has_many :reviews
  #has_many :favorites
  #has_many :users, through: :reviews

end
