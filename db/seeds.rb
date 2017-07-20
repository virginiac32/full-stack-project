# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Artwork.destroy_all

users = User.create([
  { username: 'guest', password: 'password'},
  { username: 'virginia', password: 'password'},
  { username: 'kelly', password: 'password'},
  { username: 'demo', password: 'password'}
])

artworks = Artwork.create([
  {
    title: "Boating",
    description: "Manet summered at Gennevilliers in 1874, often spending time with Monet and Renoir across the Seine at Argenteuil, where Boating was painted. Beyond adopting the lighter touch and palette of his younger Impressionist colleagues, Manet exploits the broad planes of color and strong diagonals of Japanese prints to give inimitable form to this scene of outdoor leisure. Rodolphe Leenhoff, the artist’s brother-in-law, is thought to have posed for the sailor but the identity of the woman is uncertain.",
    artist: "Édouard Manet",
    user_id: 2,
    year: "1874",
    link: "http://res.cloudinary.com/virginia-chen/image/upload/v1500588441/Seeds/Boating-Manet.jpg"
  }
])
