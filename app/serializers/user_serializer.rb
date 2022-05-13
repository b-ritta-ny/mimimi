class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :reviews
  has_many :favorites
  has_many :animes, through: :favorites

end
