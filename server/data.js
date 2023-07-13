const mongoose = require('mongoose');
const Perfume = require('./models/perfume');

mongoose.connect('mongodb://localhost:27017/perfumes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  const ingredientList = [{

    name: 'Orchid',
    perfumeName: 'Jo Malone Vanilla & Anise Cologne',
    description: 'A modern story of vanilla. The fragile vanilla orchid forms the perfect counterpoint to the oaky and caramel-rich vanilla bourbon, spiced with star anise. Warm and enveloping.',
    url: 'https://pastlenomad.github.io/Pictures/Vanilla.avif',
    noteUrl: 'https://pastlenomad.github.io/Pictures/Purple_Vanilla_Orchid_Desktop (1).avif',
    heartNoteUrl: 'https://pastlenomad.github.io/Pictures/Vanilla_Bourbon_Desktop.avif',
    baseNoteUrl: 'https://pastlenomad.github.io/Pictures/Star_Anise_Desktop (1).avif'
    }, {
    name: 'Rose',
    perfumeName: 'Diptyque Eau rose - eau de parfum',
    description: 'A new take on the Rose, the Eau Rose Eau de Parfum, reveals a fascinating dimension of the flower more vibrant and exuberant.In this composition, extracts and absolutes of damascena and centifolia roses amplify the flowers’ intensity. Firad rose essence is added to this duo, with its astonishing fruity accents of litchi, and unexpected, yet naturally present, notes: the honeyed accents of camomile, and a singular, green, vegetal accord of artichoke.',
    url: 'https://pastlenomad.github.io/Pictures/Diptyque-rose.png',
    noteUrl: 'https://pastlenomad.github.io/Pictures/Damask_Rose_Desktop.png.avif',
    heartNoteUrl: 'https://pastlenomad.github.io/Pictures/Camomile_Desktop.png',
    baseNoteUrl: 'https://pastlenomad.github.io/Pictures/Red_Roses_Accord_Desktop.avif'
    
  }, {
    name: 'Marigold',
    perfumeName: 'Jo Malone Jasmine Sambac & Marigold Cologne Intense',
    description: 'As dawn rises, coveted buds of jasmine sambac are picked from Tamil Nadus peaceful fields and transported to the bustling flower market. Their potent floralcy contrasts with vibrant marigold, enveloped in the warmth of vanilla and amber. Enticing and opulent.',
    url: 'https://pastlenomad.github.io/Pictures/jo_sku_LGX101_1000x1000_0.png.avif',
    noteUrl: 'https://pastlenomad.github.io/Pictures/Marigold_Desktop.png.avif',
    heartNoteUrl: 'https://pastlenomad.github.io/Pictures/Jasmine_Sambac_Desktop.png.avif',
    baseNoteUrl: 'https://pastlenomad.github.io/Pictures/Benzoin_Resin_Desktop.png.avif'
    
  }, {
    name: 'Mandarin',
    perfumeName: 'Parfums de Marly Paris VALAYA EAU DE PARFUM',
    description: 'Fresh top notes as bergamot, mandarin and sweet white peach, lead to a blend of white flowers, settling on musk and ambrofix sensual base notes.',
    url: 'https://pastlenomad.github.io/Pictures/Valaya-bergamote.png',
    noteUrl: 'https://pastlenomad.github.io/Pictures/Mandarin_Desktop.png.avif',
    heartNoteUrl: 'https://pastlenomad.github.io/Pictures/Clementine_Flower_Desktop.png',
    baseNoteUrl: 'https://pastlenomad.github.io/Pictures/Peach_Desktop.png.avif'
  }, {
    name: 'Achillea',
    perfumeName: 'Jo Malone Wild Achillea Cologne',
    description: 'Golden bundles of wild achillea frame remote ruins alive with nature. Sparkling with bright bergamot entwined with the tangy sting of nettle, the greenness balanced on a base of soft white musk.',
    url: 'https://pastlenomad.github.io/Pictures/jo_sku_LHNW01_1000x1000_0.avif',
    noteUrl: 'https://pastlenomad.github.io/Pictures/Wild_Achillea_Mobile.avif',
    heartNoteUrl: 'https://pastlenomad.github.io/Pictures/Nettle_Mobile.avif',
    baseNoteUrl: 'https://pastlenomad.github.io/Pictures/Vetiver_Mobile.png',
  },{
    name:'Lemon',
    perfumeName: 'Chanel Pris Edimbourg',
    description: 'A powerful burst of freshness with aromatic and woody notes, inspired by the Scottish moors, where Gabrielle Chanel loved to retreat to. A mysterious fragrance, distinguished by the tension between freshness and obscurity.',
    url: 'https://pastlenomad.github.io/Pictures/8837152243742.avif',
    noteUrl: 'https://pastlenomad.github.io/Pictures/Lemon_Desktop.avif',
    heartNoteUrl: 'https://pastlenomad.github.io/Pictures/Cypress_Desktop.avif',
    baseNoteUrl: 'https://pastlenomad.github.io/Pictures/Bergamot_Desktop.avif'
},{
  name: 'Lavender',
  perfumeName: 'Jo Malone Silver Birch & Lavender Cologne',
  description: 'Morning light across a rambling garden, framed by silver birch trees. The air fresh with a crisp coolness that cuts through the scent of English lavender.',
  url: 'https://pastlenomad.github.io/Pictures/jo_sku_LGG901_1000x1000_0.avif',
  noteUrl: 'https://pastlenomad.github.io/Pictures/English_Lavender_Desktop.png',
  heartNoteUrl: 'https://pastlenomad.github.io/Pictures/Grapefruit_Desktop.avif',
  baseNoteUrl: 'https://pastlenomad.github.io/Pictures/Silver_Birch_Desktop.avif'
},{
  name:'Tuberose' ,
  perfumeName: "Diptyque Do Son Eau De Parfum",
  description: "As a child, Yves Coueslant, one of diptyque’s founders, spent his summers in Do Son, in Halong Bay. The sea breeze carried with it the heady, spicy scent of tuberoses. Do Son has the delicateness and persistence of a memory from a childhood in Indochina - a memory of flowers in all their sensual delight with Tuberose, Orange blossom, Jasmine, Amber wood.",
  url: 'https://pastlenomad.github.io/Pictures/Diptyque-tuberose.png',
  noteUrl: 'https://pastlenomad.github.io/Pictures/Tuberose_Desktop.avif',
  heartNoteUrl: 'https://pastlenomad.github.io/Pictures/Clementine_Flower_Desktop.avif',
  baseNoteUrl: 'https://pastlenomad.github.io/Pictures/Jasmine_Sambac_Desktop.avif'
},{

  name:'Patchouli' ,
  perfumeName: 'Coco Noir',
  description: 'A modern ambery fragrance with luminous notes. As a prelude, a vibrant, sophisticated burst dominated by Bergamot sparks the curiosity. Filled with promises, a generous heart gradually reveals the striking sensuality of Rose and the remarkable note of Geranium Rose Leaf. A magnetic trail centred round Patchouli and Tonka Bean keeps the intrigue alive.',
  url: 'https://pastlenomad.github.io/Pictures/9519205842974.webp',
  noteUrl: 'https://pastlenomad.github.io/Pictures/Patchouli.avif',
  heartNoteUrl: 'https://pastlenomad.github.io/Pictures/Red_Roses_Accord_Desktop.avif',
  baseNoteUrl: 'https://pastlenomad.github.io/Pictures/Tonka_Bean_Desktop.avif'
},{
name:'Tonka' ,
perfumeName: "Jo Malone Myrrh and Tonka",
description: "The golden sand dunes of the Namib: home of distinctive myrrh trees. The alluring scent of its resin travelling on the hot air; mingling with the warm almond and lush vanilla notes of the tonka bean. Noble and intoxicating.",
url: 'https://pastlenomad.github.io/Pictures/jo_sku_LGX201_1000x1000_0.avif',
noteUrl: 'https://pastlenomad.github.io/Pictures/Tonka_Bean_Desktop.avif',
heartNoteUrl: 'https://pastlenomad.github.io/Pictures/Omumbiri_Myrrh_Desktop.avif',
baseNoteUrl: 'https://pastlenomad.github.io/Pictures/French_Lavender_Desktop.avif'
}
];
  

try {
    await Perfume.deleteMany(); 

    const createdPerfumes = await Perfume.create(ingredientList);
    console.log('Perfumes created:', createdPerfumes);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
