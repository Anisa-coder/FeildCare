import { FlaskConical, Droplets, Sparkles, AlertTriangle, ArrowRight, Check } from 'lucide-react';

const recipes = [
  {
    title: 'Recipe 1: Potassium Bicarbonate & Castile Soap Spray',
    badge: 'Organic Rapid Knockdown',
    difficulty: 'Easy (5 mins)',
    ingredients: [
      '1 Tablespoon Potassium Bicarbonate (or pure Food-Grade Baking Soda)',
      '1 Teaspoon Pure Liquid Castile Soap or Horticultural Oil (emulsifier)',
      '1 Gallon (3.8 Liters) Clean, lukewarm water',
    ],
    steps: [
      'In a small bowl, thoroughly mix the castile soap with the potassium bicarbonate to form a smooth paste.',
      'Pour the mixture into your sprayer container and fill with 1 gallon of lukewarm water.',
      'Shake vigorously for 60 seconds until completely dissolved with no sediment residue.',
      'Spray evenly over both upper and lower leaf surfaces until dripping wet.',
    ],
    applicationTip: 'Apply in the early morning (before 9:00 AM) or after sunset. Reapply every 7 days or immediately following rain.',
  },
  {
    title: 'Recipe 2: Cold-Pressed Pure Neem Oil Emulsion',
    badge: 'Anti-Spore & Insect Barrier',
    difficulty: 'Moderate (8 mins)',
    ingredients: [
      '2 Tablespoons (30ml) 100% Cold-Pressed Unrefined Neem Oil',
      '1 Teaspoon Mild organic dish soap or coco-glucoside (surfactant)',
      '1 Gallon (3.8 Liters) Warm water (approx. 25-30°C for smooth emulsification)',
    ],
    steps: [
      'Combine warm water and liquid soap in a clean jar and shake to create soapy base water.',
      'Slowly add the raw neem oil and shake vigorously for 2 minutes — it must turn milky with no floating oil globules.',
      'Pour the emulsion into your garden backpack sprayer.',
      'Coat stems, leaf joints, and affected foliage thoroughly to suffocate hyphae and inhibit spore development.',
    ],
    applicationTip: 'Never apply under direct midday sunlight to avoid leaf burn. Use fresh batches within 8 hours of mixing.',
  },
  {
    title: 'Recipe 3: Garlic & Cayenne Bio-Sulfur Shield',
    badge: 'DIY Antimicrobial Extract',
    difficulty: 'Steep Overnight',
    ingredients: [
      '2 Whole Garlic Bulbs (unpeeled, crushed)',
      '2-3 Fresh Cayenne / Hot Peppers (chopped)',
      '1 Liter Water for concentrate + 4 Liters clean water for dilution',
    ],
    steps: [
      'Blend crushed garlic and hot peppers with 1 liter of warm water until finely pureed.',
      'Let the concentrate steep in a covered glass jar at room temperature for 12 to 24 hours.',
      'Strain through a fine cheesecloth or coffee filter to remove all pulp and particles.',
      'Dilute the strained concentrate 1:4 with fresh water and add 1/2 tsp vegetable oil as a sticker.',
    ],
    applicationTip: 'Natural sulfur compounds (allicin) in garlic destroy fungal cell walls. Spray every 5-7 days as preventative shield.',
  },
  {
    title: 'Recipe 4: Raw Whey & Milk Antiseptic Solution',
    badge: 'Natural Sunlight Catalyst',
    difficulty: 'Instant (2 mins)',
    ingredients: [
      '1 Part Whole Milk or Raw Whey (unpasteurized preferred)',
      '9 Parts Clean Rainwater or Dechlorinated Tap Water (1:9 ratio)',
    ],
    steps: [
      'Mix 1 cup of whole milk or whey with 9 cups of water in a spray bottle.',
      'Shake gently to homogenize.',
      'Spray directly onto infected crop leaves during sunny morning hours.',
    ],
    applicationTip: 'When exposed to sunlight, proteins in milk produce antiseptic lactoferrin and oxygen radicals that kill Alternaria fungi.',
  },
];

export default function TreatmentRecipes() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center text-green-700">
          <FlaskConical className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">2. How to Create the Cure (Step-by-Step DIY Recipes)</h3>
          <p className="text-xs text-gray-500">
            Easily prepared on-farm or at home using accessible, low-cost organic ingredients with high antifungal potency.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map((recipe, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between hover:border-green-300 transition"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-green-100 text-green-800 border border-green-200">
                  {recipe.badge}
                </span>
                <span className="text-[11px] font-medium text-gray-500 bg-white px-2 py-0.5 rounded-md border border-gray-200">
                  {recipe.difficulty}
                </span>
              </div>

              <h4 className="font-bold text-gray-900 text-base mb-4">{recipe.title}</h4>

              {/* Ingredients in Points */}
              <div className="mb-4 bg-white p-4 rounded-xl border border-gray-100">
                <span className="text-xs font-bold text-gray-800 block mb-2 uppercase tracking-wide">
                  Required Ingredients:
                </span>
                <ul className="space-y-1.5">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 flex-shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to Create / Preparation Steps in Points */}
              <div className="mb-4">
                <span className="text-xs font-bold text-gray-800 block mb-2 uppercase tracking-wide">
                  Preparation & Mixing Steps:
                </span>
                <ol className="space-y-2">
                  {recipe.steps.map((st, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-gray-700">
                      <span className="font-bold text-green-800 bg-green-100 w-4 h-4 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{st}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Application Tip */}
            <div className="pt-3 mt-2 border-t border-gray-200/60 bg-green-50/60 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-start space-x-2">
              <Droplets className="w-4 h-4 text-green-700 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-green-900 leading-snug">
                <strong>Application Guide:</strong> {recipe.applicationTip}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
