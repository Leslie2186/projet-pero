CREATE TABLE countries(
   id       INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,country  VARCHAR(255) NOT NULL
  ,flag     VARCHAR(2) NOT NULL
  ,language VARCHAR(255) NOT NULL
);
INSERT INTO countries(country,flag,language) VALUES ('Irlande du sud / République d''Irlande','IR','Anglais / Irlandais');
INSERT INTO countries(country,flag,language) VALUES ('Italie','IT','Italien');
INSERT INTO countries(country,flag,language) VALUES ('Espagne','ES','Espagnol');
INSERT INTO countries(country,flag,language) VALUES ('France','FR','Français');
INSERT INTO countries(country,flag,language) VALUES ('Sicile','SI','Italien');
INSERT INTO countries(country,flag,language) VALUES ('Croatie','CR','Croate');

CREATE TABLE cities(
   id         INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,city       VARCHAR(255) NOT NULL
  ,countries_id INTEGER  NOT NULL
  ,cash       VARCHAR(1) NOT NULL
  ,picture    VARCHAR(255) NOT NULL
  ,sunshine   INTEGER  NOT NULL
  ,monuments0 VARCHAR(255) NOT NULL
  ,monuments1 VARCHAR(255) NOT NULL
  ,monuments2 VARCHAR(255) NOT NULL
  ,monuments3 VARCHAR(255) NOT NULL
  ,monuments4 VARCHAR(255) NOT NULL
  ,monuments5 VARCHAR(255) NOT NULL
  ,monuments6 VARCHAR(255)
  ,Foreign Key (countries_id) REFERENCES countries(id)
);
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Dublin',1,'€','https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg',1450,'La Cathédrale Saint-Patrick','The Guinness Storehouse','L''Irish Whiskey Museum','Le Temple Bar','Le Trinity college','Le Stade de Croke Park',NULL);
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Kilkenny',1,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kilkenny22.jpg/1024px-Kilkenny22.jpg',1616,'Le centre historique','Le Château de Kilkenny','La Cathédrale Saint-Canice','Black Abbey','The National Reptile Zoo','St Stephen''s Green','La brasserie Smithwick''s');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Rome',2,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sant%27Angelo_bridge%2C_dusk%2C_Rome%2C_Italy.jpg/1920px-Sant%27Angelo_bridge%2C_dusk%2C_Rome%2C_Italy.jpg',3346,'Le Colisée','La Fontaine de Trevi','Le Panthéon','La Basilique St Pierre','La Chapelle Sixtine','Les Thermes de Caracala','Le Forum Romain');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Pompéi',2,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pompeji_Forum2158.jpg/1280px-Pompeji_Forum2158.jpg',3326,'La Villa des Mystères','La maison du faune','Le Forum de Pompéi','Le Sanctuaire d''Apollon','La Chapelle Sixtine','Le Parc Archéologique','Le Sanctuaire de Notre Dame du Rosaire');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Naple',2,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/VedutaEremo.jpg/1280px-VedutaEremo.jpg',3387,'El Teatro San Carlo','El Castel dell''Ovo','La Chapelle Sansevero','Le Palais royal','Les catacombes de St Gennaro','La Galleria Borbonica','La Basilique Santa Chiara');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Venise',2,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Collage_Venezia.jpg/1280px-Collage_Venezia.jpg',3039,'Le Palais des Doges','La Basilique Saint Marc','L''Opéra de Venise','Le Campanile de Saint-Marc','La Basilique Santa Maria Della Salute','Le Palais Contarini del Bovolo','La Gallerie dell''Accademia de Venise');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Barcelone',3,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Barcelona_North-East_%282806934358%29.jpg/1280px-Barcelona_North-East_%282806934358%29.jpg',2513,'La Sagrada Familia','La Casa Batllo','Le stade Camp Nou','La Pedrera','La Cathédrale Sainte-Croix','Le Musée Picasso','Le Palais de la musique catalane');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Paris',4,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1920px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',1690,'La Tour Eiffel','Le Musée du Louvre','La Cathédrale Notre-Dame','Le Musée d''Orsay','Le Palais Garnier','Le Panthéon','Le Grand Palais');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Lyon',4,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/From_Croix_Rousse_To_Fourvi%C3%A8re_%28161423721%29.jpeg/1920px-From_Croix_Rousse_To_Fourvi%C3%A8re_%28161423721%29.jpeg',2220,'Le Parc de la Tête d''Or','La Basilique Notre-Dame de Fourvière','Fourvière','Lugdunum Musée et Théâtre romains','Le Musée des Confluences','Le Théâtre Gallo Romain','Le Musée Cinéma et Miniature');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Toulouse',4,'€','https://upload.wikimedia.org/wikipedia/commons/a/af/Toulouse-Place_du_Capitole.jpg',2030,'La Basilique Saint-Sernin','Le Couvent des Jacobins','La Cité de l''espace','Le Jardin japonais Pierre-Baudis','Le Musée des Augustins','La Cathédrale Saint-Etienne','Le Musée de Toulouse');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Bordeaux',4,'€','https://upload.wikimedia.org/wikipedia/commons/3/31/Vue_du_Pont_Jacques_Chaban-Delmas.jpg',2308,'La Cathédrale Saint-André','La Place de la Bourse','L''Opéra National - Grand Théâtre','La Cité du Vin','Le Jardin Public','Le Musée d''Aquitaine','La Tour Pey Berland');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Palerme',5,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Palermo-Panorama-bjs-1.jpg/1280px-Palermo-Panorama-bjs-1.jpg',2700,'La Cathédrale de Palerme','Le Theotro Massimo','La Chapelle Palatine','Le Palais des Normands','La Fontana Pretoria','L''église della Martorana','Le Jardin Botanique');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Syracuse',5,'€','https://upload.wikimedia.org/wikipedia/commons/3/34/Veduta_aerea_di_Siracusa_e_con_l%27Etna_sullo_sfondo_%28Foto_di_Angelo_Bonomo%29.jpg',2533,'Parc archéologique de Néapolis','La Cathédrale de Syracuse','le Théatre Grec','Le Temple d''Apollon','L''Oreille de Dionysos','Château Maniace','Catacombe di San Giovanni');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Catane',5,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Catania-Etna-Sicilia-Italy-Castielli_CC0_HQ1.JPG/1280px-Catania-Etna-Sicilia-Italy-Castielli_CC0_HQ1.JPG',3427,'L''Etna','Le Château d''Ursino','La Villa Bellini','El Teatro Massimo Bellini','L''église delle Badia di Sant''Agata','L''Amphithéâtre de Catane','Le Palais Biscari');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Messine',5,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Messina-panorama_dal_Campanile.jpg/1280px-Messina-panorama_dal_Campanile.jpg',3379,'La Cathédrale de Messine','L''Horloge astronomique','La Chiesa di Santa Maria Alemanna','Le Campanile del Duomo di Messina','La Chiesa Santissima Annunziata dei Catalani','Le Musée régional','El Santuario Parrocchia S.Maria Di Montalto');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Taormine',5,'€','https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mt_Etna_and_Taormina_as_seen_from_the_Ancient_Theatre_of_Taormina_%2822290641726%29.jpg/1920px-Mt_Etna_and_Taormina_as_seen_from_the_Ancient_Theatre_of_Taormina_%2822290641726%29.jpg',3383,'Le Théâtre de Taormina','La Chiesa Madonna della Rocca','El Duomo di Taormina','La Villa Comunale','La Chiesa di San Guiseppe','Le Palais Corvaja','Taormina Castle');
INSERT INTO cities(city,countries_id,cash,picture,sunshine,monuments0,monuments1,monuments2,monuments3,monuments4,monuments5,monuments6) VALUES ('Zadar',6,'€','https://upload.wikimedia.org/wikipedia/commons/8/86/Zadar.jpg',2600,'L''église Saint-Donat','Le Roman Forum','La Cathédrale Sainte-Anastasie','Les Orgues Marin','Le Parc national de Krka','Le Musée Archéologique','Le Parc de la Reine Madijevka');

CREATE TABLE users(
   id       INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,email     VARCHAR(255) UNIQUE NOT NULL
  ,password VARCHAR(255) NOT NULL
);

INSERT INTO users(email, password) VALUES('admin1@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$sIrJDpzLmmZ/A2wfLd4G8Q$PylOQ7gmi18LBnAbv1c0SNXuSsJU9dITZuLCFTtvGe0');