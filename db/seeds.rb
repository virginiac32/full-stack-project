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
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608808/artwork/Boating-Manet.jpg"
  },
  {
    title: "A Goldsmith in his Shop",
    description: "A celebrated masterpiece of Northern Renaissance Art, this painting was signed and dated 1449 by Petrus Christus, the leading painter in Bruges (Flanders) after the death of Jan van Eyck. The panel attests to Netherlandish artists’ keen interest in pictorial illusionism and meticulous attention to detail, especially in the luminous jeweled, glass, and metallic objects, secular and ecclesiastic trade wares that are examples of the goldsmith's virtuosity.",
    artist: "Petrus Christus",
    user_id: user2.id,
    year: "1449",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608799/artwork/Goldsmith-Christus.jpg"
  },
  {
    title: "Madame Roulin and Her Baby",
    description: "This vigorously painted portrait of Augustine Roulin and her infant daughter, Marcelle, is one of Van Gogh’s many evocative renderings of the Roulin family, undertaken some six months after the artist relocated from Paris to Arles.",
    artist: "Vincent van Gogh",
    user_id: user2.id,
    year: "1888",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608775/artwork/Madam_Roulin-van_Gogh.jpg"
  },
  {
    title: "Heart of the Andes",
    description: "This picture was inspired by Church's second trip to South America in the spring of 1857. Church sketched prolifically throughout his nine weeks travel in Ecuador, and many extant watercolors and drawings contain elements found in this work.",
    artist: "Frederic Edwin Church",
    user_id: user1.id,
    year: "1859",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608749/artwork/Andes-Church.jpg"
  },
  {
    title: "Improvisation 27 (Garden of Love II)",
    description: "In his influential treatise, Concerning the Spiritual in Art, Kandinsky theorized a new form of artistic expression that would reject the materialist world in favor of emotional and spiritual ideals, using abstract forms and color symbolism to evoke an inner, preconscious world. Composed of dark lines and abstract colorful masses, Improvisation 27 depicts three iterations of an embracing couple surrounded by serpentine forms. Kandinsky hints at the painting’s possible subject in the subtitle 'Garden of Love II,' likely a reference to biblical Eden.",
    artist: "Vasily Kandinsky",
    user_id: user1.id,
    year: "1912",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608796/artwork/Improvisation-Kandinsky.jpg"
  },
  {
    title: "A Rose",
    description: "One of the most gifted American art teachers, Anshutz links the realism of his mentor Thomas Eakins with that of the Ashcan School, some of whom were his students. Perhaps because Anshutz spent so much time teaching, he painted only about 130 oils. Some of the most impressive belong to a series of images of Rebecca H. Whelen, daughter of a trustee of the Pennsylvania Academy of the Fine Arts, where Anshutz taught. The woman at leisure and the likening of a beautiful woman to a flower are common themes in late-nineteenth-century American painting. They reflect the contemporary definition of a woman's proper sphere: the realm of leisure, beauty, and the aesthetic, harmonious domestic environment.",
    artist:"Thomas Anshutz",
    user_id: user1.id,
    year: "1907",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608811/artwork/Rose-Anshutz.jpg"
  },
  {
    title: "Antigraceful",
    description: "In this bust of his mother, Cecilia Forlani Boccioni, the artist employs Cubist distortions and fragmentation to undermine conventional concepts of beauty. The title refers to Boccioni’s rejection of traditional artistic values, a view he expanded on in his 1914 book Pittura, scultura futuriste, \'We must smash, demolish, and destroy our traditional harmony, which makes us fall into a gracefulness created by timid and sentimental cubs.\' Art historians have speculated that Pablo Picasso’s 1909 bronze Head of a Woman influenced Boccioni since the two works have striking stylistic similarities.",
    artist: "Umberto Boccioni",
    user_id: user1.id,
    year: "1913, cast 1950",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608818/artwork/Antigraceful-Boccioni.jpg"
  },
  {
    title: "Daniel in the Lions' Den",
    description: "Painted oil on canvas, the artwork is based upon the biblical story of Daniel in the lion's den.",
    artist: "Peter Paul Rubens",
    user_id: user1.id,
    year: "1614/1616",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608694/artwork/Daniel-Rubens.jpg"
  },
  {
    title: "Lumber Schooners at Evening on Penobscot Bay",
    description: "The artwork depicts lumber schooners on a calm evening with a rosy sunset in the background.",
    artist: "Fitz Henry Lane",
    user_id: user1.id,
    year: "1863",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608691/artwork/Lumber-Lane.jpg"
  },
  {
    title: "Courtesan Writing a Letter",
    description: "Departing from the standard Kaigetsudō-atelier compositional formula of depicting courtesans standing and otherwise unoccupied, here Doshin depicts his subject seated and writing a letter, no doubt to a special client. Courtesans reading or writing letters became a popular subject for ukiyo-e painters of the late seventeenth and early eighteenth century, and its origins may be traced to more complex genre screens and handscrolls depicting male and female figures within the pleasure district of Kyoto or Edo. The brilliantly colored floral pattern of the woman’s clothes effectively sets off the chalk-white expanses of the letter paper, her delicate hands, and her plump face. The garments are outlined in heavy strokes of dark ink, a feature common to compositions produced in the Kaigetsudō studio.
    As did all other successors of Kaigetsudō Ando, Doshin signed his name on this work as “Matsuyō” (meaning “last leaf”) of Kaigetsudō. The seal appears to read “Ando,” and indeed many Kaigetsudō artists continued to use the seal of the studio’s founder.",
    artist: "Kaigetsudō Doshin",
    user_id: user1.id,
    year: "1715",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608746/artwork/Courtesan-Doshin.jpg"
  },
  {
    title: "The Seated Clowness (from the series Elles)",
    description: "The success of Toulouse-Lautrec's posters advertising Parisian cabarets such as the Moulin Rouge led him to produce deluxe editions of prints of Montmartre's performers, such as this one of the clown and dancer Cha-u-Kao. These lithographs were intended to appeal to fans and print collectors alike. Unlike Lautrec's other images that feature Cha-u-Kao performing, this one captures her off stage in a moment of quiet repose. Her frank pose and almost weary expression suggest we are glimpsing the person behind the persona.",
    artist: "Henri de Toulouse-Lautrec",
    user_id: user2.id,
    year: "1896",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608722/artwork/Clowness-Lautrec.jpg"
  },
  {
    title: "La Orana Maria (Hail Mary)",
    description: "Before embarking on a series of pictures inspired by Polynesian religious beliefs, Gauguin devoted this, his first major Tahitian canvas, to a Christian theme, describing it in a letter of March 1892: 'An angel with yellow wings reveals Mary and Jesus, both Tahitians, to two Tahitian women, nudes dressed in pareus, a sort of cotton cloth printed with flowers that can be draped from the waist. Very somber, mountainous background and flowering trees . . . a dark violet path and an emerald green foreground, with bananas on the left. I'm rather happy with it.'' Gauguin based much of the composition on a photograph he owned of a bas-relief in the Javanese temple of Borobudur.",
    artist: "Paul Gauguin",
    user_id: user1.id,
    year: "1891",
    link: "http://res.cloudinary.com/dzqodddmb/image/upload/c_scale,q_auto:good,w_1200/v1503608752/artwork/Maria-Gauguin.jpg"
  },
])
