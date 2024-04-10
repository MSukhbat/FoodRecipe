// interface Recipe {
//   id: string;
//   name: string;
//   description: string;
//   imageUrl: string;
//   prepTime: number;
//   cookTime: number;
//   easy: string;
//   ingredients: {
//     name: string;
//     quantity?: number;
//     unit?: string;
//     notes?: string;
//   }[];
//   instructions: {
//     number: number;
//     instruction: string;
//   }[];
//   //   ingredients: Array;
//   //   instructions: Step[];
// }
// const recipes: Recipe[] = [
//   {
//     id: '1',
//     name: 'Vegetarian lasagne',
//     description: 'Delicious',
//     prepTime: 25,
//     cookTime: 110,
//     easy: 'Easy',
//     imageUrl:
//       'https://images.immediate.co.uk/production/volatile/sites/30/2022/02/vegetarian-lasagne-5ee6162.jpg?quality=90&webp=true&resize=440,400',
//     ingredients: [
//       { name: 'red peppers', quantity: 3, unit: 'cut into large chunks' },
//       { name: 'aubergines', quantity: 2, unit: 'cut into ½ cm thick slices' },
//       { name: ' olive oil', quantity: 8, unit: 'tbsp' },
//       { name: ' lasagne sheets', quantity: 300, unit: 'grams' },
//       { name: ' mozzarella', quantity: 125, unit: 'grams' },
//       { name: '  cherry tomatoes', quantity: 1, unit: 'halved' },
//       { name: '  onions', quantity: 1, unit: 'tbsp' },
//       { name: '  gralic gloves', quantity: 2, unit: 'sliced' },
//       { name: '  carrot', quantity: 1, unit: 'roughly chopped' },
//       { name: '  white whine', quantity: 200, unit: 'milliter' },
//       { name: '  butter', quantity: 85, unit: 'gramms' },
//       { name: '  plain flour', quantity: 85, unit: 'gramms' },
//       { name: '  milk', quantity: 750, unit: 'milliter' },
//       { name: ' basil', quantity: 1, unit: 'leaves pickked' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'To make the tomato sauce, heat the olive oil in a saucepan. Add the onions, garlic and carrot. Cook for 5-7 mins over a medium heat until softened. Turn up the heat a little and stir in the tomato purée. Cook for 1 min, pour in the white wine, then cook for 5 mins until this has reduced by two-thirds. Pour over the chopped tomatoes and add the basil leaves. Bring to the boil then simmer for 20 mins. Leave to cool then whizz in a food processor. Will keep, cooled, in the fridge for up to three days or frozen for three months.',
//       },
//       {
//         number: 2,
//         instruction:
//           'To make the white sauce, melt the butter in a saucepan, stir in the plain flour, then cook for 2 mins. Slowly whisk in the milk, then bring to the boil, stirring. Turn down the heat, then cook until the sauce starts to thicken and coats the back of a wooden spoon. Will keep, cooled, in the fridge for up to three days or frozen for three months.',
//       },
//       {
//         number: 3,
//         instruction:
//           'Heat the oven to 200C/180C fan/gas 6. Lightly oil two large baking trays and add the peppers and aubergines. Toss with the olive oil, season well, then roast for 25 mins until lightly browned.',
//       },
//       {
//         number: 4,
//         instruction:
//           'Reduce the oven to 180C/160C fan/gas 4. Lightly oil a 30 x 20cm ovenproof dish. Arrange a layer of the vegetables on the bottom, then pour over a third of the tomato sauce. Top with a layer of lasagne sheets, then drizzle over a quarter of the white sauce. Repeat until you have three layers of pasta.',
//       },
//       {
//         number: 5,
//         instruction:
//           'Spoon the remaining white sauce over the pasta, making sure the whole surface is covered, then scatter over the mozzarella and cherry tomatoes. Bake for 45 mins until bubbling and golden.',
//       },
//     ],
//   },
//   {
//     id: '2',
//     name: 'Spicy root & lentil casserole',
//     description:
//       'The potatoes in this recipe take on the spicy flavours beautifully - our idea of the perfect veggie supper',
//     prepTime: 10,
//     cookTime: 35,
//     easy: 'Easy',
//     imageUrl:
//       'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-488691_11-ca2ba1d.jpg?quality=90&webp=true&resize=440,400',
//     ingredients: [
//       { name: 'sunflower', quantity: 2, unit: 'tbsp' },
//       { name: '  onions', quantity: 1, unit: 'chopped' },
//       { name: '  gralic gloves', quantity: 2, unit: 'crushed' },
//       { name: '  carrot', quantity: 4, unit: 'thickly sliced    `qas' },
//       { name: '  parsnip', quantity: 2, unit: 'thickly sliced' },
//       { name: '  curry paste or powder', quantity: 2, unit: 'tbsp' },
//       { name: '  red lentils', quantity: 100, unit: 'gramms' },
//       { name: '  potatoes', quantity: 700, unit: 'peeled and cut into chunks' },
//       { name: ' a small bunch of fresh coriander', unit: 'roughly chopped' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'Heat the oil in a large pan and cook the onion and garlic over a medium heat for 3-4 minutes until softened, stirring occasionally. Tip in the potatoes, carrots and parsnips, turn up the heat and cook for 6-7 minutes, stirring, until the vegetables are golden.',
//       },
//       {
//         number: 2,
//         instruction:
//           'Stir in the curry paste or powder, pour in the stock and then bring to the boil. Reduce the heat, add the lentils, cover and simmer for 15-20 minutes until the lentils and vegetables are tender and the sauce has thickened.',
//       },
//       {
//         number: 3,
//         instruction:
//           'Stir in most of the coriander, season and heat for a minute or so.Top with yogurt and the rest of the coriander. Serve with naan bread.',
//       },
//     ],
//   },
//   {
//     id: '3',
//     name: 'Butter Chicken',
//     description: 'Delicious Indian dish',
//     prepTime: 20,
//     cookTime: 25,
//     easy: 'Easy',
//     imageUrl:
//       'https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400',
//     ingredients: [
//       { name: 'chicken breasts', quantity: 4, unit: 'large', notes: 'cut into bite-sized pieces' },
//       { name: 'natural yogurt', quantity: 4, unit: 'tbsp' },
//       { name: 'lemon juice', quantity: 2, unit: 'tbsp' },
//       { name: 'ground cumin', quantity: 1, unit: 'tsp' },
//       { name: 'garam masala', quantity: 1, unit: 'tsp' },
//       { name: 'tandoori masala', quantity: 1, unit: 'tsp' },
//       { name: 'ground turmeric', quantity: 1, unit: 'tsp' },
//       { name: 'ground ginger', quantity: 1, unit: 'tsp' },
//       { name: 'garlic cloves', quantity: 2, unit: 'crushed' },
//       { name: 'butter', quantity: 50, unit: 'g' },
//       { name: 'onion', quantity: 1, unit: 'large', notes: 'finely chopped' },
//       { name: 'green chili', quantity: 2, unit: 'sliced' },
//       { name: 'ground almonds', quantity: 50, unit: 'g' },
//       { name: 'passata', quantity: 500, unit: 'g' },
//       { name: 'double cream', quantity: 150, unit: 'ml' },
//       { name: 'coriander', quantity: 1, unit: 'handful', notes: 'chopped, to serve' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'Mix the yogurt, lemon juice, ground cumin, garam masala, tandoori masala, ground turmeric, ground ginger, and crushed garlic in a bowl. Add the chicken pieces, coat well, then cover and leave to marinate in the fridge for at least 1 hour, or overnight if possible.',
//       },
//       {
//         number: 2,
//         instruction:
//           'Melt the butter in a large pan over medium heat. Add the chopped onion and green chilies, and cook for 5-7 minutes until softened.',
//       },
//       {
//         number: 3,
//         instruction:
//           'Add the marinated chicken pieces and cook until sealed and lightly browned, about 10 minutes.',
//       },
//       {
//         number: 4,
//         instruction: 'Stir in the ground almonds and passata, then simmer gently for 10 minutes.',
//       },
//       {
//         number: 5,
//         instruction:
//           'Stir in the double cream and heat through for a further 5 minutes. Serve sprinkled with chopped coriander and accompanied by rice or naan bread.',
//       },
//     ],
//   },
//   {
//     id: '4',
//     name: 'Roasted Red Pepper Soup with Crispy Croutons',
//     description:
//       'A comforting and flavorful soup with roasted red peppers, served with crispy croutons on top.',
//     prepTime: 15,
//     cookTime: 45,
//     easy: 'Moderate',
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1tHrWtxqwRD-llv5ddwmUWoW_T-C2Ni47gz7w-vY8zgsIJmbi9dsLA_aDhSNUGmxlXA&usqp=CAU',
//     ingredients: [
//       { name: 'red bell peppers', quantity: 4, unit: 'large' },
//       { name: 'olive oil', quantity: 2, unit: 'tbsp' },
//       { name: 'onion', quantity: 1, unit: 'medium', notes: 'chopped' },
//       { name: 'garlic cloves', quantity: 2, unit: 'minced' },
//       { name: 'vegetable broth', quantity: 4, unit: 'cups' },
//       { name: 'tomato paste', quantity: 2, unit: 'tbsp' },
//       { name: 'balsamic vinegar', quantity: 1, unit: 'tbsp' },
//       { name: 'sugar', quantity: 1, unit: 'tsp' },
//       { name: 'salt', quantity: 1, unit: 'tsp', notes: 'or to taste' },
//       { name: 'black pepper', quantity: 1, unit: 'tsp', notes: 'or to taste' },
//       { name: 'baguette', quantity: 1, unit: 'small', notes: 'cut into cubes' },
//       { name: 'butter', quantity: 2, unit: 'tbsp' },
//       { name: 'fresh parsley', quantity: 2, unit: 'tbsp', notes: 'chopped, for garnish' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction: 'Preheat the oven to 200°C (400°F). Line a baking sheet with parchment paper.',
//       },
//       {
//         number: 2,
//         instruction:
//           'Cut the red bell peppers in half lengthwise, remove the seeds and membranes. Place the peppers, cut side down, on the prepared baking sheet. Roast in the preheated oven for 25-30 minutes or until the skins are blistered and charred.',
//       },
//       {
//         number: 3,
//         instruction:
//           'Remove the peppers from the oven and transfer them to a bowl. Cover the bowl with plastic wrap and let them steam for 10 minutes. After steaming, peel off the skins from the peppers.',
//       },
//       {
//         number: 4,
//         instruction:
//           'In a large pot, heat the olive oil over medium heat. Add the chopped onion and minced garlic, sauté until softened and fragrant, about 5 minutes.',
//       },
//       {
//         number: 5,
//         instruction:
//           'Add the peeled roasted red peppers, vegetable broth, tomato paste, balsamic vinegar, sugar, salt, and black pepper to the pot. Bring the mixture to a simmer, then reduce the heat to low and cook for 15-20 minutes.',
//       },
//       {
//         number: 6,
//         instruction:
//           'While the soup is simmering, prepare the crispy croutons. In a skillet, melt the butter over medium heat. Add the cubed baguette and cook, stirring frequently, until golden brown and crispy.',
//       },
//       {
//         number: 7,
//         instruction:
//           'Once the soup is done cooking, remove it from the heat and allow it to cool slightly. Then, using an immersion blender or regular blender, purée the soup until smooth.',
//       },
//       {
//         number: 8,
//         instruction:
//           'Serve the roasted red pepper soup hot, garnished with crispy croutons and chopped fresh parsley.',
//       },
//     ],
//   },
//   {
//     id: '5',
//     name: 'Chilli con Carne',
//     description: 'A classic spicy and hearty Mexican dish.',
//     prepTime: 15,
//     cookTime: 60,
//     easy: 'Moderate',
//     imageUrl:
//       'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001451_6-c8d72b8.jpg?quality=90&resize=440,400',
//     ingredients: [
//       { name: 'olive oil', quantity: 2, unit: 'tbsp' },
//       { name: 'onion', quantity: 1, unit: 'large', notes: 'chopped' },
//       { name: 'garlic cloves', quantity: 2, unit: 'minced' },
//       { name: 'ground beef', quantity: 500, unit: 'g' },
//       { name: 'red bell pepper', quantity: 1, unit: 'large', notes: 'diced' },
//       { name: 'chilli powder', quantity: 2, unit: 'tbsp' },
//       { name: 'ground cumin', quantity: 1, unit: 'tbsp' },
//       { name: 'paprika', quantity: 1, unit: 'tbsp' },
//       { name: 'cayenne pepper', quantity: 1, unit: 'tsp', notes: 'adjust to taste' },
//       { name: 'kidney beans', quantity: 400, unit: 'g', notes: 'drained and rinsed' },
//       { name: 'chopped tomatoes', quantity: 400, unit: 'g' },
//       { name: 'tomato paste', quantity: 2, unit: 'tbsp' },
//       { name: 'beef broth', quantity: 250, unit: 'ml' },
//       { name: 'salt', quantity: 1, unit: 'tsp', notes: 'or to taste' },
//       { name: 'black pepper', quantity: 1, unit: 'tsp', notes: 'or to taste' },
//       { name: 'cooked rice', unit: 'for serving' },
//       { name: 'sour cream', unit: 'for serving' },
//       { name: 'grated cheddar cheese', unit: 'for serving' },
//       { name: 'chopped fresh cilantro', unit: 'for serving' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'Heat the olive oil in a large pot over medium heat. Add the chopped onion and minced garlic, sauté until softened and fragrant, about 5 minutes.',
//       },
//       {
//         number: 2,
//         instruction:
//           'Add the ground beef to the pot and cook until browned, breaking it up with a spoon as it cooks.',
//       },
//       {
//         number: 3,
//         instruction:
//           'Stir in the diced red bell pepper, chilli powder, ground cumin, paprika, and cayenne pepper. Cook for another 5 minutes.',
//       },
//       {
//         number: 4,
//         instruction:
//           'Add the drained and rinsed kidney beans, chopped tomatoes, tomato paste, and beef broth to the pot. Season with salt and black pepper, then bring the mixture to a simmer.',
//       },
//       {
//         number: 5,
//         instruction:
//           'Reduce the heat to low and let the chilli simmer, uncovered, for 30-40 minutes, stirring occasionally, until the flavours meld and the chilli thickens to your desired consistency.',
//       },
//       {
//         number: 6,
//         instruction:
//           'Serve the chilli con carne hot, spooned over cooked rice and topped with sour cream, grated cheddar cheese, and chopped fresh cilantro.',
//       },
//     ],
//   },
//   {
//     id: '6',
//     name: 'Spicy Lentil Soup',
//     description: 'A warming and nutritious soup with lentils and spices.',
//     prepTime: 20,
//     cookTime: 40,
//     easy: 'Easy',
//     imageUrl: 'https://img.taste.com.au/uAud0BhN/taste/2016/11/spiced-lentil-soup-104755-1.jpeg',
//     ingredients: [
//       { name: 'red lentils', quantity: 200, unit: 'g' },
//       { name: 'carrots', quantity: 2, unit: 'medium', notes: 'diced' },
//       { name: 'celery stalks', quantity: 2, unit: 'chopped' },
//       { name: 'onion', quantity: 1, unit: 'large', notes: 'chopped' },
//       { name: 'garlic cloves', quantity: 2, unit: 'minced' },
//       { name: 'vegetable broth', quantity: 1, unit: 'l' },
//       { name: 'ground cumin', quantity: 1, unit: 'tsp' },
//       { name: 'ground coriander', quantity: 1, unit: 'tsp' },
//       { name: 'ground turmeric', quantity: 1, unit: 'tsp' },
//       { name: 'cayenne pepper', quantity: 1, unit: 'tsp', notes: 'adjust to taste' },
//       { name: 'lemon juice', quantity: 2, unit: 'tbsp' },
//       { name: 'fresh cilantro', quantity: 1, unit: 'handful', notes: 'chopped, for garnish' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'In a large pot, heat olive oil over medium heat. Add onions, carrots, celery, and garlic. Cook until softened, about 5 minutes.',
//       },
//       {
//         number: 2,
//         instruction:
//           'Add lentils, vegetable broth, cumin, coriander, turmeric, and cayenne pepper. Bring to a boil, then reduce heat and simmer for 30 minutes.',
//       },
//       {
//         number: 3,
//         instruction:
//           'Blend half of the soup until smooth. Return it to the pot and stir in lemon juice. Season with salt and pepper to taste.',
//       },
//       {
//         number: 4,
//         instruction: 'Serve hot, garnished with fresh cilantro.',
//       },
//     ],
//   },
//   {
//     id: '7',
//     name: 'Mediterranean Pasta Salad',
//     description: 'A refreshing pasta salad with Mediterranean flavors.',
//     prepTime: 15,
//     cookTime: 10,
//     easy: 'Easy',
//     imageUrl:
//       'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Mediterranean-Pasta-Salad-8.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1599769281&s=b3f7b02e48bf0bd04fea3c6975417bfb',
//     ingredients: [
//       { name: 'pasta', quantity: 250, unit: 'g', notes: 'penne or fusilli recommended' },
//       { name: 'cherry tomatoes', quantity: 200, unit: 'g', notes: 'halved' },
//       { name: 'cucumber', quantity: 1, unit: 'medium', notes: 'diced' },
//       { name: 'red onion', quantity: 1, unit: 'small', notes: 'thinly sliced' },
//       { name: 'kalamata olives', quantity: 100, unit: 'g', notes: 'pitted and halved' },
//       { name: 'feta cheese', quantity: 100, unit: 'g', notes: 'crumbled' },
//       { name: 'fresh basil', quantity: 1, unit: 'cup', notes: 'chopped' },
//       { name: 'extra virgin olive oil', quantity: 3, unit: 'tbsp' },
//       { name: 'red wine vinegar', quantity: 2, unit: 'tbsp' },
//       { name: 'garlic clove', quantity: 1, unit: 'minced' },
//       { name: 'salt', quantity: 1, unit: 'tsp', notes: 'or to taste' },
//       { name: 'black pepper', quantity: 1, unit: 'tsp', notes: 'or to taste' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'Cook pasta according to package instructions. Drain and rinse under cold water.',
//       },
//       {
//         number: 2,
//         instruction:
//           'In a large bowl, combine pasta, cherry tomatoes, cucumber, red onion, olives, feta cheese, and basil.',
//       },
//       {
//         number: 3,
//         instruction:
//           'In a small bowl, whisk together olive oil, red wine vinegar, minced garlic, salt, and black pepper.',
//       },
//       {
//         number: 4,
//         instruction:
//           'Pour dressing over the pasta salad and toss to combine. Chill in the refrigerator for at least 30 minutes before serving.',
//       },
//     ],
//   },
//   {
//     id: '8',
//     name: 'Teriyaki Chicken Stir-Fry',
//     description:
//       'A quick and flavorful Asian-inspired stir-fry dish with tender chicken and vegetables.',
//     prepTime: 15,
//     cookTime: 15,
//     easy: 'Easy',
//     imageUrl:
//       'https://www.eatyourselfskinny.com/wp-content/uploads/2021/01/teriyaki-stir-fry-2-scaled.jpg',
//     ingredients: [
//       { name: 'chicken breasts', quantity: 2, unit: 'medium', notes: 'sliced into strips' },
//       { name: 'soy sauce', quantity: 3, unit: 'tbsp' },
//       { name: 'honey', quantity: 2, unit: 'tbsp' },
//       { name: 'sesame oil', quantity: 1, unit: 'tbsp' },
//       { name: 'garlic cloves', quantity: 2, unit: 'minced' },
//       { name: 'ginger', quantity: 1, unit: 'tbsp', notes: 'fresh, minced' },
//       { name: 'vegetable oil', quantity: 2, unit: 'tbsp' },
//       {
//         name: 'mixed vegetables',
//         quantity: 400,
//         unit: 'g',
//         notes: 'such as bell peppers, broccoli, snap peas, and carrots, sliced',
//       },
//       { name: 'cooked rice', unit: 'for serving' },
//       { name: 'sesame seeds', unit: 'for garnish' },
//       { name: 'green onions', unit: 'for garnish', notes: 'chopped' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'In a bowl, combine soy sauce, honey, sesame oil, minced garlic, and minced ginger. Add sliced chicken breasts to the marinade and let it marinate for 15 minutes.',
//       },
//       {
//         number: 2,
//         instruction:
//           'Heat vegetable oil in a large skillet or wok over medium-high heat. Add marinated chicken and cook until browned and cooked through, about 5-6 minutes. Remove chicken from the skillet and set aside.',
//       },
//       {
//         number: 3,
//         instruction:
//           'In the same skillet, add mixed vegetables and stir-fry until crisp-tender, about 3-4 minutes.',
//       },
//       {
//         number: 4,
//         instruction:
//           'Return cooked chicken to the skillet. Add any remaining marinade and cook for 1-2 minutes, stirring constantly.',
//       },
//       {
//         number: 5,
//         instruction:
//           'Serve hot over cooked rice, garnished with sesame seeds and chopped green onions.',
//       },
//     ],
//   },
//   {
//     id: '9',
//     name: 'Caprese Salad',
//     description:
//       'A simple and refreshing Italian salad featuring ripe tomatoes, fresh mozzarella, and basil leaves.',
//     prepTime: 10,
//     cookTime: 0,
//     easy: 'Easy',
//     imageUrl: 'https://natashaskitchen.com/wp-content/uploads/2019/08/Caprese-Salad-6.jpg',
//     ingredients: [
//       { name: 'ripe tomatoes', quantity: 4, unit: 'medium', notes: 'sliced' },
//       { name: 'fresh mozzarella cheese', quantity: 250, unit: 'g', notes: 'sliced' },
//       { name: 'fresh basil leaves', quantity: 1, unit: 'cup' },
//       { name: 'extra virgin olive oil', quantity: 2, unit: 'tbsp' },
//       { name: 'balsamic vinegar', quantity: 2, unit: 'tbsp' },
//       { name: 'salt', unit: 'to taste' },
//       { name: 'black pepper', unit: 'to taste' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction: 'Arrange alternating slices of tomatoes and mozzarella on a serving platter.',
//       },
//       {
//         number: 2,
//         instruction: 'Tuck fresh basil leaves between the tomato and mozzarella slices.',
//       },
//       {
//         number: 3,
//         instruction: 'Drizzle extra virgin olive oil and balsamic vinegar over the salad.',
//       },
//       {
//         number: 4,
//         instruction: 'Season with salt and black pepper to taste.',
//       },
//     ],
//   },
//   {
//     id: '10',
//     name: 'Vegetable Stir-Fry',
//     description: 'A colorful and nutritious stir-fry featuring a variety of fresh vegetables.',
//     prepTime: 15,
//     cookTime: 10,
//     easy: 'Easy',
//     imageUrl: 'https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg',
//     ingredients: [
//       { name: 'broccoli florets', quantity: 2, unit: 'cups' },
//       { name: 'carrots', quantity: 2, unit: 'medium', notes: 'sliced' },
//       { name: 'bell peppers', quantity: 2, unit: 'medium', notes: 'sliced' },
//       { name: 'snow peas', quantity: 1, unit: 'cup' },
//       { name: 'mushrooms', quantity: 200, unit: 'g', notes: 'sliced' },
//       { name: 'garlic cloves', quantity: 2, unit: 'minced' },
//       { name: 'ginger', quantity: 1, unit: 'tbsp', notes: 'fresh, minced' },
//       { name: 'soy sauce', quantity: 3, unit: 'tbsp' },
//       { name: 'sesame oil', quantity: 1, unit: 'tbsp' },
//       { name: 'vegetable oil', quantity: 2, unit: 'tbsp' },
//       { name: 'cooked rice', unit: 'for serving' },
//       { name: 'green onions', unit: 'for garnish', notes: 'chopped' },
//       { name: 'sesame seeds', unit: 'for garnish' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'In a large skillet or wok, heat vegetable oil over medium-high heat. Add minced garlic and minced ginger, and stir-fry for about 1 minute.',
//       },
//       {
//         number: 2,
//         instruction:
//           'Add sliced mushrooms, broccoli florets, carrots, bell peppers, and snow peas. Stir-fry for 4-5 minutes until vegetables are tender-crisp.',
//       },
//       {
//         number: 3,
//         instruction:
//           'In a small bowl, whisk together soy sauce and sesame oil. Pour the sauce over the vegetables and toss to coat evenly.',
//       },
//       {
//         number: 4,
//         instruction:
//           'Serve hot over cooked rice, garnished with chopped green onions and sesame seeds.',
//       },
//     ],
//   },
//   {
//     id: '11',
//     name: 'Mushroom Risotto',
//     description: 'A creamy and savory Italian rice dish cooked with mushrooms and parmesan cheese.',
//     prepTime: 10,
//     cookTime: 30,
//     easy: 'Moderate',
//     imageUrl:
//       'https://www.themediterraneandish.com/wp-content/uploads/2023/05/TMD-Mushroom-Risotto-WEB-7.jpg',
//     ingredients: [
//       { name: 'arborio rice', quantity: 1, unit: 'cup' },
//       { name: 'mushrooms', quantity: 200, unit: 'g', notes: 'sliced' },
//       { name: 'shallot', quantity: 1, unit: 'small', notes: 'finely chopped' },
//       { name: 'garlic clove', quantity: 1, notes: 'minced' },
//       { name: 'dry white wine', quantity: 1, unit: 'cup' },
//       { name: 'vegetable broth', quantity: 3, unit: 'cups' },
//       { name: 'butter', quantity: 2, unit: 'tbsp' },
//       { name: 'olive oil', quantity: 1, unit: 'tbsp' },
//       { name: 'parmesan cheese', quantity: 1, unit: 'cup', notes: 'grated' },
//       { name: 'fresh parsley', quantity: 2, unit: 'tbsp', notes: 'chopped, for garnish' },
//       { name: 'salt', unit: 'to taste' },
//       { name: 'black pepper', unit: 'to taste' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'In a saucepan, heat vegetable broth over medium heat until hot, then reduce heat to low and keep warm.',
//       },
//       {
//         number: 2,
//         instruction:
//           'In a large skillet, heat olive oil and butter over medium heat. Add chopped shallot and minced garlic, and sauté until softened.',
//       },
//       {
//         number: 3,
//         instruction:
//           'Add sliced mushrooms to the skillet and cook until golden brown, about 5 minutes.',
//       },
//       {
//         number: 4,
//         instruction: 'Stir in arborio rice and cook for 1-2 minutes until rice is lightly toasted.',
//       },
//       {
//         number: 5,
//         instruction: 'Pour in dry white wine and cook until evaporated, stirring constantly.',
//       },
//       {
//         number: 6,
//         instruction:
//           'Gradually add warm vegetable broth to the skillet, one ladleful at a time, stirring frequently. Wait until each ladleful is absorbed before adding more broth.',
//       },
//       {
//         number: 7,
//         instruction:
//           'Continue cooking and stirring until the rice is creamy and tender, about 20 minutes.',
//       },
//       {
//         number: 8,
//         instruction:
//           'Stir in grated parmesan cheese and season with salt and black pepper to taste.',
//       },
//       {
//         number: 9,
//         instruction: 'Serve hot, garnished with chopped fresh parsley.',
//       },
//     ],
//   },
//   {
//     id: '12',
//     name: 'Lemon Garlic Shrimp',
//     description: 'Juicy shrimp cooked in a tangy lemon garlic sauce.',
//     prepTime: 10,
//     cookTime: 10,
//     easy: 'Easy',
//     imageUrl: 'https://feelgoodfoodie.net/wp-content/uploads/2023/02/Lemon-Garlic-Shrimp-08.jpg',
//     ingredients: [
//       { name: 'shrimp', quantity: 500, unit: 'g', notes: 'peeled and deveined' },
//       { name: 'butter', quantity: 3, unit: 'tbsp' },
//       { name: 'olive oil', quantity: 2, unit: 'tbsp' },
//       { name: 'garlic cloves', quantity: 4, unit: 'minced' },
//       { name: 'lemon juice', quantity: 3, unit: 'tbsp' },
//       { name: 'lemon zest', quantity: 1, unit: 'tbsp' },
//       { name: 'fresh parsley', quantity: 2, unit: 'tbsp', notes: 'chopped' },
//       { name: 'salt', quantity: 1, unit: 'tsp', notes: 'or to taste' },
//       { name: 'black pepper', quantity: 1, unit: 'tsp', notes: 'or to taste' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'In a large skillet, heat butter and olive oil over medium heat until butter is melted.',
//       },
//       {
//         number: 2,
//         instruction: 'Add minced garlic to the skillet and cook until fragrant, about 1 minute.',
//       },
//       {
//         number: 3,
//         instruction:
//           'Add shrimp to the skillet and cook until pink and opaque, about 2-3 minutes per side.',
//       },
//       {
//         number: 4,
//         instruction:
//           'Stir in lemon juice and lemon zest, then season with salt and black pepper to taste.',
//       },
//       {
//         number: 5,
//         instruction: 'Remove from heat and garnish with chopped fresh parsley.',
//       },
//       {
//         number: 6,
//         instruction: 'Serve hot as an appetizer or over cooked pasta or rice as a main dish.',
//       },
//     ],
//   },
//   {
//     id: '13',
//     name: 'Greek Salad',
//     description:
//       'A refreshing and colorful salad with crisp vegetables, tangy feta cheese, and a zesty vinaigrette.',
//     prepTime: 15,
//     cookTime: 0,
//     easy: 'Easy',
//     imageUrl:
//       'https://www.themediterraneandish.com/wp-content/uploads/2023/08/Greek-salad-web-story-poster-image.jpeg',
//     ingredients: [
//       { name: 'cucumbers', quantity: 2, unit: 'medium', notes: 'halved and sliced' },
//       { name: 'tomatoes', quantity: 3, unit: 'medium', notes: 'cut into wedges' },
//       { name: 'red onion', quantity: 1, unit: 'small', notes: 'thinly sliced' },
//       { name: 'kalamata olives', quantity: 100, unit: 'g', notes: 'pitted' },
//       { name: 'feta cheese', quantity: 150, unit: 'g', notes: 'crumbled' },
//       { name: 'fresh parsley', quantity: 2, unit: 'tbsp', notes: 'chopped' },
//       { name: 'extra virgin olive oil', quantity: 3, unit: 'tbsp' },
//       { name: 'red wine vinegar', quantity: 2, unit: 'tbsp' },
//       { name: 'dried oregano', quantity: 1, unit: 'tsp' },
//       { name: 'salt', unit: 'to taste' },
//       { name: 'black pepper', unit: 'to taste' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'In a large bowl, combine cucumbers, tomatoes, red onion, kalamata olives, and crumbled feta cheese.',
//       },
//       {
//         number: 2,
//         instruction:
//           'In a small bowl, whisk together extra virgin olive oil, red wine vinegar, dried oregano, salt, and black pepper.',
//       },
//       {
//         number: 3,
//         instruction: 'Pour the vinaigrette over the salad and toss to coat evenly.',
//       },
//       {
//         number: 4,
//         instruction: 'Garnish with chopped fresh parsley before serving.',
//       },
//     ],
//   },
//   {
//     id: '14',
//     name: 'Thai Green Curry',
//     description:
//       'A fragrant and spicy Thai curry with tender chicken, vegetables, and creamy coconut milk.',
//     prepTime: 20,
//     cookTime: 30,
//     easy: 'Moderate',
//     imageUrl: 'https://heatherchristo.com/wp-content/uploads/2020/01/49336424473_259a36e340_o.jpg',
//     ingredients: [
//       {
//         name: 'chicken thighs',
//         quantity: 500,
//         unit: 'g',
//         notes: 'boneless and skinless, cut into bite-sized pieces',
//       },
//       { name: 'green curry paste', quantity: 3, unit: 'tbsp' },
//       { name: 'coconut milk', quantity: 400, unit: 'ml' },
//       { name: 'bamboo shoots', quantity: 200, unit: 'g', notes: 'sliced' },
//       { name: 'red bell pepper', quantity: 1, unit: 'large', notes: 'sliced' },
//       { name: 'green beans', quantity: 150, unit: 'g', notes: 'trimmed' },
//       { name: 'fish sauce', quantity: 2, unit: 'tbsp' },
//       { name: 'brown sugar', quantity: 1, unit: 'tbsp' },
//       { name: 'lime juice', quantity: 2, unit: 'tbsp' },
//       { name: 'fresh basil leaves', quantity: 1, unit: 'cup', notes: 'torn' },
//       { name: 'cooked rice', unit: 'for serving' },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'In a large skillet or wok, heat coconut milk over medium heat until simmering.',
//       },
//       {
//         number: 2,
//         instruction: 'Stir in green curry paste and cook for 1-2 minutes until fragrant.',
//       },
//       {
//         number: 3,
//         instruction: 'Add chicken thighs to the skillet and cook until browned.',
//       },
//       {
//         number: 4,
//         instruction: 'Stir in bamboo shoots, sliced red bell pepper, and trimmed green beans.',
//       },
//       {
//         number: 5,
//         instruction: 'Add fish sauce, brown sugar, and lime juice. Stir to combine.',
//       },
//       {
//         number: 6,
//         instruction:
//           'Simmer for 15-20 minutes until chicken is cooked through and vegetables are tender.',
//       },
//       {
//         number: 7,
//         instruction: 'Stir in torn fresh basil leaves just before serving.',
//       },
//       {
//         number: 8,
//         instruction: 'Serve hot over cooked rice.',
//       },
//     ],
//   },
//   {
//     id: '15',
//     name: 'Homemade Pizza',
//     description: 'A delicious homemade pizza with your favorite toppings.',
//     prepTime: 30,
//     cookTime: 15,
//     easy: 'Moderate',
//     imageUrl:
//       'https://www.allrecipes.com/thmb/9UTj7kZBJDqory0cdEv_bw6Ef_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-2x1-BG-2976-d5926c9253d3486bbb8a985172604291.jpg',
//     ingredients: [
//       { name: 'pizza dough', quantity: 1, notes: 'store-bought or homemade' },
//       { name: 'pizza sauce', quantity: 200, unit: 'g' },
//       { name: 'shredded mozzarella cheese', quantity: 200, unit: 'g' },
//       {
//         name: 'your favorite toppings',
//         notes: 'such as pepperoni, mushrooms, bell peppers, onions, olives, etc.',
//       },
//     ],
//     instructions: [
//       {
//         number: 1,
//         instruction:
//           'Preheat your oven to the highest temperature (usually around 475°F or 250°C).',
//       },
//       {
//         number: 2,
//         instruction: 'Roll out the pizza dough on a floured surface to your desired thickness.',
//       },
//       {
//         number: 3,
//         instruction:
//           'Transfer the rolled-out dough to a pizza stone or baking sheet lined with parchment paper.',
//       },
//       {
//         number: 4,
//         instruction:
//           'Spread pizza sauce evenly over the dough, leaving a small border around the edges.',
//       },
//       {
//         number: 5,
//         instruction:
//           'Sprinkle shredded mozzarella cheese over the sauce, then add your favorite toppings.',
//       },
//       {
//         number: 6,
//         instruction:
//           'Bake in the preheated oven for 12-15 minutes, or until the crust is golden brown and the cheese is bubbly and melted.',
//       },
//       {
//         number: 7,
//         instruction: 'Remove from the oven and let it cool slightly before slicing and serving.',
//       },
//     ],
//   },
// ];

// export default recipes;
