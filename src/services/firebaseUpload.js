// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAClHIKN8mXlMLU7UJBDRDuJdJq_Ahql1g",
  authDomain: "plant-recommendation-2234c.firebaseapp.com",
  projectId: "plant-recommendation-2234c",
  storageBucket: "plant-recommendation-2234c.appspot.com",
  messagingSenderId: "318199517285",
  appId: "1:318199517285:web:ebf3d5c35460cb05f2b68c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);



let data=[ 

    
  {
  name: "Wheat",
  details:{
      title:"WHEAT (GODHUMAI)",
      scientificName : "Triticum aestivum",
      native:"It generally grows in Theni, Dindigul, Karur, Coimbatore, Erode, Salem, Dharmapuri, Vellore, Thiruvannamalai, Kancheepuram.",
      origin:" It is originated from Ethopian Highlands.",
      soilType:"Soils with a clay loam or loam texture, good structure and moderate water holding capacity are ideal for wheat cultivation.",
      nutrientValue:"Apply NPK fertiliser as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 80:40:40 NPK kg/ha.Apply NPK fertiliser as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 80:40:40 NPK kg/ha.Apply half of N and full dose of P2O and K2O5 basally before sowing and incorporate in the sowing line.",
      growthTime:"Wheat is planted in the fall, usually between October and December, and grows over the winter to be harvested in the spring or early summer. Typically, it takes about 7 to 8 months to reach maturity and it creates pretty golden contrast in spring gardens.",
      potentialDiseases:['Powdery mildew, Loose Smut, Brown rust, Stripe rust/ Yellow rust, Black rust, Flag smut, Hill bunt or Stinking smut, Kamal bunt, Leaf curl, Foot rot, Head scab/ Fusarium leaf blotch (Snow Mould), Leaf Blotch,Helminthosporium leaf blotch (Spot Blotch),Seedling blight, IPM for Wheat.'],
      phenotypicOutput:"Wheat leaves form at each node and include a leaf sheath that wraps around the stem and a leaf blade. Wheat has small auricles. These wrap around the stem at the point where the leaf sheath meets the leaf blade. The spike (also called the ear or head) forms at the top of the plant",
      cultivationStyle:"The wheat crop requires a well-pulverized but compact seed bed for good and uniform germination. Three or four ploughings in the summer, repeated harrowing in the rainy season, followed by three or four cultivations and planking immediately before sowing produce a good, firm seed bed for the dry crop on alluvial soils."
  }
},


{
  name: "Tomato",
  details:{
      title:"Tomato",
      scientificName : "Solanum lycopersicum",
      native:"It usually grows in Krishnagiri, Dharmapuri, Salem, Tiruppur, Theni, Dindigul, Namakkal, Nagapattinam, Ranipet, Thenkasi.",
      origin:"It originated from South America.",
      soilType:" It grows in well drained loamy soils rich in organic matter with a pH range of 6.5-7.5.",
      nutrientValue:"The nutrient requirement for hybrids is 200:250:250 kg of NPK per ha. 75 % of P (187.5 kg P which comes to 1172 kg of superphosphate) is applied as basal. The remaining quantity of 200:62.5:250 kg of NPK per ha is applied through fertigation.",
      growthTime:"Tomato seeds are commonly planted indoors as early as 8 to 6 weeks before the average date of the last spring frost.Tomato seedlings are usually transplanted into the garden 1-3 weeks after the last frost.Early-season tomatoes require 50-60 days to reach harvest from transplanting.Mid-season tomatoes require 60-80 days. Late-season tomatoes require 80 or more days.",
      potentialDiseases:['Damping off, Fusarial wilt, Leaf curl, Tomato spotted wilt disease, Peanut bud necrosis virus,Leaf spot'],
      phenotypicOutput:"Fruit of tomato (Solanum lycopersicum) are diverse in size and shape, ranging from small and round to large and variably shaped. A prevalent morphological feature distinguishing many cultivated varieties from undomesticated accessions is an elongated fruit shape.",
      cultivationStyle:"Tomato is a warm season crop, it requires a warm and cool climate. The plant cannot withstand frost and high humidity. Light intensity affects pigmentation, fruit colour, and fruit set. The plant is highly affected by adverse climatic conditions. It requires different climatic ranges for seed germination, seedling growth, flower and fruit set, and fruit quality. Temperature below 10C and above 38C adversely affects plant tissues."
  }
},
{
  name: "Chilli",
  details:{
      title:"Chilli (MILAGAI)",
      scientificName : "Capsicum annum",
      native:"It grows in Kancheepuram, Karur, Theni, Perambalur, Tirunelveli, Thoothukudi, Nagapattinam, Krishnagiri, Namakkal, Pudukottai, Dharmapuri, Ramanathapuram, Sivagangai, Ariyalur, Ranipet and Mayiladuthurai.",
      origin:"It originated in Bolivia.",
      soilType:"It grows best in well drained loamy soils rich in organic matter with a ph range 6.5-7.5.",
      nutrientValue:"Apply NPK fertilizer as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 01:02:01 NPK kg/ha.",
      growthTime:"Your chillies are ready to harvest in 80 to 90 days. You can harvest green chillies once they have grown completely. It can be grown from January – February, June-July, September-October.",
      potentialDiseases:['Damping off, Fruit rot and Die back, Powdery mildew, Fusarium wilt, Cercospora leaf spot,Leaf curl,Bacterial leaf spot'],
      phenotypicOutput:"Chilli plant is a highly branched herbaceous plant having height ranging from 50-100 cm. Branching mainly depends on cultivar, soil fertility, soil moisture and season. High branching is preferred in chilli for easy picking of fruits and for effective inter cultivation and to prevent rotting of fruits.",
      cultivationStyle:" Chilli can be grown in all types of soft but the sandy-loam, clay loam and loam soils are best suited for it, the spoil must be well drained and well aerated."
  }
},
{
  name: "Black Pepper",
  details:{
      title:"Black Pepper (MILAGU)",
      scientificName : "Piper Nigrum",
      native:"This crop is majorly cultivated in Kollimalai, Namakkal, Kanyakumari ,Nilgiris.",
      origin:"It originates from MALABAR COAST OF INDIA.",
      soilType:"Black pepper can be grown in a wide range of soils with a pH of 5.5 to 6.5, though in its natural habitat it thrives well in red laterite soils.Thrives best on virgin soils rich in humus content and the crop can be grown at elevations up to 1500 m.",
      nutrientValue:"Apply NPK fertilizer as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 01:01:03 NPK kg/ha.",
      growthTime:"Harvesting Black pepper takes about 7 - 8 months after flowering to reach full maturity. In India the crop is harvested during December – January in plains and January - April in the high ranges of Western Ghats.",
      potentialDiseases:['Damping off, Fruit rot and Die back, Powdery mildew, Fusarium wilt, Cercospora leaf spot, Basal wilt, Foot rot /quick wilt disease, Slow decline /slow wilt, Leaf rot and blight,Phyllody disease,Stunt disease, Pollu disease /anthracnose,IPM for Black Pepper'],
      phenotypicOutput:"Height may reach upto 10m by using its aerial roots. Each slender spike has 40-50 blossoms of the small flowers. Their appearance changes to yellowish-red upon maturity, at that time, it bears a single seed. It has drupe fruit which is called peppercorn having a diameter equal to 5mm.",
      cultivationStyle:"Pepper is grown as monocrop as well as a mixed crop. Large scale cultivation of pepper as monocrop is done on hill slopes by clearing jungle lands and planting standards for the vines to climb on. As a mixed crop, it is grown with arecanut, coconut, mango, jack etc. where these trees serve as standards for the pepper vines. Pepper is also a suitable intercrop in coffee estates where the shade trees are good standards for them."
  }
},
{
  name: "Bellary Onion",
  details:{
      title:"Bellary Onion (PERIYA VENGAYAM)",
      scientificName : "Allium Cepa",
      native:"This crop is majorly cultivated in Dindigul, Tiruppur ,Perambalur ,Trichy ,Namakkal, Thoothukudi, Dharmapuri, Ramanathapuram, Ariyalur, Thenkasi.",
      origin:"It originates from CENTRAL ASIA",
      soilType:"Onion can be grown in all types of soils such as sandy loam, clay loam, silt loam and heavy soils. However, the best soil for successful onion cultivation is deep, friable loam and alluvial soils with good drainage, moisture holding capacity and sufficient organic matter. Red loam to black soils with good drainage facilities is highly preferred for bellary onion cultivation.",
      nutrientValue:"Apply NPK fertiliser as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 02:02:01 NPK kg/ha.",
      growthTime:"The onion is a hardy cool-season biennial but usually grown as an annual crop. The onion has narrow, hollow leaves and a base which enlarges to form a bulb. The bulb can be white, yellow, or red and require 80 to 150 days to reach harvest.",
      potentialDiseases:['Botrytis Leaf Blight, Purple Blotch, Downy Mildew, Neck Rot, Onion Smut,Bacterial Soft Rot'],
      phenotypicOutput:"The onion plant has a fan of hollow, bluish-green leaves and its bulb at the base of the plant begins to swell when a certain day-length is reached. The bulbs are composed of shortened, compressed, underground stems surrounded by fleshy modified scale (leaves) that envelop a central bud at the tip of the stem.",
      cultivationStyle:"Farmers and gardeners can grow onions from seeds or from bulbs. If they plant seeds, they must later pull out most of the young plants so the rest can grow better. This is called 'thinning.' A different way to plant onions is to plant young bulbs. This is faster, but the onions that grow this way are weaker than the onions that started as seeds."
  }
},
{
  name: "Bottle Gourd",
  details:{
      title:"Bottle Gourd (Sorakkai)",
      scientificName : "Lagenaria Siceraria",
      native:"This crop is majorly cultivated in Coimbatore, Trichy, Tiruppur, Krishnagiri, Vellore, Dharmapuri, Thiruvannamalai, Kancheepuram and Ranipet.",
      origin:"It originates from TROPICAL AFRICA",
      soilType:"Sandy loam soils rich in organic matter with good drainage and the pH ranges from 6.5 to 7.5 is suited for bottle gourd cultivation. This crop requires a moderate warm temperature",
      nutrientValue:"Apply NPK fertilizer as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 6:12:12 NPK kg/ha.",
      growthTime:"Summer and monsoon are the best time to plant seeds. Buy bottle gourd seeds online. Seeds are sown directly in small pits or on raised beds which germinate in 7-8 days.Your plant should start flowering within 25-30 days of planting. Bottle gourd produces white flowers, about 4 inches in diameter. Bottle gourds should appear within 40-50 days of planting.",
      potentialDiseases:['Downy mildew, Damping off and root rots, Gummy stem blight (also known as black rot or alligator skin), Fusarium wilt, Phytophthora blight, Septoria leaf spot,Cucumber mosaic virus,Bacterial wilt, Angular leaf spot,Pollu disease /anthracnose.'],
      phenotypicOutput:"The bottle gourd is a vigorous, annual, running or climbing vine with large leaves and a lush appearance. It grows fast and may begin to flower only 2 months after seeding. The thick stem is furrowed longitudinally. The vine is branched and climbs by means of tendrils along the stem.",
      cultivationStyle:"The vegetable seed is sown by dibbling method at a spacing of 2 m to 3 X 1.0 m to 1.5 m. Generally, two to three seeds are sown in a pit at 2.5 cm to 3.0 cm depth.Two to three hoeing is given to control the weeds during the early stage of bottle gourd growth. The monsoon or rainy season crop is normally stalked, often trained on a bower made of bamboo and sticks."
  }
},
{
  name: "Garlic",
  details:{
      title:"Garlic (Poondu)",
      scientificName : "Allium Sativum",
      native:"It is mainly cultivated in Dindigul, Erode,Nilgiri.",
      origin:"It originates from West China, around Tien Shan Mountains to Kazakhstan and Kyrgyzstan.",
      soilType:"Garlic requires well drained loamy soils, rich in humus, with fairly good content of potash. The crop raised on sandy or loose soil does soils, the bulbs produced are deformed and during harvesting, many bulbs are broken and bruised and so they do not keep well in storage.",
      nutrientValue:"Apply NPK fertilizer as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 08:03:02 NPK kg/ha.",
      growthTime:"Garlic is most often planted in the fall (between late September and November) and harvested in the following summer (between June and August). In areas that get a hard frost, plant garlic cloves 6 to 8 weeks before the first fall frost date, before the ground freezes.",
      potentialDiseases:['Macrophomina rot, Pink root, Aspergillus rot, Mosaic.'],
      phenotypicOutput:"Garlic plants grow about 60 cm (2 feet) tall. Depending on the variety, the long leaves typically arise from a short hard stem above the bulb or emerge from a softer pseudostem made up of overlapping leaf sheaths. The bulb is covered with membranous skin and encloses up to 20 edible bulblets called cloves.",
      cultivationStyle:"Plough the land to a fine tilth and form ridges and furrows at 30 cm spacing or beds of convenient sizes. Cloves are planted at 15 x 10 cm spacing.Irrigate before and after planting; life irrigation is given on third day of planting and at weekly intervals of time.During last ploughing incorporate 50 t/ha of FYM; Apply Azospirillum 2 kg and Phosphobacteria 2 kg/ha, 40:75:75 kg/ha NPK, 50 MgSO4 and 1 ton neem cake as basal and N 35 kg/ha at 45 days after planting."
  }
},
{
  name: "Mango",
  details:{
      title:"Mango (Mampazham)",
      scientificName : "Mangifera indica",
      native:"This crop is cultivated mainly in Krishnagiri, Dharmapuri, Dindigul, Vellore, Nagapattinam,Tiruvallur, Namakkal, Pudukottai, Ramanathapuram, Sivagangai, Theni, Ariyalur, Tirunelveli, Ranipet, Thenkasi and Mayiladuthurai districts.",
      origin:"India",
      soilType:"Mango grows well on a wide variety of soils, such as lateritic, alluvial, sandy loam and sandy. The loamy, alluvial, well-drained, aerated and deep soils (2-2.5 m) rich in organic matter with a pH range of 5.5-7.5 are ideal for mango cultivation.",
      nutrientValue:"Apply NPK fertilizer as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 02:02:03 NPK kg/ha.",
      growthTime:"Planted from seed, a mango tree requires five to eight years before it will bear fruit; a nursery sapling should produce fruit in about four years. The mango fruit takes three to five months to ripen after the tree has flowered.",
      potentialDiseases:['Damping off, Die back, Powdery mildew, Phoma blight, Red rust, Sooty mold, Mango malformation, Gummosis, Root rot, Scab, Postharvest diseases,Bacterial canker,Pollu disease /anthracnose.'],
      phenotypicOutput:"The mango tree is an evergreen tree of varying size and shape. It has a deep taproot and profuse surface roots (Litz, 2009), a stout trunk (90 cm in diameter) and an umbrella-shaped crown that may reach 20-40 m high.",
      cultivationStyle:"Land should be prepared by deep ploughing followed by harrowing and levelling with a gentle slope for good drainage. Spacing varies from 10 m x 10 m, in the dry zones where growth is less, to 12 m x 12 m, in heavy rainfall areas and rich soils where abundant vegetative growth occurs. New dwarf hybrids like Amrapali can be planted at closer spacing of 5m X 5m. Pits are filled with original soil mixed with 20-25 kg well rotten FYM, 2.5 kg single super phosphate and 1 kg muriate of potash."
  }
},
{
  name: "Cotton",
  details:{
      title:"Cotton (Parutthi)",
      scientificName : "Gossypium",
      native:"The major cultivation of this crop is done in Coimbatore, Madurai, Ramanathapuram, Trichy, Salem, Chennai, Cuddalore, Virudhunagar, Dharmapuri, Theni, Thirunalveli, Tirupattur and Ranipet.",
      origin:"Nile River",
      soilType:"soil types suitable for cotton cultivation are alluvial, clayey and red sandy loam.",
      nutrientValue:" If soil test recommendations are not available, follow the blanket recommendation of 120:60:60 NPK kg/ha.Apply 50 percent of N and K full dose of P2O5 as basal and remaining ½ N and K at 40 – 45 DAS for varieties.  For hybrids apply N in three splits viz., basal, 45 and 65 DAS.Apply the fertilizers in a band, two-thirds of the distance from the top of the ridge and incorporate.",
      growthTime:"Cotton attains its full length in about 25 days after fertilization with the maximum growth rate occurring during the first 10 to 15 days of this period.  Thickening of the cotton begins at about 16 days after fertilization and continues until the boll is mature. Sowings in Tamil Nadu are done during February-March -Flower to Open Boll: 45 to 65 days, -Planting to First Flower: 60 to 70 days, -Planting to Emergence: 4 to 9 days.",
      potentialDiseases:['Fusarium Wilt, Verticillium wilt, Root rot, Gray of Areolate mildew, Boll rot, Alternaria leaf blight, Myrothecium leaf spot, Cercospora Leaf spot,Tobacco Streak Virus,Bacterial Blight.'],
      phenotypicOutput:"It is a sub-shrub, 1 to 1.5 m tall, its stem thick and rigid and leaves horizontally placed. Leaves and twigs are sparsely hairy and rarely glabrous. Fruit or boll is rounded, beaked 3 or 4 lobular with 11 to 10 seeds per loculus. Seeds have short fuzz and lint.",
      cultivationStyle:"Tamil Nadu traditionally grows cotton in an area of about 0.2m hectares and produces about 0.6 million bales of cotton and because of its climate and soil, the State is ideally suited for producing long and extra-long staple cottons."
  }
},
{
  name: "Maize",
  details:{
      title:"Maize (Solam)",
      scientificName : "Zea Mays",
      native:"This crop is majorly cultivated in Salem, Dindigul, Namakkal, Pudukkottai, Tiruppur,Villupuram,Perambalur,Dharmapuri,Ariyalur,Chennai,cuddalore,Virudhunagar,Krishnagiri,Thoothukudi,Nagapattinam,Ramanathapuram,Theni,Tirunelveli,Kallakurichi,Thenkasi,Tirupattur and Ranipet.",
      origin:"This crop has its origin from Mexico.",
      soilType:"Deep fertile soils rich in organic matter and well-drained soils are the most preferred ones however maize can be grown on a variety of soils. Loam or silt loam surface soil and brown silt clay loam having fairly permeable sub soil are the ideal soil types.",
      nutrientValue:"Apply NPK fertilizer as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 153:62.5:50 NPK kg/ha.",
      growthTime:"Hybrids of maize mature within 90-110 days. Plants may remain green when cobs are dry & ready for harvest. Therefore, do not wait for stalks to dry up for harvesting, this is desirable as such plants can be used as fodder.",
      potentialDiseases:[' Maydis leaf blight (MLB)/ Southern Corn Leaf Blight (SCLB), Turcicum leaf blight (TLB)/ Northern Corn Leaf Blight (NCLB), Curvularia leaf spot, Banded leaf and sheath blight, Charcoal rot, Fusarium stalk rot, Bacterial stalk rot, Common rust, Polysora rust.'],
      phenotypicOutput:"Maize is a tall, determinate, annual C4 plant varying in height from 1 to 4 metres producing large, narrow, opposing leaves, borne alternately along the length of a solid stem.",
      cultivationStyle:"Maize is sown in rows, 60-75 cm apart, whereas the plants in the row are spaced at 20 to 25 cm. A population of 60-75 thousand plants per hectare at harvest are required for obtaining the optimum yield. Sowing in rows is generally done with drill or by dropping the seed behind the plough."
  }
},
{
  name: "Sugarcane",
  details:{
      title:"Sugarcane (Karumbu)",
      scientificName : "Saccharum officinarum",
      native:"This crop is majorly cultivated in Trichy, Perambalur, Karur, Salem, Namakkal, Coimbatore, Chennai, Vellore, Tiruvallur, Cuddalore, Krishnagiri, Pudukottai, Nagapattinam, Dharmapuri, Sivagangai, Theni, Ariyalur, Tirunelveli, Kallakurichi, Ranipet, Chengalpattu and Tirupattur.",
      origin:"Sugar cane originated in New Guinea.",
      soilType:"Sugarcane is grown in various kinds of soils, such as red volcanic soils and alluvial soils of rivers. The ideal soil is a mixture of sand, silt, and clay particles, with a measure of organic material. The land is ploughed and left to weather for a time before subsoiling (stirring up the subsoil) is carried out.",
      nutrientValue:"Apply NPK fertilizer as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 05:05:02 NPK kg/ha.",
      growthTime:"In India planting Seasons of Sugarcane in subtropical regions are September to October (Autumn) and February to March (spring), whereas in tropical regions it is June to August (Adsali) and January to February and October to November (Eksali).The lowest temperature for good cane-plant growth is about 20 °C (68 °F).",
      potentialDiseases:['Smut, Rust, Red rot,Yellow leaf disease,Wilt, Ratoon stunting.'],
      phenotypicOutput:"Sugarcane is a tall perennial plant growing erect even up to 5 or 6 metres. The plant is composed of four principal parts, the root system, the stalk, the leaves and the inflorescence.",
      cultivationStyle:"Sugarcane is propagated primarily by the planting of cuttings. The sections of the stalk of immature cane used for planting are known as seed cane, or cane sets, and have two or more buds (eyes), usually three. Seed cane is planted in well-worked fields. Mechanical planters that open the furrow, fertilize, drop the seed cane, and cover it with soil are widely used."
  }
},

]
// Add a new document with a generated id.
//  const t=async()=>{
    // data.map(async(i)=>  await addDoc(collection(db, i.name), i.details))
// }
// t();


