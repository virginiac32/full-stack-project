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
  {
    title: "Improvisation 27 (Garden of Love II)",
    description: "In his influential treatise, Concerning the Spiritual in Art, Kandinsky theorized a new form of artistic expression that would reject the materialist world in favor of emotional and spiritual ideals, using abstract forms and color symbolism to evoke an inner, preconscious world. Composed of dark lines and abstract colorful masses, Improvisation 27 depicts three iterations of an embracing couple surrounded by serpentine forms. Kandinsky hints at the painting’s possible subject in the subtitle 'Garden of Love II,' likely a reference to biblical Eden.",
    artist: "Vasily Kandinsky",
    user_id: user1.id,
    year: "1912",
    link: "http://res.cloudinary.com/virginia-chen/image/upload/c_scale,w_1000/v1500963945/Improvisation-Kandinsky_u8vyna.png"
  },
  {
    title: "A Rose",
    description: "One of the most gifted American art teachers, Anshutz links the realism of his mentor Thomas Eakins with that of the Ashcan School, some of whom were his students. Perhaps because Anshutz spent so much time teaching, he painted only about 130 oils. Some of the most impressive belong to a series of images of Rebecca H. Whelen, daughter of a trustee of the Pennsylvania Academy of the Fine Arts, where Anshutz taught. The woman at leisure and the likening of a beautiful woman to a flower are common themes in late-nineteenth-century American painting. They reflect the contemporary definition of a woman's proper sphere: the realm of leisure, beauty, and the aesthetic, harmonious domestic environment.",
    artist:"Thomas Anshutz",
    user_id: user1.id,
    year: "1907",
    link: "http://res.cloudinary.com/virginia-chen/image/upload/c_scale,w_1000/v1500963948/Rose-Anshutz_hkpxon.png"
  },
  {
    title: "Antigraceful",
    description: "In this bust of his mother, Cecilia Forlani Boccioni, the artist employs Cubist distortions and fragmentation to undermine conventional concepts of beauty. The title refers to Boccioni’s rejection of traditional artistic values, a view he expanded on in his 1914 book Pittura, scultura futuriste, \'We must smash, demolish, and destroy our traditional harmony, which makes us fall into a gracefulness created by timid and sentimental cubs.\' Art historians have speculated that Pablo Picasso’s 1909 bronze Head of a Woman influenced Boccioni since the two works have striking stylistic similarities.",
    artist: "Umberto Boccioni",
    user_id: user1.id,
    year: "1913, cast 1950",
    link: "http://res.cloudinary.com/virginia-chen/image/upload/v1500963952/Antigraceful-Boccioni_lyhn0r.png"
  },
  {
    title: "Daniel in the Lions' Den",
    description: "Painted oil on canvas, the artwork is based upon the biblical story of Daniel in the lion's den."
    artist: "Peter Paul Rubens",
    user_id: user1.id,
    year: "1614/1616",
    link: "http://res.cloudinary.com/virginia-chen/image/upload/c_scale,w_500/v1501279672/Daniel-Rubens_eeti7i.png"
  },
  {
    title: "Lumber Schooners at Evening on Penobscot Bay",
    description: "The artwork depicts lumber schooners on a calm evening with a rosy sunset in the background."
    artist: "Fitz Henry Lane",
    user_id: user1.id,
    year: "1863",
    link: ""
    },
])
