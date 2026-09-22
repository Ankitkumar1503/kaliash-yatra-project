import { Trip } from "./types";

export const tripsData: Record<string, Trip> = {
  "everest-base-camp-trek": {
    id: "ebc-trek",
    slug: "everest-base-camp-trek",
    title: "Everest Base Camp Trek",
    country: "Nepal",
    region: "Everest Region",
    activity: "Trekking & Mountaineering",
    duration: "14 Days",
    days: 14,
    price: "$1,350",
    originalPrice: "$1,550",
    rating: 4.9,
    reviewCount: 384,
    difficulty: "Challenging",
    maxAltitude: "5,545 m (Kala Patthar)",
    groupSize: "2 – 12 Trekkers",
    badge: "MOST POPULAR",
    heroImage: "/images/destinations/everest.jpg",
    gallery: [
      "/images/destinations/everest.jpg",
      "/images/tours/tour-4.jpg",
      "/images/tours/tour-5.jpg",
      "/images/gallery/gallery-3.jpg",
      "/images/gallery/gallery-4.jpg",
    ],
    overview: [
      "The Everest Base Camp Trek is arguably the world's most renowned high-altitude mountain trek. Following in the footsteps of legendary mountaineers Sir Edmund Hillary and Tenzing Norgay Sherpa, this journey takes you deep into the heart of Sagarmatha National Park.",
      "Traversing suspension bridges spanning raging glacial rivers, ascending through fragrant pine and rhododendron forests, and wandering through traditional Sherpa villages like Namche Bazaar and Dingboche, you will experience an authentic immersion into mountain life.",
      "The grand culmination of the trek is standing at Everest Base Camp (5,364 m) amidst the Khumbu Icefall, followed by an early morning summit of Kala Patthar (5,545 m) for an awe-inspiring, unobstructed sunrise view over Mount Everest.",
    ],
    highlights: [
      "Stand at the iconic Everest Base Camp (5,364 m) beneath the towering Khumbu Icefall",
      "Panoramic 360-degree sunrise view of Everest, Lhotse, and Nuptse from Kala Patthar (5,545 m)",
      "Scenic mountain flight into Lukla's Tenzing-Hillary Airport",
      "Explore Namche Bazaar, the historic trading capital of the Sherpa homeland",
      "Visit ancient Tengboche Monastery with magnificent backdrops of Ama Dablam",
      "Fully guided by certified high-altitude Sherpa trekking leaders with oxygen & safety support",
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: "Arrival in Kathmandu (1,400 m)",
        description:
          "Arrive at Tribhuvan International Airport in Kathmandu. Our representative warmly welcomes you and transfers you to your hotel. Meet your guide for a comprehensive trek briefing.",
        details: { altitude: "1,400 m", trekkingTime: "N/A", accommodation: "3-Star Hotel in Kathmandu" },
      },
      {
        dayNumber: 2,
        title: "Scenic Flight to Lukla (2,860 m) & Trek to Phakding (2,610 m)",
        description:
          "Board an early flight to Lukla. Meet your Sherpa porters and begin an easy downhill hike along the Dudh Koshi River to the riverside settlement of Phakding.",
        details: { altitude: "2,610 m", trekkingTime: "3 – 4 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 3,
        title: "Trek to Namche Bazaar (3,440 m)",
        description:
          "Cross the Hillary Suspension Bridge draped in Buddhist prayer flags, enter Sagarmatha National Park at Monjo, and ascend steadily to the vibrant amphitheater of Namche Bazaar.",
        details: { altitude: "3,440 m", trekkingTime: "5 – 6 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 4,
        title: "Acclimatization Day in Namche Bazaar (Hike to Hotel Everest View)",
        description:
          "Hike up to the Everest View Hotel (3,880 m) for your first panoramic glimpse of Mount Everest, Ama Dablam, and Thamserku. Explore the Sherpa Culture Museum.",
        details: { altitude: "3,880 m", trekkingTime: "3 – 4 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 5,
        title: "Trek to Tengboche (3,860 m)",
        description:
          "Descend to the river at Phungi Thanga before ascending through rhododendron woods to Tengboche Monastery, the spiritual epicenter of the Khumbu.",
        details: { altitude: "3,860 m", trekkingTime: "5 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 6,
        title: "Trek to Dingboche (4,410 m)",
        description:
          "Pass traditional stone mani walls and Chortens through Pangboche village, crossing the tree line into the alpine tundra of Dingboche.",
        details: { altitude: "4,410 m", trekkingTime: "5 – 6 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 7,
        title: "Acclimatization Hike to Nagarjun Hill (5,100 m)",
        description:
          "A crucial acclimatization day hiking to the viewpoint ridge of Nagarjun for breathtaking vistas of Makalu, Lhotse, and Island Peak.",
        details: { altitude: "5,100 m", trekkingTime: "4 – 5 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 8,
        title: "Trek to Lobuche (4,940 m)",
        description:
          "Ascend past the emotional Thokla Pass memorials dedicated to lost climbers, entering the lateral moraine of the Khumbu Glacier.",
        details: { altitude: "4,940 m", trekkingTime: "5 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 9,
        title: "Trek to Gorak Shep (5,164 m) & Hike to Everest Base Camp (5,364 m)",
        description:
          "The monumental day! Trek to Gorak Shep, drop heavy bags, and trek across glacial moraines to stand triumphant at Everest Base Camp.",
        details: { altitude: "5,364 m", trekkingTime: "7 – 8 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 10,
        title: "Sunrise at Kala Patthar (5,545 m) & Descend to Pheriche (4,288 m)",
        description:
          "Pre-dawn climb to Kala Patthar summit for the ultimate sunrise over Mount Everest. Descend down to Pheriche for thicker air and comfortable rest.",
        details: { altitude: "5,545 m", trekkingTime: "6 – 7 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 11,
        title: "Trek Back to Namche Bazaar (3,440 m)",
        description:
          "Re-enter the pine forests with brisk descents, celebrating your achievement with a warm bakery treat in Namche Bazaar.",
        details: { altitude: "3,440 m", trekkingTime: "6 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 12,
        title: "Trek to Lukla (2,860 m)",
        description:
          "Final day on foot following the Dudh Koshi river back to Lukla. Enjoy a farewell celebration dinner with your dedicated Sherpa crew.",
        details: { altitude: "2,860 m", trekkingTime: "6 – 7 hours", accommodation: "Teahouse Lodge" },
      },
      {
        dayNumber: 13,
        title: "Morning Flight to Kathmandu",
        description:
          "Fly back to Kathmandu. Transfer to your hotel for leisure time, souvenir shopping in Thamel, or a soothing Ayurvedic massage.",
        details: { altitude: "1,400 m", trekkingTime: "N/A", accommodation: "3-Star Hotel in Kathmandu" },
      },
      {
        dayNumber: 14,
        title: "Final Departure from Nepal",
        description:
          "Transfer to Tribhuvan International Airport for your flight back home with memories of a lifetime in the Himalayas.",
        details: { altitude: "1,400 m", trekkingTime: "N/A", accommodation: "Departure" },
      },
    ],
    inclusions: [
      "All airport transfers by private vehicle",
      "Round-trip domestic flights between Kathmandu and Lukla including airport tax",
      "3-Star hotel accommodation in Kathmandu on twin-sharing basis with breakfast",
      "Teahouse accommodation during the trek on twin-sharing basis",
      "All meals (Breakfast, Lunch, Dinner) during the 12-day trek",
      "Experienced English-speaking certified Sherpa trekking guide",
      "Porters to carry your luggage (1 porter for every 2 trekkers, max 15kg per person)",
      "Sagarmatha National Park entry permit and Khumbu Pasang Lhamu rural municipality permit",
      "First aid medical kit with oximeter and emergency oxygen cylinder support",
      "All government taxes, VAT, and official service charges",
    ],
    exclusions: [
      "International flights to and from Kathmandu",
      "Nepal entry visa fees ($30 for 15 days, $50 for 30 days)",
      "Comprehensive travel and high-altitude emergency medical/evacuation insurance",
      "Personal trekking equipment (down jacket, sleeping bag available for rent)",
      "Personal expenses such as hot showers, battery charging, Wi-Fi, and bar bills",
      "Tips for trekking guides, assistants, and porters",
    ],
    faqs: [
      {
        question: "How difficult is the Everest Base Camp Trek?",
        answer:
          "The trek is categorized as Challenging due to high altitude and continuous uphill walking over 12 days. However, no technical mountaineering skills or ropes are required. Anyone with a good level of cardiovascular fitness and determination can complete it.",
      },
      {
        question: "How do you handle altitude sickness (AMS)?",
        answer:
          "Our itinerary includes two full acclimatization rest days in Namche Bazaar and Dingboche. Guides monitor blood oxygen saturation twice daily with pulse oximeters and carry supplemental oxygen for emergencies.",
      },
      {
        question: "What is the food and accommodation like on the trail?",
        answer:
          "You will stay in cozy local teahouses with private twin rooms and communal dining halls heated by wood stoves. Meals include fresh Dal Bhat, momos, pasta, soups, eggs, and porridge prepared fresh daily.",
      },
      {
        question: "What is the best season to do this trek?",
        answer:
          "The prime trekking seasons are Autumn (October to November) and Spring (March to May), offering stable clear skies, mild daytime temperatures, and unobstructed views of Everest.",
      },
    ],
  },
  "kailash-mansarovar-yatra": {
    id: "kailash-yatra",
    slug: "kailash-mansarovar-yatra",
    title: "Mount Kailash & Lake Mansarovar Yatra",
    country: "Tibet",
    region: "Ngari (Kailash)",
    activity: "Spiritual & Pilgrimage Yatra",
    duration: "13 Days",
    days: 13,
    price: "$2,450",
    originalPrice: "$2,800",
    rating: 5.0,
    reviewCount: 215,
    difficulty: "Strenuous",
    maxAltitude: "5,630 m (Dolma La Pass)",
    groupSize: "4 – 16 Yatris",
    badge: "SACRED PILGRIMAGE",
    heroImage: "/images/destinations/mount-kailash.jpg",
    gallery: [
      "/images/destinations/mount-kailash.jpg",
      "/images/kailash-1.jpg",
      "/images/kailash-2.jpg",
      "/images/kailash-3.jpg",
      "/images/gallery/gallery-5.jpg",
    ],
    overview: [
      "The Mount Kailash and Lake Mansarovar Yatra is one of the most sacred spiritual pilgrimages on Earth, revered by Hindus as the earthly abode of Lord Shiva, by Buddhists as Mount Meru, and by Jains and Bons.",
      "Journeying across the high Tibetan plateau past sacred turquoise lakes and nomadic yaks, yatris complete the holy circumambulation (Kora) around Mount Kailash, culminating at the high Dolma La Pass (5,630 m) and the jewel-like Gauri Kund.",
      "Complete with holy dips and puja ceremonies on the shores of Lake Mansarovar, this journey offers an incomparable spiritual purification and inner awakening.",
    ],
    highlights: [
      "Complete the 52 km sacred Parikrama (Kora) around holy Mount Kailash",
      "Holy dip and puja rituals at the crystal waters of sacred Lake Mansarovar (4,590 m)",
      "Traverse the sacred Dolma La Pass (5,630 m) and view Gauri Kund (Lake of Compassion)",
      "Explore historic Tibetan monasteries including Chiu Gompa and Dirapuk",
      "Full group medical support with Tibetan guides, Sherpa cooks, and high-altitude emergency team",
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: "Arrival in Kathmandu & Temple Visit",
        description:
          "Arrive in Kathmandu. Transfer to hotel and visit the sacred Pashupatinath Temple for an evening Aarti ceremony.",
        details: { altitude: "1,400 m", accommodation: "5-Star Hotel in Kathmandu" },
      },
      {
        dayNumber: 2,
        title: "Kathmandu Valley Sightseeing & Visa Formalities",
        description:
          "Visit sacred Jal Narayan (Budhanilkantha) and Guhyeshwari Shaktipeeth. Final briefing and gear inspection.",
        details: { altitude: "1,400 m", accommodation: "5-Star Hotel in Kathmandu" },
      },
      {
        dayNumber: 3,
        title: "Drive from Kathmandu to Kyirong Border (2,700 m)",
        description:
          "Drive along scenic mountain highways to the Nepal-Tibet border at Rasuwagadhi/Kyirong.",
        details: { altitude: "2,700 m", accommodation: "Guesthouse in Kyirong" },
      },
      {
        dayNumber: 4,
        title: "Acclimatization Day in Kyirong",
        description:
          "Rest day for essential altitude acclimatization in the tranquil Kyirong valley.",
        details: { altitude: "2,700 m", accommodation: "Guesthouse in Kyirong" },
      },
      {
        dayNumber: 5,
        title: "Drive to Saga (4,450 m) Crossing Brahmaputra River",
        description:
          "Ascend onto the Tibetan plateau crossing scenic high passes and the mighty Yarlung Tsangpo (Brahmaputra).",
        details: { altitude: "4,450 m", accommodation: "Standard Hotel in Saga" },
      },
      {
        dayNumber: 6,
        title: "Drive from Saga to Sacred Lake Mansarovar (4,590 m)",
        description:
          "First breathtaking glimpse of Mount Kailash and Lake Mansarovar. Perform holy dip, Havana and evening prayers.",
        details: { altitude: "4,590 m", accommodation: "Guesthouse near Lake Mansarovar" },
      },
      {
        dayNumber: 7,
        title: "Mansarovar Puja & Drive to Darchen (4,670 m)",
        description:
          "Morning spiritual ceremonies at Mansarovar. Short drive to Darchen, the starting base for the Kailash Parikrama.",
        details: { altitude: "4,670 m", accommodation: "Hotel in Darchen" },
      },
      {
        dayNumber: 8,
        title: "Kora Day 1: Trek from Yamadwar to Dirapuk (4,920 m)",
        description:
          "Enter Yamadwar (Gate of the God of Death) and begin the sacred 12 km trek with close-up views of Kailash North Face.",
        details: { altitude: "4,920 m", trekkingTime: "5 – 6 hours", accommodation: "Dirapuk Guesthouse" },
      },
      {
        dayNumber: 9,
        title: "Kora Day 2: Trek Over Dolma La Pass (5,630 m) to Zuthulpuk (4,790 m)",
        description:
          "The toughest spiritual test! Climb to Dolma La Pass, receive blessings, pass holy Gauri Kund, and descend to Zuthulpuk.",
        details: { altitude: "5,630 m", trekkingTime: "8 – 9 hours", accommodation: "Zuthulpuk Guesthouse" },
      },
      {
        dayNumber: 10,
        title: "Kora Day 3: Complete Parikrama & Drive to Saga",
        description:
          "Gentle 3-hour walk to complete the 52 km sacred circuit. Reunite with vehicles and drive back to Saga.",
        details: { altitude: "4,450 m", accommodation: "Hotel in Saga" },
      },
      {
        dayNumber: 11,
        title: "Drive from Saga to Kyirong Border",
        description:
          "Return drive through dramatic Himalayan canyons back to Kyirong town.",
        details: { altitude: "2,700 m", accommodation: "Guesthouse in Kyirong" },
      },
      {
        dayNumber: 12,
        title: "Border Formalities & Drive back to Kathmandu",
        description:
          "Cross the border back into Nepal and drive through scenic river valleys to Kathmandu. Farewell dinner celebration.",
        details: { altitude: "1,400 m", accommodation: "5-Star Hotel in Kathmandu" },
      },
      {
        dayNumber: 13,
        title: "Final Departure",
        description:
          "Transfer to Kathmandu International Airport with blessed memories of Mount Kailash.",
        details: { altitude: "1,400 m", accommodation: "Departure" },
      },
    ],
    inclusions: [
      "All Tibet travel permits, Tibet Alien Travel Permit, and China Group Visa",
      "Full accommodation in Kathmandu, Kyirong, Saga, Mansarovar and during Kora",
      "Pure vegetarian meals prepared fresh by our dedicated Sherpa culinary crew",
      "Experienced Tibetan tour guide and Sherpa pilgrimage managers",
      "Oxygen cylinders, gamow bag, pulse oximeters, and medical first aid kits",
      "Duffle bags, warm down jackets, and certificate of completion for all Yatris",
    ],
    exclusions: [
      "International flights to Kathmandu",
      "Nepal entry visa fee",
      "Horse / pony and personal helper charges for Kailash Parikrama (approx $450 - $550 if required)",
      "Personal expenses, telephone, and laundry",
      "Travel insurance with emergency evacuation coverage",
    ],
    faqs: [
      {
        question: "Can seniors and beginners undertake the Kailash Yatra?",
        answer:
          "Yes. For yatris who prefer not to walk the 52 km Parikrama, ponies and local horse helpers can be arranged, or yatris can perform rituals at Lake Mansarovar and Darchen while resting comfortably.",
      },
      {
        question: "What permits are required for Tibet and Mount Kailash?",
        answer:
          "All Tibet permits, military permits, and China group visas are fully processed and provided by our team. We handle all paperwork seamlessly.",
      },
    ],
  },
  "annapurna-circuit-trek": {
    id: "annapurna-circuit",
    slug: "annapurna-circuit-trek",
    title: "Annapurna Circuit Trek",
    country: "Nepal",
    region: "Annapurna Region",
    activity: "Trekking & Mountaineering",
    duration: "16 Days",
    days: 16,
    price: "$1,150",
    originalPrice: "$1,350",
    rating: 4.8,
    reviewCount: 290,
    difficulty: "Challenging",
    maxAltitude: "5,416 m (Thorong La Pass)",
    groupSize: "2 – 12 Trekkers",
    badge: "CLASSIC TREK",
    heroImage: "/images/destinations/pokhara.jpg",
    gallery: [
      "/images/destinations/pokhara.jpg",
      "/images/gallery/gallery-2.jpg",
      "/images/blogs/blog-gotravel-2.jpg",
      "/images/blogs/blog-gotravel-4.jpg",
      "/images/adventures/adv-2.jpg",
    ],
    overview: [
      "The Annapurna Circuit is widely celebrated as one of the world's most ecologically diverse treks. Circling the massive Annapurna massif, the trail transitions from lush terraced hillsides to Tibetan-style desert valleys of Lower Mustang.",
      "The pinnacle of the route is crossing Thorong La Pass at 5,416 meters, followed by the sacred pilgrim oasis of Muktinath and the charming cobbled village of Marpha known for apple orchards.",
    ],
    highlights: [
      "Conquer the thrilling Thorong La Pass (5,416 m)",
      "Visit Muktinath Temple, holy to both Hindus and Buddhists",
      "Experience Tibetan Buddhist culture in ancient Manang village",
      "Relax on the tranquil shores of Phewa Lake in Pokhara after the trek",
    ],
    itinerary: [
      { dayNumber: 1, title: "Arrival in Kathmandu", description: "Meet and greet at the airport, transfer to hotel." },
      { dayNumber: 2, title: "Drive to Besisahar & Dharapani (1,860 m)", description: "Scenic mountain drive along the Trishuli and Marsyangdi rivers." },
      { dayNumber: 3, title: "Trek to Chame (2,670 m)", description: "Enter pine and fir forests with towering views of Lamjung Himal." },
      { dayNumber: 4, title: "Trek to Pisang (3,200 m)", description: "Walk beneath the dramatic rock wall of Paungda Danda." },
      { dayNumber: 5, title: "Trek to Manang (3,540 m)", description: "Traverse the scenic upper trail via Ghyaru and Ngawal." },
      { dayNumber: 6, title: "Acclimatization in Manang", description: "Visit Gangapurna Lake and Milarepa's meditation cave." },
      { dayNumber: 7, title: "Trek to Yak Kharka (4,050 m)", description: "Ascend past alpine pastures grazing yaks." },
      { dayNumber: 8, title: "Trek to Thorong Phedi (4,450 m)", description: "Base of the high pass with dramatic barren slopes." },
      { dayNumber: 9, title: "Cross Thorong La Pass (5,416 m) to Muktinath (3,760 m)", description: "The crown jewel pass crossing with exhilarating vistas." },
      { dayNumber: 10, title: "Trek to Marpha via Jomsom", description: "Descend into the Kali Gandaki valley and traditional stone villages." },
      { dayNumber: 11, title: "Drive to Tatopani Hot Springs", description: "Relax your muscles in natural thermal pools." },
      { dayNumber: 12, title: "Trek to Ghorepani (2,860 m)", description: "Climb through rhododendron forests." },
      { dayNumber: 13, title: "Sunrise at Poon Hill & Trek to Tikhedhunga", description: "Spectacular sunrise over Dhaulagiri and Annapurna ranges." },
      { dayNumber: 14, title: "Trek to Nayapul & Drive to Pokhara", description: "Complete the trek and enjoy lakeside Pokhara." },
      { dayNumber: 15, title: "Drive or Fly to Kathmandu", description: "Return to Kathmandu for farewell celebration." },
      { dayNumber: 16, title: "Departure", description: "Transfer to airport for your onward journey." },
    ],
    inclusions: [
      "ACAP and TIMS trekking permits",
      "Certified trekking guide and porter support",
      "Teahouse accommodation and full board on trek",
      "Kathmandu and Pokhara hotel stays",
    ],
    exclusions: ["International airfare", "Travel insurance", "Personal drinks and snacks"],
    faqs: [
      {
        question: "When is the best time for the Annapurna Circuit?",
        answer: "March to May and October to November provide the best weather and clearest mountain views.",
      },
    ],
  },
  "bhutan-cultural-odyssey": {
    id: "bhutan-odyssey",
    slug: "bhutan-cultural-odyssey",
    title: "Bhutan Cultural Odyssey & Tiger's Nest",
    country: "Bhutan",
    region: "Paro & Thimphu",
    activity: "Cultural & Heritage Tours",
    duration: "7 Days",
    days: 7,
    price: "$1,890",
    rating: 4.9,
    reviewCount: 142,
    difficulty: "Easy",
    maxAltitude: "3,120 m (Tiger's Nest)",
    groupSize: "2 – 10 Travelers",
    badge: "EXCLUSIVE",
    heroImage: "/images/gallery/gallery-2.jpg",
    gallery: [
      "/images/gallery/gallery-2.jpg",
      "/images/blogs/blog-2.jpg",
      "/images/destinations/kathmandu.jpg",
    ],
    overview: [
      "Experience the enchanted Kingdom of Bhutan, where Gross National Happiness is prioritized over material wealth. Discover sacred cliff-hanging monasteries, majestic Dzongs, and serene pine valleys.",
    ],
    highlights: [
      "Hike to the legendary cliffside Taktsang (Tiger's Nest) Monastery in Paro",
      "Visit Punakha Dzong, the most beautiful fortress in Bhutan at the confluence of two rivers",
      "Explore Thimphu, the world's only national capital without a single traffic light",
      "All-inclusive luxury Bhutanese hospitality with certified cultural guides",
    ],
    itinerary: [
      { dayNumber: 1, title: "Arrival in Paro & Drive to Thimphu", description: "Spectacular landing in Paro valley and scenic drive to Thimphu." },
      { dayNumber: 2, title: "Thimphu Valley Heritage & Culture", description: "Visit Buddha Dordenma, National Memorial Chorten, and folk heritage museums." },
      { dayNumber: 3, title: "Dochula Pass & Punakha Valley", description: "Cross Dochula Pass (3,100 m) with 108 memorial chortens and visit Punakha Dzong." },
      { dayNumber: 4, title: "Punakha to Paro Valley", description: "Scenic drive back to Paro with visits to historic fortress watchtowers." },
      { dayNumber: 5, title: "Pilgrimage Hike to Tiger's Nest (Taktsang)", description: "Ascend to the breathtaking monastery clinging to a 900-meter granite cliff." },
      { dayNumber: 6, title: "Paro Cultural Exploration", description: "Visit Kyichu Lhakhang, one of Bhutan's oldest 7th-century shrines." },
      { dayNumber: 7, title: "Departure from Paro", description: "Transfer to airport for your onward flight." },
    ],
    inclusions: [
      "Bhutan Government Sustainable Development Fee (SDF)",
      "Bhutan tourist visa processing",
      "Full board 3-Star/4-Star deluxe hotels",
      "Dedicated licensed Bhutanese guide and private vehicle",
    ],
    exclusions: ["International airfare to Paro", "Personal tips and purchases"],
    faqs: [
      {
        question: "Is Bhutan visa included?",
        answer: "Yes, our team arranges all visa approvals and covers the official Sustainable Development Fee.",
      },
    ],
  },
};
