import React, { useState } from 'react';
import { Users, ChefHat, Phone, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface MenuItem {
    id: string;
    name: string;
    category: 'rice' | 'bread' | 'starter' | 'veg' | 'nonveg' | 'sweet' | 'live' | 'beverage';
    basePrice: number;
    popular?: boolean;
}

interface Package {
    id: string;
    name: string;
    description: string;
    items: string[];
    totalPrice: number;
    type: 'banarasi' | 'bengali' | 'veg' | 'nonveg';
}

const menuItems: MenuItem[] = [
    // Rice & Biryani (18 items)
    { id: 'jeera-rice', name: 'Jeera Rice', category: 'rice', basePrice: 40 },
    { id: 'plain-rice', name: 'Steamed Rice', category: 'rice', basePrice: 30 },
    { id: 'ghee-rice', name: 'Ghee Rice', category: 'rice', basePrice: 50 },
    { id: 'veg-pulao', name: 'Vegetable Pulao', category: 'rice', basePrice: 60, popular: true },
    { id: 'kashmiri-pulao', name: 'Kashmiri Pulao', category: 'rice', basePrice: 70 },
    { id: 'peas-pulao', name: 'Matar Pulao', category: 'rice', basePrice: 55 },
    { id: 'basanti-pulao', name: 'Basanti Pulao (Bengali)', category: 'rice', basePrice: 65, popular: true },
    { id: 'mishti-pulao', name: 'Mishti Pulao (Bengali)', category: 'rice', basePrice: 70 },
    { id: 'ghee-bhat', name: 'Ghee Bhat (Bengali)', category: 'rice', basePrice: 45 },
    { id: 'veg-biryani', name: 'Veg Biryani', category: 'rice', basePrice: 120, popular: true },
    { id: 'paneer-biryani', name: 'Paneer Biryani', category: 'rice', basePrice: 140 },
    { id: 'mushroom-biryani', name: 'Mushroom Biryani', category: 'rice', basePrice: 130 },
    { id: 'chicken-biryani', name: 'Chicken Biryani', category: 'rice', basePrice: 180, popular: true },
    { id: 'mutton-biryani', name: 'Mutton Biryani', category: 'rice', basePrice: 220, popular: true },
    { id: 'egg-biryani', name: 'Egg Biryani', category: 'rice', basePrice: 100 },
    { id: 'fish-biryani', name: 'Fish Biryani (Bengali)', category: 'rice', basePrice: 200 },
    { id: 'prawn-biryani', name: 'Prawn Biryani', category: 'rice', basePrice: 240 },
    { id: 'kolkata-biryani', name: 'Kolkata Biryani (Bengali)', category: 'rice', basePrice: 190, popular: true },

    // Breads (20 items)
    { id: 'tawa-roti', name: 'Tawa Roti', category: 'bread', basePrice: 15, popular: true },
    { id: 'tandoor-roti', name: 'Tandoor Roti', category: 'bread', basePrice: 18 },
    { id: 'butter-roti', name: 'Butter Roti', category: 'bread', basePrice: 20 },
    { id: 'plain-naan', name: 'Plain Naan', category: 'bread', basePrice: 25, popular: true },
    { id: 'butter-naan', name: 'Butter Naan', category: 'bread', basePrice: 30, popular: true },
    { id: 'garlic-naan', name: 'Garlic Naan', category: 'bread', basePrice: 35 },
    { id: 'cheese-naan', name: 'Cheese Naan', category: 'bread', basePrice: 50 },
    { id: 'kulcha', name: 'Kulcha', category: 'bread', basePrice: 30 },
    { id: 'lachha-paratha', name: 'Lachha Paratha', category: 'bread', basePrice: 35, popular: true },
    { id: 'aloo-paratha', name: 'Aloo Paratha', category: 'bread', basePrice: 40 },
    { id: 'paneer-paratha', name: 'Paneer Paratha', category: 'bread', basePrice: 45 },
    { id: 'puri', name: 'Puri', category: 'bread', basePrice: 20, popular: true },
    { id: 'bhatura', name: 'Bhatura', category: 'bread', basePrice: 25 },
    { id: 'rumali-roti', name: 'Rumali Roti', category: 'bread', basePrice: 22 },
    { id: 'luchi', name: 'Luchi (Bengali)', category: 'bread', basePrice: 25, popular: true },
    { id: 'radhaballabhi', name: 'Radhaballabhi (Bengali)', category: 'bread', basePrice: 30, popular: true },
    { id: 'kochuri', name: 'Kochuri (Bengali)', category: 'bread', basePrice: 28 },
    { id: 'parotta', name: 'Parotta', category: 'bread', basePrice: 32 },
    { id: 'missi-roti', name: 'Missi Roti', category: 'bread', basePrice: 24 },
    { id: 'roomali-roti', name: 'Roomali Roti', category: 'bread', basePrice: 22 },

    // Starters (12 items)
    { id: 'paneer-tikka', name: 'Paneer Tikka', category: 'starter', basePrice: 120, popular: true },
    { id: 'veg-pakora', name: 'Veg Pakora', category: 'starter', basePrice: 60, popular: true },
    { id: 'samosa', name: 'Samosa', category: 'starter', basePrice: 40, popular: true },
    { id: 'spring-roll', name: 'Spring Roll', category: 'starter', basePrice: 70 },
    { id: 'hara-bhara-kabab', name: 'Hara Bhara Kabab', category: 'starter', basePrice: 90 },
    { id: 'aloo-tikki', name: 'Aloo Tikki', category: 'starter', basePrice: 50 },
    { id: 'veg-cutlet', name: 'Veg Cutlet (Bengali)', category: 'starter', basePrice: 65, popular: true },
    { id: 'beguni', name: 'Beguni (Bengali)', category: 'starter', basePrice: 55 },
    { id: 'chicken-tikka', name: 'Chicken Tikka', category: 'starter', basePrice: 150, popular: true },
    { id: 'fish-fry', name: 'Fish Fry (Bengali)', category: 'starter', basePrice: 140, popular: true },
    { id: 'chicken-pakora', name: 'Chicken Pakora', category: 'starter', basePrice: 130 },
    { id: 'mutton-seekh', name: 'Mutton Seekh Kabab', category: 'starter', basePrice: 160 },

    // Vegetarian Dishes (30 items)
    { id: 'dal-tadka', name: 'Dal Tadka', category: 'veg', basePrice: 70, popular: true },
    { id: 'dal-makhani', name: 'Dal Makhani', category: 'veg', basePrice: 90, popular: true },
    { id: 'dal-fry', name: 'Dal Fry', category: 'veg', basePrice: 65 },
    { id: 'chana-masala', name: 'Chana Masala', category: 'veg', basePrice: 75, popular: true },
    { id: 'rajma', name: 'Rajma Masala', category: 'veg', basePrice: 80 },
    { id: 'kachori-sabzi', name: 'Banarasi Kachori-Sabzi', category: 'veg', basePrice: 85, popular: true },
    { id: 'dum-aloo', name: 'Banarasi Dum Aloo', category: 'veg', basePrice: 95, popular: true },
    { id: 'paneer-butter-masala', name: 'Paneer Butter Masala', category: 'veg', basePrice: 130, popular: true },
    { id: 'paneer-tikka-masala', name: 'Paneer Tikka Masala', category: 'veg', basePrice: 135 },
    { id: 'paneer-lababdar', name: 'Paneer Lababdar', category: 'veg', basePrice: 125 },
    { id: 'kadai-paneer', name: 'Kadai Paneer', category: 'veg', basePrice: 120 },
    { id: 'palak-paneer', name: 'Palak Paneer', category: 'veg', basePrice: 115 },
    { id: 'matar-paneer', name: 'Matar Paneer', category: 'veg', basePrice: 110 },
    { id: 'malai-kofta', name: 'Malai Kofta', category: 'veg', basePrice: 120, popular: true },
    { id: 'mix-veg', name: 'Mix Veg', category: 'veg', basePrice: 85 },
    { id: 'veg-kolhapuri', name: 'Veg Kolhapuri', category: 'veg', basePrice: 100 },
    { id: 'bhindi-masala', name: 'Bhindi Masala', category: 'veg', basePrice: 90 },
    { id: 'baingan-bharta', name: 'Baingan Bharta', category: 'veg', basePrice: 95 },
    { id: 'aloo-gobi', name: 'Aloo Gobi', category: 'veg', basePrice: 80 },
    { id: 'mushroom-masala', name: 'Mushroom Masala', category: 'veg', basePrice: 110 },
    { id: 'shukto', name: 'Shukto (Bengali)', category: 'veg', basePrice: 100, popular: true },
    { id: 'cholar-dal', name: 'Cholar Dal (Bengali)', category: 'veg', basePrice: 75, popular: true },
    { id: 'aloo-posto', name: 'Aloo Posto (Bengali)', category: 'veg', basePrice: 90, popular: true },
    { id: 'dhokar-dalna', name: 'Dhokar Dalna (Bengali)', category: 'veg', basePrice: 105 },
    { id: 'echor-ghonto', name: 'Echor Ghonto (Bengali)', category: 'veg', basePrice: 95 },
    { id: 'chanar-dalna', name: 'Chanar Dalna (Bengali)', category: 'veg', basePrice: 100 },
    { id: 'mochar-ghonto', name: 'Mochar Ghonto (Bengali)', category: 'veg', basePrice: 110 },
    { id: 'begun-bhaja', name: 'Begun Bhaja (Bengali)', category: 'veg', basePrice: 70 },
    { id: 'alu-bhaja', name: 'Alu Bhaja (Bengali)', category: 'veg', basePrice: 65 },
    { id: 'potoler-dolma', name: 'Potoler Dolma (Bengali)', category: 'veg', basePrice: 115 },

    // Non-Vegetarian Dishes (20 items)
    { id: 'butter-chicken', name: 'Butter Chicken', category: 'nonveg', basePrice: 200, popular: true },
    { id: 'chicken-curry', name: 'Chicken Curry', category: 'nonveg', basePrice: 180, popular: true },
    { id: 'chicken-korma', name: 'Chicken Korma', category: 'nonveg', basePrice: 190 },
    { id: 'kadai-chicken', name: 'Kadai Chicken', category: 'nonveg', basePrice: 195 },
    { id: 'chicken-do-pyaza', name: 'Chicken Do Pyaza', category: 'nonveg', basePrice: 185 },
    { id: 'mutton-curry', name: 'Mutton Curry', category: 'nonveg', basePrice: 240, popular: true },
    { id: 'mutton-korma', name: 'Mutton Korma', category: 'nonveg', basePrice: 250, popular: true },
    { id: 'mutton-rogan-josh', name: 'Mutton Rogan Josh', category: 'nonveg', basePrice: 260 },
    { id: 'kadai-mutton', name: 'Kadai Mutton', category: 'nonveg', basePrice: 255 },
    { id: 'fish-curry', name: 'Fish Curry', category: 'nonveg', basePrice: 180 },
    { id: 'prawn-masala', name: 'Prawn Masala', category: 'nonveg', basePrice: 280 },
    { id: 'egg-curry', name: 'Egg Curry', category: 'nonveg', basePrice: 90 },
    { id: 'macher-jhol', name: 'Macher Jhol (Bengali)', category: 'nonveg', basePrice: 200, popular: true },
    { id: 'kosha-mangsho', name: 'Kosha Mangsho (Bengali)', category: 'nonveg', basePrice: 270, popular: true },
    { id: 'chingri-malai', name: 'Chingri Malai Curry (Bengali)', category: 'nonveg', basePrice: 300, popular: true },
    { id: 'doi-maach', name: 'Doi Maach (Bengali)', category: 'nonveg', basePrice: 210 },
    { id: 'bhapa-ilish', name: 'Bhapa Ilish (Bengali)', category: 'nonveg', basePrice: 320, popular: true },
    { id: 'fish-kalia', name: 'Fish Kalia (Bengali)', category: 'nonveg', basePrice: 190 },
    { id: 'chicken-rezala', name: 'Chicken Rezala (Bengali)', category: 'nonveg', basePrice: 205 },
    { id: 'mutton-chaap', name: 'Mutton Chaap (Bengali)', category: 'nonveg', basePrice: 265 },

    // Sweets & Desserts (18 items)
    { id: 'gulab-jamun', name: 'Gulab Jamun', category: 'sweet', basePrice: 50, popular: true },
    { id: 'rasgulla', name: 'Rasgulla', category: 'sweet', basePrice: 55, popular: true },
    { id: 'jalebi', name: 'Jalebi (Garam)', category: 'sweet', basePrice: 60, popular: true },
    { id: 'rabri', name: 'Rabri', category: 'sweet', basePrice: 70 },
    { id: 'kheer', name: 'Rice Kheer', category: 'sweet', basePrice: 65, popular: true },
    { id: 'malpua', name: 'Malpua (Banarasi)', category: 'sweet', basePrice: 75, popular: true },
    { id: 'peda', name: 'Peda', category: 'sweet', basePrice: 60 },
    { id: 'barfi', name: 'Barfi', category: 'sweet', basePrice: 65 },
    { id: 'kaju-katli', name: 'Kaju Katli', category: 'sweet', basePrice: 80 },
    { id: 'rasmalai', name: 'Rasmalai', category: 'sweet', basePrice: 70, popular: true },
    { id: 'mishti-doi', name: 'Mishti Doi (Bengali)', category: 'sweet', basePrice: 60, popular: true },
    { id: 'rosogolla', name: 'Rosogolla (Bengali)', category: 'sweet', basePrice: 55, popular: true },
    { id: 'sandesh', name: 'Sandesh (Bengali)', category: 'sweet', basePrice: 65, popular: true },
    { id: 'chomchom', name: 'Chomchom (Bengali)', category: 'sweet', basePrice: 70 },
    { id: 'langcha', name: 'Langcha (Bengali)', category: 'sweet', basePrice: 60 },
    { id: 'rajbhog', name: 'Rajbhog (Bengali)', category: 'sweet', basePrice: 75 },
    { id: 'pantua', name: 'Pantua (Bengali)', category: 'sweet', basePrice: 55 },
    { id: 'kulfi', name: 'Kulfi', category: 'sweet', basePrice: 50 },

    // Live Counters (10 items)
    { id: 'chaat-counter', name: 'Live Chaat Counter', category: 'live', basePrice: 90, popular: true },
    { id: 'paan-counter', name: 'Paan Counter', category: 'live', basePrice: 60, popular: true },
    { id: 'dosa-counter', name: 'Live Dosa Counter', category: 'live', basePrice: 100 },
    { id: 'pasta-counter', name: 'Live Pasta Counter', category: 'live', basePrice: 110 },
    { id: 'ice-cream-counter', name: 'Ice Cream Counter', category: 'live', basePrice: 80 },
    { id: 'juice-counter', name: 'Fresh Juice Counter', category: 'live', basePrice: 70 },
    { id: 'sandwich-counter', name: 'Sandwich Counter', category: 'live', basePrice: 85 },
    { id: 'momos-counter', name: 'Momos Counter', category: 'live', basePrice: 95 },
    { id: 'phuchka-counter', name: 'Phuchka Counter (Bengali)', category: 'live', basePrice: 75, popular: true },
    { id: 'roll-counter', name: 'Kathi Roll Counter', category: 'live', basePrice: 100 },

    // Beverages (8 items)
    { id: 'lassi-sweet', name: 'Sweet Lassi', category: 'beverage', basePrice: 40, popular: true },
    { id: 'lassi-mango', name: 'Mango Lassi', category: 'beverage', basePrice: 50 },
    { id: 'sharbat', name: 'Sharbat (Rooh Afza)', category: 'beverage', basePrice: 35 },
    { id: 'masala-chai', name: 'Masala Chai', category: 'beverage', basePrice: 20, popular: true },
    { id: 'cold-drink', name: 'Cold Drinks', category: 'beverage', basePrice: 30 },
    { id: 'mineral-water', name: 'Mineral Water', category: 'beverage', basePrice: 20 },
    { id: 'buttermilk', name: 'Buttermilk (Chaas)', category: 'beverage', basePrice: 30 },
    { id: 'lemonade', name: 'Fresh Lemonade', category: 'beverage', basePrice: 35 },
];

const packages: Package[] = [
    {
        id: 'banarasi-special',
        name: 'Banarasi Special',
        description: 'Top sellers loved by locals - authentic Banarasi flavors',
        type: 'banarasi',
        totalPrice: 750,
        items: ['tawa-roti', 'puri', 'veg-pulao', 'dal-makhani', 'kachori-sabzi', 'dum-aloo', 'paneer-butter-masala', 'malpua', 'gulab-jamun', 'lassi-sweet', 'chaat-counter']
    },
    {
        id: 'bengali-delight',
        name: 'Bengali Delight',
        description: 'Authentic Bengali favorites - taste of Kolkata',
        type: 'bengali',
        totalPrice: 780,
        items: ['luchi', 'radhaballabhi', 'basanti-pulao', 'cholar-dal', 'shukto', 'aloo-posto', 'kosha-mangsho', 'macher-jhol', 'mishti-doi', 'rosogolla', 'sandesh', 'phuchka-counter']
    },
    {
        id: 'premium-veg',
        name: 'Premium Veg Package',
        description: 'Complete vegetarian feast - ₹700 per person',
        type: 'veg',
        totalPrice: 720,
        items: ['butter-naan', 'lachha-paratha', 'veg-pulao', 'paneer-tikka', 'dal-makhani', 'paneer-butter-masala', 'malai-kofta', 'mix-veg', 'rasgulla', 'kheer', 'masala-chai', 'chaat-counter']
    },
    {
        id: 'premium-nonveg',
        name: 'Premium Non-Veg Package',
        description: 'Grand non-veg spread - ₹950 per person',
        type: 'nonveg',
        totalPrice: 950,
        items: ['butter-naan', 'lachha-paratha', 'chicken-biryani', 'mutton-biryani', 'chicken-tikka', 'butter-chicken', 'mutton-korma', 'chingri-malai', 'dal-makhani', 'rasmalai', 'gulab-jamun', 'paan-counter']
    }
];

const PricingCalculator: React.FC = () => {
    const [guestCount, setGuestCount] = useState(100);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [selectedPackage, setSelectedPackage] = useState<string>('');
    const [expandedCategories, setExpandedCategories] = useState<string[]>(['rice', 'bread', 'starter', 'veg', 'nonveg', 'sweet', 'live', 'beverage']);

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const toggleItem = (itemId: string) => {
        setSelectedPackage(''); // Clear package if manually selecting items
        setSelectedItems(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const selectPackage = (packageId: string) => {
        const pkg = packages.find(p => p.id === packageId);
        if (pkg) {
            setSelectedPackage(packageId);
            setSelectedItems(pkg.items);
        }
    };

    const calculateTotal = () => {
        const itemsTotal = selectedItems.reduce((sum, itemId) => {
            const item = menuItems.find(m => m.id === itemId);
            return sum + (item?.basePrice || 0);
        }, 0);
        return itemsTotal * guestCount;
    };

    const getPerPersonTotal = () => {
        return selectedItems.reduce((sum, itemId) => {
            const item = menuItems.find(m => m.id === itemId);
            return sum + (item?.basePrice || 0);
        }, 0);
    };

    const isMinimumMet = () => getPerPersonTotal() >= 700;

    const getWhatsAppMessage = () => {
        const perPerson = getPerPersonTotal();
        const packageName = selectedPackage ? packages.find(p => p.id === selectedPackage)?.name : 'Custom Menu';
        const items = selectedItems.map(id => menuItems.find(m => m.id === id)?.name).join(', ');
        return `Namaste! Main apne event ke liye quote chahta hoon:\n\nPackage: ${packageName}\nGuests: ${guestCount}\nPer Person: ₹${perPerson}\nMenu Items: ${items}\n\nEstimated Total: ₹${calculateTotal().toLocaleString('en-IN')}\n\nKripya details share karein.`;
    };

    const categoryConfig = {
        rice: { name: 'Rice & Biryani', icon: '🍚', color: 'from-amber-500 to-orange-500' },
        bread: { name: 'Breads & Roti', icon: '🫓', color: 'from-yellow-500 to-amber-500' },
        starter: { name: 'Starters', icon: '🥟', color: 'from-green-500 to-emerald-500' },
        veg: { name: 'Vegetarian', icon: '🥬', color: 'from-lime-500 to-green-500' },
        nonveg: { name: 'Non-Vegetarian', icon: '🍗', color: 'from-red-500 to-rose-500' },
        sweet: { name: 'Sweets & Desserts', icon: '🍰', color: 'from-pink-500 to-rose-500' },
        live: { name: 'Live Counters', icon: '✨', color: 'from-purple-500 to-pink-500' },
        beverage: { name: 'Beverages', icon: '🥤', color: 'from-blue-500 to-cyan-500' }
    };

    return (
        <div className="bg-white rounded-2xl shadow-premium p-8 max-w-6xl mx-auto" id="pricing">
            <div className="text-center mb-8">
                <ChefHat className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-3xl font-bold text-royal mb-2">Build Your Plate</h3>
                <p className="text-gray-600">Apne pasand ka menu banayein aur estimate paayen</p>
                <p className="text-sm text-primary font-semibold mt-2">Minimum: ₹700 per person</p>
            </div>

            {/* Recommended Packages */}
            <div className="mb-8">
                <h4 className="text-xl font-bold text-royal mb-4 flex items-center gap-2">
                    <Sparkles className="text-accent" size={24} />
                    Recommended Packages
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    {packages.map(pkg => (
                        <div
                            key={pkg.id}
                            onClick={() => selectPackage(pkg.id)}
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${selectedPackage === pkg.id
                                ? 'border-primary bg-primary/5 shadow-lg'
                                : 'border-gray-200 hover:border-primary/50 hover:shadow-md'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h5 className="text-lg font-bold text-royal">{pkg.name}</h5>
                                    <p className="text-sm text-gray-600">{pkg.description}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">₹{pkg.totalPrice}</div>
                                    <div className="text-xs text-gray-500">per person</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500">
                                {pkg.items.length} items included
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Guest Count Slider */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center gap-2 text-lg font-semibold text-royal">
                        <Users size={24} className="text-primary" />
                        Number of Guests
                    </label>
                    <span className="text-2xl font-bold text-primary">{guestCount}</span>
                </div>
                <input
                    type="range"
                    min="50"
                    max="1500"
                    step="50"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full h-2 bg-ganga/30 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>50</span>
                    <span>750</span>
                    <span>1500</span>
                </div>
            </div>

            {/* Menu Selection by Category */}
            <div className="mb-8">
                <h4 className="text-xl font-bold text-royal mb-4">Select Menu Items (120 items)</h4>

                {Object.entries(categoryConfig).map(([categoryKey, config]) => {
                    const categoryItems = menuItems.filter(item => item.category === categoryKey);
                    const isExpanded = expandedCategories.includes(categoryKey);

                    return (
                        <div key={categoryKey} className="mb-4">
                            <button
                                onClick={() => toggleCategory(categoryKey)}
                                className={`w-full flex items-center justify-between p-4 bg-gradient-to-r ${config.color} text-white rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{config.icon}</span>
                                    <span className="font-bold text-lg">{config.name}</span>
                                    <span className="text-sm opacity-90">({categoryItems.length} items)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
                                        {isExpanded ? 'Collapse' : 'Expand'}
                                    </span>
                                    {isExpanded ? <ChevronUp size={24} className="animate-bounce" /> : <ChevronDown size={24} />}
                                </div>
                            </button>

                            {isExpanded && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 p-4 bg-gray-50 rounded-xl">
                                    {categoryItems.map(item => (
                                        <label
                                            key={item.id}
                                            className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${selectedItems.includes(item.id)
                                                ? 'border-primary bg-primary/5'
                                                : 'border-gray-200 hover:border-primary/50'
                                                }`}
                                        >
                                            <div className="flex items-center gap-2 flex-1">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedItems.includes(item.id)}
                                                    onChange={() => toggleItem(item.id)}
                                                    className="w-4 h-4 accent-primary"
                                                />
                                                <span className="font-medium text-gray-800 text-sm">
                                                    {item.name}
                                                    {item.popular && <span className="ml-1 text-accent">⭐</span>}
                                                </span>
                                            </div>
                                            <span className="text-primary font-semibold text-sm">₹{item.basePrice}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Total & CTA */}
            <div className="border-t-2 border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-sm text-gray-600">Per Person: ₹{getPerPersonTotal()}</p>
                        <p className="text-sm text-gray-600">Total ({guestCount} guests)</p>
                        <p className="text-4xl font-bold text-primary">₹{calculateTotal().toLocaleString('en-IN')}</p>
                        {!isMinimumMet() && (
                            <p className="text-sm text-red-600 mt-2">⚠️ Minimum ₹700 per person required</p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">*Final pricing may vary based on customization</p>
                    </div>
                </div>

                <a
                    href={isMinimumMet() ? `https://wa.me/919839553272?text=${encodeURIComponent(getWhatsAppMessage())}` : '#'}
                    className={`w-full px-8 py-4 rounded-full font-bold text-lg shadow-premium transition-all duration-300 flex items-center justify-center gap-3 group ${isMinimumMet()
                        ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-premium-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    onClick={(e) => !isMinimumMet() && e.preventDefault()}
                >
                    <Phone size={24} className={isMinimumMet() ? 'group-hover:rotate-12 transition-transform' : ''} />
                    {isMinimumMet() ? 'Get Exact Quote on WhatsApp' : 'Select ₹700+ to Continue'}
                </a>
            </div>
        </div>
    );
};

export default PricingCalculator;
