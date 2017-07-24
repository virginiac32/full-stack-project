class Api::AnnotationsController < ApplicationController

  def index
    @annotations = Annotation.where(artwork_id: params[:artwork_id])
    render :index
  end

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

  def update
    @annotation = Annotation.find(params[:id])
    if @annotation.update(annotation_params)
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    if @annotation.destroy
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  private

  def annotation_params
    params.require(:annotation).permit(:user_id, :artwork_id, :body,
      :x_pos, :y_pos, :total_score)
  end

end
