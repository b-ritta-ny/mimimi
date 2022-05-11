class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :name, :studio, :creator, :bio, :episodes, :image 

  has_many :reviews
end
