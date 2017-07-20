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
  { username: 'virginia', password: 'password'},
  { username: 'kelly', password: 'password'},
  { username: 'demo', password: 'password'}
])

user1 = User.create(username: 'guest', password: 'password')
user2 = User.create(username: 'hello', password: 'password')

Artwork.create([
  {
    title: "Boating",
    description: "Manet summered at Gennevilliers in 1874, often spending time with Monet and Renoir across the Seine at Argenteuil, where Boating was painted. Beyond adopting the lighter touch and palette of his younger Impressionist colleagues, Manet exploits the broad planes of color and strong diagonals of Japanese prints to give inimitable form to this scene of outdoor leisure. Rodolphe Leenhoff, the artist’s brother-in-law, is thought to have posed for the sailor but the identity of the woman is uncertain.",
    artist: "Édouard Manet",
    user_id: user1.id,
    year: "1874",
    link: "http://res.cloudinary.com/virginia-chen/image/upload/v1500588441/Seeds/Boating-Manet.jpg"
  },
  {
    title: "A Goldsmith in his Shop",
    description: "A celebrated masterpiece of Northern Renaissance Art, this painting was signed and dated 1449 by Petrus Christus, the leading painter in Bruges (Flanders) after the death of Jan van Eyck. The panel attests to Netherlandish artists’ keen interest in pictorial illusionism and meticulous attention to detail, especially in the luminous jeweled, glass, and metallic objects, secular and ecclesiastic trade wares that are examples of the goldsmith's virtuosity.",
    artist: "Petrus Christus",
    user_id: user2.id,
    year: "1449",
    link: "http://res.cloudinary.com/virginia-chen/image/upload/v1500588443/Seeds/Goldsmith-Christus.jpg"
  },
  {
    title: "Madame Roulin and Her Baby",
    description: "This vigorously painted portrait of Augustine Roulin and her infant daughter, Marcelle, is one of Van Gogh’s many evocative renderings of the Roulin family, undertaken some six months after the artist relocated from Paris to Arles.",
    artist: "Vincent van Gogh",
    user_id: user2.id,
    year: "1888",
    link: "http://res.cloudinary.com/virginia-chen/image/upload/v1500588440/Seeds/Madam_Roulin-van_Gogh.jpg"
  },
  {
    title: "Heart of the Andes",
    description: "This picture was inspired by Church's second trip to South America in the spring of 1857. Church sketched prolifically throughout his nine weeks travel in Ecuador, and many extant watercolors and drawings contain elements found in this work.",
    artist: "Frederic Edwin Church",
    user_id: user1.id,
    year: "1859",
    link: "http://res.cloudinary.com/virginia-chen/image/upload/v1500588444/Seeds/Andes-Church.jpg"
  },
])
