# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Anime.create(name: "One Piece", bio: "The series focuses on Monkey D. Luffy, a young man made of rubber, whom, inspired by his childhood idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates. In an effort to organize his own crew, the Straw Hat Pirates, Luffy rescues and befriends a pirate hunter and swordsman named Roronoa Zoro, and they head off in search of the titular treasure. ", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg", studio: "Toei Animation", episodes: "1017", creator: "Eichiro Oda")
Anime.create(name: "Naruto: Shippuden", bio: "A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf village in the Land of Fire, one of the Five Great Shinobi Countries in the Ninja World. In response, the leader of Konoha and the Fourth Hokage, Minato Namikaze seals the fox inside the body of his newborn son, Naruto Uzumaki, making Naruto a host of the beast. Naruto is often scorned by Konoha's villagers for being the host of the Nine-Tails.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/NarutoCoverTankobon1.jpg/220px-NarutoCoverTankobon1.jpg", studio: "Pierrot", episodes: "500", creator: "Masashi Kishimoto")
Anime.create(name: "Bleach", bio: "In Karakura Town, a 15-year-old high school student Ichigo Kurosaki becomes a substitute Soul Reaper, when Rukia Kuchiki, a Soul Reaper, cannot fulfill her duties after engaging in battle with a particularly powerful Hollow. Although initially reluctant to accept the heavy responsibility, he begins eliminating Hollows in Rukia's place and during this time discovers that several of his friends and classmates are spiritually aware and have powers of their own.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bleachanime.png/220px-Bleachanime.png", studio: "Perriot", episodes: "366", creator: "Tite Kubo")
Anime.create(name: "Jujutsu Kaisen", bio: "Yuji Itadori is an unnaturally fit high school student living in Sendai. On his deathbed, his grandfather instills two powerful messages within Yuji: always help others and die surrounded by people. Yuji's friends at the Occult Club attract Curses to their school when they unsealed a rotten finger talisman which Yuji swallowed to protect Megumi Fushiguro and their friends, becoming host to a powerful curse named Ryomen Sukuna.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Jujutsu_kaisen.jpg/220px-Jujutsu_kaisen.jpg", studio: "MAPPA", episodes: "24", creator: "Gege Akutami")
Anime.create(name: "Code Geass", bio: "Lelouch vi Britannia is an exiled Britannian prince, son of Emperor Charles zi Britannia and his royal consort Marianne vi Britannia. Lelouch has a sister, Nunnally vi Britannia. Marianne was brutally murdered in the palace and Nunnally, who witnessed the murder of their mother, was so traumatized she lost both her sight and ability to walk. Lelouch is furious with his father, believing his father failed his mother and sister by turning a blind eye to their mother's death and failing to pursue their mother's killer.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Code_Geass_R1_box_set_cover.jpg/220px-Code_Geass_R1_box_set_cover.jpg", studio: "Studio Sunrise", episodes: "50", creator: "Goro Taniguchi")
Anime.create(name: "Seven Deadly Sins", bio: "he Seven Deadly Sins are a band of knights in the land of Britannia who had disbanded ten years earlier after being framed for plotting a coup of the Liones Kingdom, the Holy Knights who sequestered them before taking control in the wake of a rebellion they organized. Liones' third princess, Elizabeth Liones, finds the Seven Deadly Sins' leader, Meliodas, before they search out his comrades so they can clear their names and liberate Liones from the Holy Knights", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Nanatsu_no_Taizai_Volume_1.png/220px-Nanatsu_no_Taizai_Volume_1.png", studio: "A-1 Pictures", episodes: "75", creator: "Nakaba Suzuki")
Anime.create(name: "Soul Eater", bio: "Maka and Soul battle the witch Medusa, who forces Crona, her child and meister of the demon sword Ragnarok, to collect non-evil human souls and eventually transform into a kishin (鬼神), an evil god. Medusa and her cohorts attack DWMA to revive Asura, the first kishin who nearly plunged the entire world into madness before being sealed beneath DWMA by Shinigami.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Soul_Eater_manga_volume_1.jpg/220px-Soul_Eater_manga_volume_1.jpg", studio: "Bones", episodes: "51", creator: "Atsushi Okubo")
Anime.create(name: "Fire Force", bio: "Shinra Kusakabe is a third generation pyrokinetic youth who gained the nickname Devil's Footprints for his ability to ignite his feet at will, and was ostracized as a child for the fire that killed his mother and younger brother Sho twelve years ago. He joins Special Fire Force Company 8, which features other pyrokinetics who dedicated themselves to ending the Infernal attacks for good", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Fire_Force%2C_Volume_1.jpg/220px-Fire_Force%2C_Volume_1.jpg", studio: "David Production", episodes: "48", creator: "Atsushi Okubo")
Anime.create(name: "Mob Psycho 100", bio: "Shigeo Kageyama is an average middle school boy, nicknamed Mob for lacking a sense of presence. Although he looks like an inconspicuous person, he is in fact a powerful esper with immense psychic power. To keep from losing control of this power, he constantly lives a life under an emotional shackle.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Mob_Psycho_100_manga_vol_1.jpg/220px-Mob_Psycho_100_manga_vol_1.jpg", studio: "Bones", episodes: "37", creator: "One")

Review.create(score: 5, comment: "Supreme World Building Adventure Series", anime_id: 1, title: "Loved it!")
Review.create(score: 4, comment: "One of the best action series, with great comedy and fashion!", anime_id: 3, title: "Ichigo is the goat!")
Review.create(score: 5, comment: "Best shounen series out in the game right now and always!", anime_id: 1, title: "Most honest review yet!")
Review.create(score: 4, comment: "Love the fashion styles that Tite Kubo uses on his characters!", anime_id: 3, title: "Ichigo + Orihime!")
Review.create(score: 5, comment: "This story changed my perspective on the inequalities that riddle our modern society.",anime_id: 5, title: "Eye Opener")
Review.create(score: 4, comment: "Great Arthurian action series, that has a great magical power system.", anime_id: 6, title: "Sin of greatness!")
Review.create(score: 5, comment: "Eveything from the characters to the power system is so good!", anime_id: 2, title: "Best new gen shounen!")
Review.create(score: 4, comment: "This may seem like more of the same when it comes to shounen but it handles the niches nicely!", anime_id: 2, title: "More of the same?")
Review.create(score: 3, comment: "I know there are always hesitations when it comes to sequels but give this one a chance!", anime_id: 1, title: "Good Sequel?")
Review.create(score: 5, comment: "Who knew this was going to end up being a prequel series to soul eater! Oops spoiler?!", anime_id: 2, title: "What a great ending!")
Review.create(score: 5, comment: "What a wild ride from start to finish, a very gratifying serires.", anime_id: 3, title: "Techically a Manwhah")
Review.create(score: 3, comment: "We always appreciate hiro mashimas work, but it does have its limitations.", anime_id: 4, title: "Here we go again!")
Review.create(score: 5, comment: "Such a well done series that handles an older MC, great fights!", anime_id: 94, title: "Oh okay i see you!")
Review.create(score: 4, comment: "MHA definitely has its slower moments, but boy do they tie things together into great moments!", anime_id: 6, title: "Gotta love heros!")
Review.create(score: 4, comment: "What a great concept, with amazingly creepy and sharp styles! Hilarious comedy with enticing characters.", anime_id: 4, title: "So much fun!")
Review.create(score: 4, comment: "This art stlye inspired by Tim Burton is so refreshing with great world building with a good mix of creepiness.", anime_id: 9, title: "Great art stlye!")
Review.create(score: 5, comment: "Holy crab cakes was this such a good series, from its art stlye to its array of great characters!", anime_id: 6, title: "Loved it!")
User.create(username: "daninteriano", password: 'geronimo', password_confirmation: 'geronimo')
User.create(username: "natalieeyob", password: 'junketsu', password_confirmation: 'junketsu')