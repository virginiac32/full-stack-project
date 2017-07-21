class Api::ArtworksController < ApplicationController
  def index
    @artworks = Artwork.all
    render :index
  end

  def create
    @artwork = Artwork.new(artwork_params)
    if @artwork.save
      render :show
    else
      render json: @artwork.errors.full_messages, status: 422
    end
  end

  def show
    @artwork = Artwork.find(params[:id])
    render :show
  end

  def destroy
    @artwork = Artwork.find(params[:id])
    if @artwork.destroy
      render :index
    else
      render json: @artwork.errors.full_messages, status: 422
    #   render(
    #     json: ['Artwork deletion unsuccessful'],
    #     status: 422
    #   )
    end
  end

  def artwork_params
    params.require(:artwork).permit(:title, :description, :artist,
      :user_id, :link, :year)
  end

end
