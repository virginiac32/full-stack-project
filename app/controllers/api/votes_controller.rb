class Api::VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      if @vote.annotation_id !== null
        @annotation = Annotation.find_by(id: @vote.annotation_id)
        @annotation.total_score += @vote.value
        @annotation.save!
        render :show
      elsif @vote.comment_id !== null
        @comment = Comment.find_by(id: @vote.annotation_id)
        @comment.total_score += @vote.value
        @comment.save!
        render :show
      end
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find(params[:id])
    if @vote.destroy
      if @vote.annotation_id !== null
        @annotation = Annotation.find_by(id: @vote.annotation_id)
        @annotation.total_score -= @vote.value
        @annotation.save!
        render :show
      elsif @vote.comment_id !== null
        @comment = Comment.find_by(id: @vote.annotation_id)
        @comment.total_score += @vote.value
        @comment.save!
        render :show
      end
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:user_id, :annotation_id, :comment_id,
      :value)
  end

end
