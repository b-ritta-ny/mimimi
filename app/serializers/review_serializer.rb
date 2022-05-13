class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :score, :comment, :author

  belongs_to :user 
  
  def author 
    self.object.user.username
  end
end
