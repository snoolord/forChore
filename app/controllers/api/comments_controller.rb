class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end
  def show
    @comment = Comment.find(params[:id])
  end
  private
  def comment_params
    params.require(:comment).permit(:user_id, :body, :chore_id)
  end

end
