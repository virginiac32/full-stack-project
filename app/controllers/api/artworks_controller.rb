class Api::ArtworksController < ApplicationController
  def index
    @artworks = Artwork.all
    render :index
  end

  def create
    @artwork = Artwork.new(artwork_params)
    if @artwork.save
      render 'api/artworks/show'
    else
      render json: @artwork.errors.full_messages, status: 422
    end
  end

  def show
    @artwork = Artwork.find(params[:id])
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
      render :index
    else
      render json: {}
    end
  end

  def artwork_params
    params.require(:artwork).permit(:title, :description, :artist,
      :user_id, :link, :year)
  end

end
