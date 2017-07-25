class Api::VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    p @vote
    if @vote.save
      if @vote.votable_type == 'Annotation'
        @annotation = Annotation.find_by(id: @vote.votable_id)
        @annotation.total_score += @vote.value
        @annotation.save!
        render :show
      elsif @vote.votable_type == 'Comment'
        @comment = Comment.find_by(id: @vote.votable_id)
        p @comment
        @comment.total_score += @vote.value
        @comment.save!
        render :show
      end
    else
      p @vote.errors.full_messages
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find(params[:id])
    if @vote.destroy
      if @vote.votable_type == 'Annotation'
        @annotation = Annotation.find_by(id: @vote.votable_id)
        @annotation.total_score -= @vote.value
        @annotation.save!
        render :show
      elsif @vote.votable_type == 'Comment'
        @comment = Comment.find_by(id: @vote.votable_id)
        p @comment
        @comment.total_score -= @vote.value
        @comment.save!
        render :show
      end
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:user_id, :votable_id, :votable_type,
      :value)
  end

end
