class Api::AnnotationsController < ApplicationController

  def create
    @annotation = Annotation.new(annotation_params)
    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def show
    @annotation = Annotation.find(params[:id])
    render :show
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    if @annotation.destroy
      render :index
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def annotation_params
    params.require(:annotation).permit(:user_id, :artwork_id, :body,
      :x_pos, :y_pos, :total_score)
  end

end
