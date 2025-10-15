CREATE TABLE animals (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  description TEXT,
  scientfic_name TEXT,
  image TEXT
)

CREATE TABLE habitats (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type TEXT NOT NULL,
  description TEXT,
  complexity TEXT -- how difficult is it to live in
)

CREATE TABLE animals_habitats (
  animal_id INT REFERENCES animals(id),
  habitat_id INT REFERENCES habitats(id),
  PRIMARY KEY (animal_id, habitat_id) -- cannot accidentally have duplicate entries.
)


INSERT INTO animals (name, description, scientfic_name, image) VALUES
('Otter', 'A playful semi-aquatic mammal known for its use of tools.', 'Lutra lutra', 'https://www.nature.scot/sites/default/files/styles/hero_banner_half_width/public/2017-07/Otter-01v2.jpg?h=0006430b&itok=WcsIZM11'),
('Polar Bear', 'A large carnivorous bear native to the Arctic Circle.', 'Ursus maritimus', 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8'),
('Tiger', 'A powerful predator known for its distinctive stripes.', 'Panthera tigris', 'https://i.natgeofe.com/k/07176791-9577-4e31-b101-b10ca7ca9a3c/Stripes_Tiger-Terrific_KIDS_0722_2x1.jpg'),
('Camel', 'A desert-adapted mammal with humps to store fat.', 'Camelus dromedarius', 'https://cdn.britannica.com/94/152294-050-92FE0C83/Arabian-dromedary-camel.jpg'),
('Frog', 'An amphibian that thrives in moist environments.', 'Rana temporaria', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW43z5Akg5WIcbb46WszuPDZ0rGSnvEKxWLQ&s'),
('Bat', 'A nocturnal mammal capable of echolocation and flight.', 'Chiroptera', 'https://i0.wp.com/yaleclimateconnections.org/wp-content/uploads/2024/10/103124-Bat-Resized.jpg?fit=1200%2C675&ssl=1');


INSERT INTO habitats (type, description, complexity) VALUES
('River', 'Freshwater environments with flowing water.', 'Medium'),
('Desert', 'Dry, arid regions with extreme temperature swings.', 'High'),
('Arctic', 'Frozen environments with icy terrain and minimal vegetation.', 'Very High'),
('Jungle', 'Dense, humid forests with high biodiversity.', 'High'),
('Wetland', 'Marshy areas where water meets land, rich in species.', 'Medium'),
('Cave', 'Dark, enclosed spaces with unique microclimates.', 'High'),
('Mountain', 'Elevated, rugged terrain with thin air and cold.', 'Very High');


INSERT INTO animals_habitats (animal_id, habitat_id) VALUES
(1, 1),  -- Otter → River
(1, 5),  -- Otter → Wetland
(2, 3),  -- Polar Bear → Arctic
(3, 4),  -- Tiger → Jungle
(4, 2),  -- Camel → Desert
(5, 1),  -- Frog → River
(5, 5),  -- Frog → Wetland
(6, 6),  -- Bat → Cave
(6, 4);  -- Bat → Jungle



-- I would like to get a animals name along with its habitat and how difficult the habitat is to survive in. 

-- Your joins always start off with what do you want to get - animals.name, habitat.type & habitat.complexity
-- this works but we're getting some duplicated infromation - otters shows up multiple times, as does the type
SELECT animals.name, habitats.type
FROM animals
INNER JOIN animals_habitats
ON animals.id = animals_habitats.animal_id
INNER JOIN habitats
ON habitats.id = animals_habitats.habitat_id


-- I'd like just a unique animal per row, and any habitats is has an array 
-- ARRAY_AGG - use this on the thing you want to turn into an array
-- GROUP by for what would only show up once per result
-- AS to rename columns (in the result).
SELECT animals.name, ARRAY_AGG(habitats.type) AS habitats
FROM animals
INNER JOIN animals_habitats
ON animals.id = animals_habitats.animal_id
INNER JOIN habitats
ON habitats.id = animals_habitats.habitat_id
GROUP BY animals.name

-- I want to group my information by the animal name and have an array of each animals habitats

-- Lets try the opposite - unique habitats and an array of the animals that live in them
SELECT ARRAY_AGG(animals.name) AS animals, habitats.type AS habitats
FROM animals
INNER JOIN animals_habitats
ON animals.id = animals_habitats.animal_id
INNER JOIN habitats
ON habitats.id = animals_habitats.habitat_id
GROUP BY habitats.type