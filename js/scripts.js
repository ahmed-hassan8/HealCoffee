// Inventory data structure

const inventoryItems = {
    cupsLids: [
        { id: 'cup5oz', name: 'Cup 5OZ | كوب 5 اونص', unit: 'CTN | كرتون', imageUrl: 'images/cup5oz.jpg' ,maxQuantity: 1 , description: 'Carton = 1000 cups | كرتون 1000 كوب'},
        { id: 'cup7oz', name: 'Cup 7OZ | كوب 7 اونص', unit: 'CTN | كرتون', imageUrl: 'images/cup7oz.jpg' ,maxQuantity: 1 , description: 'Carton = 1000 cups | كرتون 1000 كوب'},
        { id: 'cuplid7oz', name: 'Cuplid 7OZ | غطاء 7 اونص', unit: 'CTN | كرتون', imageUrl: 'images/cuplid7oz.jpg' ,maxQuantity: 1, description: 'Carton = 1000 Lids | كرتون 1000 غطاء'},
        { id: 'cup9oz', name: 'Cup 9OZ | كوب 9 اونص', unit: 'CTN | كرتون', imageUrl: 'images/cup9oz.jpg' ,maxQuantity: 2 , description: 'Carton = 500 Cups | كرتون 500 كوب' },
        { id: 'cuplid9oz', name: 'Cuplid 9OZ | غطاء 9 اونص', unit: 'CTN | كرتون', imageUrl: 'images/cuplid9oz.jpg' ,maxQuantity: 1 , description: 'Carton = 1000 Lids | كرتون 1000 غطاء'},
        { id: 'cup10oz', name: 'Cup 10OZ | كوب 10 اونص', unit: 'CTN | كرتون', imageUrl: 'images/cup10oz.jpg' ,maxQuantity: 2 , description: 'Carton = 500 Cups | كرتون 500 كوب' },
        { id: 'cup12oz', name: 'Cup 12OZ | كوب 12 اونص', unit: 'CTN | كرتون', imageUrl: 'images/cup12oz.jpg'  ,maxQuantity: 2, description: 'Carton = 500 Cups | كرتون 500 كوب'},
        { id: 'paperCupid12oz', name: 'Paper Cuplid 12OZ | غطاء 12 اونص', unit: 'CTN | كرتون', imageUrl: 'images/paperCupid12oz.jpg',maxQuantity: 1, description: 'Carton = 1000 Lids | كرتون 1000 غطاء' },
        { id: 'plasticCup12oz', name: 'Plastic cup 12OZ ONS | كوب بلاستيك 12 اونص', unit: 'CTN | كرتون', imageUrl: 'images/plasticCup12oz.jpg',maxQuantity: 2, description: 'Carton = 1000 Lids | كرتون 1000 غطاء' },
        { id: 'plasticPaperCupid12', name: 'Plastic Paper Cuplid 12 | غطاء أكواب بلاستيك 12 اونص', unit: 'CTN | كرتون', imageUrl: 'images/plasticPaperCupid12.jpg',maxQuantity: 2, description: 'Carton = 1000 Lids | كرتون 1000 غطاء' },
        { id: 'takeOutHandleBag', name: 'Take out Handle Bag | هاندل باج سفري', unit: 'CTN | كرتون', imageUrl: 'images/takeOutHandleBag.jpg',maxQuantity: 2, description: '250 PCS | كرتون 250 حبة' },
        { id: 'sweetTakeOutBox', name: 'Sweet Take-out Box | بوكس حلي سفري', unit: 'CTN | كرتون', imageUrl: 'images/sweetTakeOutBox.jpg',maxQuantity: 2, description: 'Carton = 350 PCS | كرتون 350 حبة' },
        { id: 'takeOutBigPacket', name: 'Take out Big Packet | باكت سفري كبير', unit: 'BKT | باكت', imageUrl: 'images/takeOutBigPacket.jpg',maxQuantity: 2 , description: '500 Pakets | 500 باكت'},
        { id: 'takeOutSmallPacket', name: 'Take out Small Packet | باكت سفري صغير', unit: 'BKT | باكت', imageUrl: 'images/takeOutSmallPacket.jpg',maxQuantity: 2 , description: '500 Pakets | 500 باكت'}
    ],
    filters: [
        { id: 'ColdBrew', name: 'Cold Brew Filter Bag | فلتر كولد برو ', unit: 'BKT | باكت', imageUrl: 'images/ColdBrew.jpg' ,maxQuantity: 1, description: 'BKT = 50 Filters | باكت 50 فلتر'},
        { id: 'HarioV60', name: 'Hario V60 Filters 02 | 02 فلتر ڤي سكستي', unit: 'CTN | كرتون', imageUrl: 'images/HarioV60.jpg' ,maxQuantity: 1, description:'CTN = 120 BKT *100 sheets | كرتون 120 باكت * 100 فلتر'},
        { id: 'CoffeeFilters', name: 'FETCO Coffee Filters | فلتر قهوةاليوم فيتكو مقاس 13', unit: 'CTN | كرتون', imageUrl: 'images/CoffeeFilters.jpg',maxQuantity: 1, description: 'Carton = 500 Filters | كرتون 500 فلتر' },
        { id: 'CafettoEspressoCleaner', name: 'Cafetto Espresso Cleaner |  منظف الة الاسبريسو كفيتو أحمر لتر', unit: 'PC | حبة', imageUrl: 'images/CafettoEspressoCleaner.jpg',maxQuantity: 1, description: 'PC = 1 Litter | حبة 1 لتر' },
        { id: 'V60CoffeeServer', name: 'V60 Coffee Server 600ml - 02  | ڤي سكستي سيرفر 02 - حجم  600  مل ', unit: 'PC | حبة', imageUrl: 'images/V60CoffeeServer.jpg' ,maxQuantity: 2, description: 'PC | حبة'},
        { id: 'CafizaEspresooMachine', name: 'Espresoo Machine Cleaning Bills |  أقراص تنظيف مكائن القهوة ', unit: 'BKT | باكت', imageUrl: 'images/CafizaEspresooMachine.jpg' ,maxQuantity: 1, description: '100 Bills | 100 حبة'},
    ],
        consumable: [
            { id: 'coveredPlasticFork', name: 'Covered Plastic Fork | شوكة بلاستيك مغلفة', unit: 'CTN | كرتون', imageUrl: 'images/coveredPlasticFork.jpg', maxQuantity: 1, description: 'Carton = 1000 Fork | كرتون 1000 شوكة' },
            { id: 'coveredPlasticSpoon', name: 'Covered Plastic Spoon | معلقة بلاستيك مغلفة', unit: 'CTN | كرتون', imageUrl: 'images/coveredPlasticSpoon.jpg', maxQuantity: 1, description: 'Box = 1000 Spoon | كرتون 1000 معلقة' },
            { id: 'coveredPlasticKnife', name: 'Covered Plastic Knife | سكين بلاستيك مغلفة', unit: 'CTN | كرتون', imageUrl: 'images/coveredPlasticKnife.jpg', maxQuantity: 1, description: 'Box = 1000 Knife | كرتون 1000 سكين' },
            { id: 'strawBlack6mm', name: 'STRAW BLACK 6MM | مصاص مغلف 6 مم', unit: 'CTN | كرتون', imageUrl: 'images/strawBlack6mm.jpg', maxQuantity: 1, description: 'Carton = 10000 Pieces | كرتون 10000 قطعة' },
            { id: 'woodenCoffeeStirrerSticks', name: 'Wooden Coffee Stirrer Sticks | محرك خشبي', unit: 'CTN | كرتون', imageUrl: 'images/woodenCoffeeStirrerSticks.jpg', maxQuantity: 1, description: 'Carton = 5000 Pieces | كرتون 5000 قطعة' },
            { id: 'cupHolder2', name: 'Cup Holder 2 | حامل اكواب جواد ورقية ٢ كوب', unit: 'CTN | كرتون', imageUrl: 'images/cupHolder2.jpg', maxQuantity: 2, description: 'Carton = 250 Pieces | كرتون 250 قطعة' },
            { id: 'cupHolder4', name: 'Cup Holder 4 | حامل اكواب ورقية ٤ كوب', unit: 'CTN | كرتون', imageUrl: 'images/cupHolder4.jpg', maxQuantity: 2, description: 'Carton = 250 Pieces | كرتون 250 قطعة' },
            { id: 'atmPaperRoll', name: 'ATM Paper Roll | ورق مكائن شبكة', unit: 'CTN | كرتون', imageUrl: 'images/atmPaperRoll.jpg', maxQuantity: 3, description: 'Bkt = 000 Pieces | باكت 000 ' },
            { id: 'thermalPaperRoll70mm80mm', name: 'Thermal paper roll 70*80M | ورق رول كاشير70مم*80', unit: 'CTN | كرتون', imageUrl: 'images/thermalPaperRoll70mm80mm.jpg', maxQuantity: 1, description: 'Carton = 50 ٌRolls | كرتون 50 رول' },
            { id: 'floorDisinfectant30L', name: 'Floor Disinfectant 30L | مطهر أرضيات 30 لتر', unit: 'PC | حبة', imageUrl: 'images/floorDisinfectant30L.jpg', maxQuantity: 1, description: 'Gallon = 30 L | جالون 30 لتر' },
            { id: 'glassCleaner30L', name: 'Glass Cleaner 30L | منظف زجاج  30 لتر', unit: 'PC | حبة', imageUrl: 'images/glassCleaner30L.jpg', maxQuantity: 1, description: 'Gallon = 30 L | جالون 30 لتر' },
            { id: 'areonPerfumeSticks', name: 'Areon Perfume Sticks | اريون اعواد معطرة لافندر', unit: 'PC | حبة', imageUrl: 'images/areonPerfumeSticks.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'AlSalmanOUD', name: 'AlSalman OUD | السلمان للعود', unit: 'PC | حبة', imageUrl: 'images/AlSalmanOUD.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'blackGlovesLarge', name: 'Black Gloves large | قفازات مقاس لارج', unit: 'CTN | كرتون', imageUrl: 'images/blackGlovesLarge.jpg', maxQuantity: 1, description: 'Caton = 10 Boxes | كرتون 10 بوكسات' },
            { id: 'cleaningSponge', name: 'Cleaning Sponge | سفينج تنظيف', unit: 'PC | حبة', imageUrl: 'images/cleaningSponge.jpg', maxQuantity: 4, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'blackGarbageBagRoll50Gallon', name: 'Black Garbage Bag Roll 70 Gallon | اكياس بلدية رول اسود 70 جالون', unit: 'BKT | باكت', imageUrl: 'images/blackGarbageBagRoll50Gallon.jpg', maxQuantity: 2, description: 'Baket = 10 Roll | باكت 10 رول' },
            { id: 'sanitaInterfoldCoarseWipes', name: 'Sanita Interfold Coarse Wipes | مناديل سانيتا', unit: 'CTN | كرتون', imageUrl: 'images/sanitaInterfoldCoarseWipes.jpg', maxQuantity: 3, description: 'Carton = 18 Paket | كرتون 18 باكت' },
            { id: 'blueRollTissues', name: 'Blue Roll Tissues | مناديل رول أزرق', unit: 'Roll | رول', imageUrl: 'images/blueRollTissues.jpg', maxQuantity: 1, description: 'Roll = 375 sheets | الرول 375 شيت' },
            { id: 'MopHeadRefill', name: 'Mop Head Refill | غيار ممسحة موب', unit: 'PC | حبة', imageUrl: 'images/MopHeadRefill.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'DishwashingLiquid', name: 'Dishwashing Liquid | سائل غسيل صحون', unit: 'PC | حبة', imageUrl: 'images/DishwashingLiquid.jpg', maxQuantity: 1, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'Facemask', name: 'Face Mask |ماسك وجه', unit: 'CTN | كرتون', imageUrl: 'images/Facemask.jpg', maxQuantity: 1, description: 'CTN = 10 BKT |  10 باكت' },
            { id: 'TableNapkins', name: 'Table Napkins | مناديل طاولة', unit: 'CTN | كرتون', imageUrl: 'images/TableNapkins.jpg', maxQuantity: 1, description: 'CTN = 50 BKT | كرتون  50 باكت ' }
        ],
        beverage: [
            { id: 'nestleCondensedMilk', name: 'Nestlé Sweetened Condensed Milk |حليب مكثف نستله ', unit: 'CTN | كرتون', imageUrl: 'images/nestle_condensed_milk.jpg', maxQuantity: 1, description: 'Carton = 48 Pieces | كرتون 48 قطعة' },
            { id: 'PerrierSparklingWater', name: 'Perrier Sparkling Water 200ML |مياة غازية بيريه 200 مل', unit: 'CTN | كرتون', imageUrl: 'images/PerrierSparklingWater.jpg', maxQuantity: 2, description: 'Carton = 24 Pieces | كرتون 24 حبة' },
            { id: 'jevanSugarcaneSyrup', name: 'Jevan Sugarcane Syrup | سكر سيرب (سكر قصب) جفان 1000 مل', unit: 'CTN | كرتون', imageUrl: 'images/jevan_sugarcane_syrup.jpg', maxQuantity: 1, description: 'Carton = 4 BTL | كرتون 4 عبوة' },
            { id: 'alproAlmondMilk', name: 'Alpro Almond Milk | حليب البرو عضوي لوز باريستا', unit: 'PC | حبة', imageUrl: 'images/alpro_almond_milk.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'alproCoconutMilk', name: 'Alpro Coconut Milk | حليب البرو عضوي كوكنت باريستا', unit: 'PC | حبة', imageUrl: 'images/alpro_coconut_milk.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'whiteSugarSachets', name: 'White Sugar Sachets | سكر شفرات باكت ابيض', unit: 'CTN | كرتون', imageUrl: 'images/white_sugar_sachets.jpg', maxQuantity: 1, description: 'CTN = 1000 Pieces | كرتون 1000 حبة' },
            { id: 'matchaGreenTeaPowder', name: 'Matcha Green Tea Powder | ماتشا', unit: 'KG | كجم', imageUrl: 'images/matcha_green_tea_powder.jpg', maxQuantity: 1, description: 'Matcha green tea powder' },
            { id: 'dryBlueberry', name: 'Dry Blueberry | توت مجفف', unit: 'KG | كجم', imageUrl: 'images/dry_blueberry.jpg', maxQuantity: 1, description: 'Dry blueberry' },
            { id: 'dryOrange', name: 'Dry Orange | برتقال مجفف', unit: 'KG | كجم', imageUrl: 'images/dry_orange.jpg', maxQuantity: 1, description: 'Dry orange' },
            { id: 'sugar10k', name: 'Sugar 10 kg | سكرغير مغلف 10 ك', unit: 'KG | كجم', imageUrl: 'images/sugar_10k.jpg', maxQuantity: 1, description: '10 kg bag of sugar' },
            { id: 'redCherry', name: 'Red Cherry | كرز مجفف', unit: 'KG | كجم', imageUrl: 'images/red_cherry.jpg', maxQuantity: 1, description: 'Red cherry' },
            { id: 'rawRoselle', name: 'Raw Roselle | كركديه خام', unit: 'KG | كجم', imageUrl: 'images/raw_roselle.jpg', maxQuantity: 1, description: 'Raw roselle' },
            { id: 'mint', name: 'Mint | نعناع', unit: 'BKT | ربطة', imageUrl: 'images/mint.jpg', maxQuantity: 1, description: 'Mint' },
            { id: 'lemon', name: 'Lemon | ليمون', unit: 'KG | كجم', imageUrl: 'images/lemon.jpg', maxQuantity: 1, description: 'Lemon' }
        ]
    };


    const sweetInventory = {
        'Heal': {
            'Honey cake - كيكة العسل': {
                'Friday': 6, 'Saturday': 7, 'Sunday': 5, 'Monday': 5, 'Tuesday': 8, 'Wednesday': 7, 'Thursday': 3, 'imageUrl': 'images/honey_cake.jpg'
            },
            'Heal cake - كيكة هيل': {
                'Friday': 5, 'Saturday': 6, 'Sunday': 4, 'Monday': 4, 'Tuesday': 7, 'Wednesday': 6, 'Thursday': 2, 'imageUrl': 'images/heal_cake.jpg'
            },
            'Tiramisu - تيراميسو': {
                'Friday': 4, 'Saturday': 5, 'Sunday': 3, 'Monday': 3, 'Tuesday': 6, 'Wednesday': 5, 'Thursday': 1, 'imageUrl': 'images/tiramisu.jpg'
            },
            'Mango cheesecake pudding - بودينغ تشيز كيك المانجو': {
                'Friday': 7, 'Saturday': 8, 'Sunday': 6, 'Monday': 6, 'Tuesday': 9, 'Wednesday': 8, 'Thursday': 4, 'imageUrl': 'images/mango_cheesecake_pudding.jpg'
            },
            'Chocolate cake - كيكة الشوكولاتة': {
                'Friday': 8, 'Saturday': 9, 'Sunday': 7, 'Monday': 7, 'Tuesday': 10, 'Wednesday': 9, 'Thursday': 5, 'imageUrl': 'images/chocolate_cake.jpg'
            },
            'White chocolate cake - كيكة الشوكولاتة البيضاء': {
                'Friday': 6, 'Saturday': 7, 'Sunday': 5, 'Monday': 5, 'Tuesday': 8, 'Wednesday': 7, 'Thursday': 3, 'imageUrl': 'images/white_chocolate_cake.jpg'
            },
            'Marble cake - كيكة الماربل': {
                'Friday': 5, 'Saturday': 6, 'Sunday': 4, 'Monday': 4, 'Tuesday': 7, 'Wednesday': 6, 'Thursday': 2, 'imageUrl': 'images/marble_cake.jpg'
            },
            'Chocolate cookies - كوكيز الشوكولاتة': {
                'Friday': 10, 'Saturday': 12, 'Sunday': 8, 'Monday': 8, 'Tuesday': 11, 'Wednesday': 10, 'Thursday': 6, 'imageUrl': 'images/chocolate_cookies.jpg'
            },
            'Kunafa cookies - كوكيز الكنافة': {
                'Friday': 9, 'Saturday': 10, 'Sunday': 7, 'Monday': 7, 'Tuesday': 10, 'Wednesday': 9, 'Thursday': 5, 'imageUrl': 'images/kunafa_cookies.jpg'
            },
            'Magic Bar - ماجيك بار': {
                'Friday': 7, 'Saturday': 8, 'Sunday': 6, 'Monday': 6, 'Tuesday': 9, 'Wednesday': 8, 'Thursday': 4, 'imageUrl': 'images/mic_bar.jpg'
            },
            'Victoria Cake - كيكة فيكتوريا': {
                'Friday': 6, 'Saturday': 7, 'Sunday': 5, 'Monday': 5, 'Tuesday': 8, 'Wednesday': 7, 'Thursday': 3, 'imageUrl': 'images/victoria_cake.jpg'
            }
        }
    };

const selectedItems = {
    cupsLids: {},
    filters: {},
    consumable: {},
    beverage: {}
};
// Selected sweet items storage
const selectedSweetItems = {};

function login() {
    // Get the email and password from the input fields
    let email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Remove any spaces and convert to lowercase
    email = email.trim().toLowerCase();

    const users = {
        'a7e988@gmail.com': { role: 'admin', pass: '1234' },
        'hozyfa121@gmail.com': { role: 'admin', pass: '654321' },
        'a7e989@gmail.com': { role: 'purchase', pass: '1234' },
        'a7a988@gmail.com': { role: 'sweet', pass: '1234' }
    };

    if (!users[email] || users[email].pass !== password) {
        alert('Incorrect email or password.');
        return;
    }

    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';

    // Hide all sections initially
    const sections = {
        purchase: document.getElementById('purchaseTab'),
        sweet: document.getElementById('sweetOrderTab')
    };

    Object.values(sections).forEach(section => section.style.display = 'none');

    // Assign correct sections to the user role
    const role = users[email].role;
    if (role === 'admin') {
        // Admin can access both tabs, but only show one at a time
        sections.purchase.style.display = 'block'; // Default to Purchase Order tab
        sections.sweet.style.display = 'none'; // Hide Sweet Order tab initially
    } else if (role === 'purchase') {
        sections.purchase.style.display = 'block'; // Show Purchase Order tab
        sections.sweet.style.display = 'none'; // Hide Sweet Order tab
    } else if (role === 'sweet') {
        sections.purchase.style.display = 'none'; // Hide Purchase Order tab
        sections.sweet.style.display = 'block'; // Show Sweet Order tab
    }

    // Tab switching logic
    function switchTab(activeTab) {
        Object.entries(sections).forEach(([key, section]) => {
            section.style.display = key === activeTab ? 'block' : 'none';
        });
    }

    // Add event listeners for tab switching (only for admin)
    if (role === 'admin') {
        document.getElementById('purchaseTabButton').addEventListener('click', () => switchTab('purchase'));
        document.getElementById('sweetOrderTabButton').addEventListener('click', () => switchTab('sweet'));
    }

    // Set default tab based on role
    if (role !== 'admin') {
        switchTab(role);
    }
}

// Logout function with optional enhancements
function logout() {
    if (confirm('Are you sure you want to log out?')) {
        // Hide the main page and show the login page
        document.getElementById('mainPage').style.display = 'none';
        document.getElementById('loginPage').style.display = 'block';

        // Clear any selected items
        clearSelectedItems();

        // Reset the form fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('branch').value = '';

        // Optional: Clear session storage or cookies
        sessionStorage.clear(); // Clear session storage
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Clear cookies
    }
}

// Clear selected items
function clearSelectedItems() {
    // Clear selected items for all categories
    for (const category in selectedItems) {
        selectedItems[category] = {};
    }
    // Clear selected sweet items
    for (const item in selectedSweetItems) {
        delete selectedSweetItems[item];
    }
    // Update the display to reflect the cleared items
    updateDisplay();
}


    

function updateBranchInformation() {
    document.getElementById('branch-information').innerText = `Branch: Heal`;
    document.getElementById('sweetBranch-information').innerText = `Branch: Heal`;
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    
    // Update button styles
    const buttons = document.querySelectorAll('.tabs button');
    buttons.forEach(button => {
        button.classList.remove('btn-primary');
    });
    event.target.classList.add('btn-primary');

    // Update branch information if Sweet Order tab is active
    if (tabId === 'sweetOrderTab') {
        updateBranchInformation();
    }
}

function updateBranchInformation() {
    const branch = document.getElementById('branch').value;
    document.getElementById('branch-information').innerText = `Branch: ${branch}`;
    document.getElementById('sweetBranch-information').innerText = `Branch: ${branch}`;
}

function showCategoryItems(category) {
    const items = inventoryItems[category];
    items.forEach(item => {
        if (!selectedItems[category][item.id]) {
            addItem(category, item);
        }
    });
    updateDisplay();
}

function addItem(category, item) {
    if (!selectedItems[category][item.id]) {
        selectedItems[category][item.id] = {
            ...item,
            quantity: 1
        };
    }
    updateDisplay();
}

function updateQuantity(category, itemId, delta) {
    const item = selectedItems[category][itemId];
    if (item) {
        const newQuantity = item.quantity + delta;
        const maxQuantity = inventoryItems[category].find(i => i.id === itemId).maxQuantity;
        if (newQuantity > 0 && newQuantity <= maxQuantity) {
            item.quantity = newQuantity;
        } else if (newQuantity > maxQuantity) {
            alert(`Maximum quantity limit for ${item.name} is ${maxQuantity}.`);
        }
        updateDisplay();
    }
}

function removeItem(category, itemId) {
    delete selectedItems[category][itemId];
    updateDisplay();
}

function updateDisplay() {
    updateCategoryDisplay('cupsLids', 'cupsLidsItems');
    updateCategoryDisplay('filters', 'filtersItems');
    updateCategoryDisplay('consumable', 'consumableItems');
    updateCategoryDisplay('beverage', 'beverageItems');
}

function updateCategoryDisplay(category, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    Object.values(selectedItems[category]).forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'selected-item';
        itemElement.innerHTML = `
            <span class="item-name" data-image="${item.imageUrl}" data-description="${item.description}">${item.name}</span>
            <div class="quantity-control">
                <button class="quantity-btn" onclick="updateQuantity('${category}', '${item.id}', -1)">
                    <i class="fas fa-minus"></i>
                </button>
                <span>${item.quantity} ${item.unit}</span>
                <button class="quantity-btn" onclick="updateQuantity('${category}', '${item.id}', 1)">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="quantity-btn text-red-500" onclick="removeItem('${category}', '${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        container.appendChild(itemElement);

        // Add click event listener to the item name
        const itemName = itemElement.querySelector('.item-name');
        itemName.addEventListener('click', function() {
            showPopup(this.getAttribute('data-image'), this.getAttribute('data-description'));
        });
    });
}

function showPopup(imageUrl, description) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <img src="${imageUrl}" alt="Item Image">
            <div class="item-description">${description}</div>
        </div>
    `;

    // Append the popup to the body
    document.body.appendChild(popup);

    // Display the popup
    popup.style.display = 'flex';

    // Add event listener to close the popup
    popup.querySelector('.close-popup').addEventListener('click', function() {
        document.body.removeChild(popup);
    });

    // Close the popup if the user clicks outside the popup content
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            document.body.removeChild(popup);
        }
    });
}
function submitOrder() {
    generatePDF().then(() => {
        const message = "Purchase Order:\n\n";
        for (const category in selectedItems) {
            const items = selectedItems[category];
            if (Object.keys(items).length > 0) {
                message += `${category.replace(/([A-Z])/g, ' $1').trim()}:\n`;
                Object.values(items).forEach(item => {
                    message += `- ${item.name}: ${item.quantity} ${item.unit}\n`;
                });
                message += '\n';
            }
        }
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://chat.whatsapp.com/Fyoa3jnYx1ZERYB90DkVRX?text=${encodedMessage}`;
        window.open(whatsappUrl);
    });
}

function generatePDF() {
    // Populate printable area with the current order details
    const branch = document.getElementById('branch').value;
    const username = document.getElementById('username').value;
    const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    document.getElementById('pdfBranch').innerText = branch;
    document.getElementById('pdfDate').innerText = `${date} - ${username}`;

    // Generate item list in the printable area
    const pdfItemsContainer = document.getElementById('pdfItems');
    pdfItemsContainer.innerHTML = ''; // Clear previous content

    // Create a table for the items
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginBottom = '20px';

    // Create table header
    const headerRow = document.createElement('tr');
    ['Item Name', 'Unit', 'Quantity'].forEach(headerText => {
        const th = document.createElement('th');
        th.style.border = '1px solid #000';
        th.style.padding = '8px';
        th.style.backgroundColor = '#3C1582'; // Deep purple
        th.style.color = '#fff'; // White text
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Populate table with items
    for (const category in selectedItems) {
        const items = selectedItems[category];
        if (Object.keys(items).length > 0) {
            Object.values(items).forEach((item, index) => {
                const row = document.createElement('tr');
                if (index % 2 === 0) {
                    row.style.backgroundColor = '#D2D2D0'; // Light gray for even rows
                }
                ['name', 'unit', 'quantity'].forEach(field => {
                    const td = document.createElement('td');
                    td.style.border = '1px solid #000';
                    td.style.padding = '8px';
                    td.innerText = item[field];
                    row.appendChild(td);
                });
                table.appendChild(row);
            });
        }
    }

    pdfItemsContainer.appendChild(table);

    // Add footer
    const footer = document.createElement('div');
    footer.style.display = 'flex';
    footer.style.justifyContent = 'space-between';
    footer.style.padding = '10px';
    footer.style.backgroundColor = '#3C5A40'; // Muted green
    footer.style.color = '#fff';
    footer.style.fontWeight = 'lighter';
    footer.style.fontSize = '12px';
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.left = '0';
    footer.style.right = '0';

    const leftText = document.createElement('span');
    leftText.innerText = 'Heal Coffee';
    leftText.style.color = '#fff';

    footer.appendChild(leftText);

    pdfItemsContainer.appendChild(footer);

    // Display the printable area and convert it to PDF
    const printableOrder = document.getElementById('printableOrder');
    printableOrder.style.display = 'block';

    // Use html2pdf to generate PDF
    html2pdf(printableOrder, {
        margin: 0.5,
        filename: `${branch}_${date}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).then(() => {
        // Hide the printable area after PDF generation
        printableOrder.style.display = 'none';
    });
}

function showSweetOrderItems() {
    const branch = document.getElementById('branch').value;
    const sweetItems = sweetInventory[branch];
    const sweetOrderItemsContainer = document.getElementById('sweetOrderItems');
    sweetOrderItemsContainer.innerHTML = '';

    for (const itemName in sweetItems) {
        const item = sweetItems[itemName];
        const itemElement = document.createElement('div');
        itemElement.className = 'selected-item';
        itemElement.innerHTML = `
            <span class="item-name" data-image="${item.imageUrl}">${itemName}</span>
            <div class="quantity-control">
                <button class="quantity-btn" onclick="updateSweetQuantity('${itemName}', -1)">
                    <i class="fas fa-minus"></i>
                </button>
                <input type="number" class="quantity-input" placeholder="On Hand" data-item="${itemName}" value="0">
                <button class="quantity-btn" onclick="updateSweetQuantity('${itemName}', 1)">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
        sweetOrderItemsContainer.appendChild(itemElement);

        // Add click event listener to the item name
        const itemNameElement = itemElement.querySelector('.item-name');
        itemNameElement.addEventListener('click', function() {
            showPopup(this.getAttribute('data-image'));
        });
    }
}

function updateSweetQuantity(itemName, delta) {
    const input = document.querySelector(`input[data-item="${itemName}"]`);
    let currentValue = parseInt(input.value);
    currentValue += delta;
    if (currentValue < 0) {
        currentValue = 0;
    }
    input.value = currentValue;
}

// Existing code for submitting order and updating display
// ...


function submitSweetOrder() {
    const branch = document.getElementById('branch').value;
    const sweetItems = sweetInventory[branch];
    const sweetOrderItemsContainer = document.getElementById('sweetOrderItems');
    const inputs = sweetOrderItemsContainer.querySelectorAll('.quantity-input');

    const creationDate = new Date();
    const creationDayOfWeek = getDayOfWeek(creationDate);
    const creationTime = creationDate.getHours();

    // Determine the order day based on the creation time
    let orderDayOfWeek = creationDayOfWeek;
    let orderDate = new Date(creationDate);
    if (creationTime >= 15) {
        orderDayOfWeek = getNextDayOfWeek(creationDayOfWeek);
        orderDate.setDate(orderDate.getDate() + 1); // Move to the next day
    }

    inputs.forEach(input => {
        const itemName = input.getAttribute('data-item');
        const inventoryOnHand = parseInt(input.value);
    
        const adjustedQuantity = getAdjustedQuantity(itemName, inventoryOnHand, orderDayOfWeek, sweetItems);
    
        if (adjustedQuantity > 0) {
            selectedSweetItems[itemName] = {
                name: itemName,
                quantity: adjustedQuantity
            };
        }
    });
    

    generateSweetOrderPDF(orderDate).then(() => {
        const message = "Sweet Order:\n\n";
        for (const itemName in selectedSweetItems) {
            const item = selectedSweetItems[itemName];
            message += `- ${item.name}: ${item.quantity}\n`;
        }
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://chat.whatsapp.com/Fyoa3jnYx1ZERYB90DkVRX?text=${encodedMessage}`;
        window.open(whatsappUrl);
    });
}

function getAdjustedQuantity(itemName, inventoryOnHand, orderDayOfWeek, sweetItems) {
    const orderQuantity = sweetItems[itemName][orderDayOfWeek];
    let adjustedQuantity = orderQuantity - inventoryOnHand;

    // Ensure the adjusted quantity is not negative
    if (adjustedQuantity < 0) {
        adjustedQuantity = 0;
    }

    // Check if the item has the dozen property
    if (sweetItems[itemName].dozen) {
        let threshold = 4; // Default threshold for most dozen items
        // Special case for 'Date with Cheese'
        if (itemName === 'Date with Cheese - سخان تشيز التمر') {
            threshold = 6;
        }
        
        if (inventoryOnHand >= threshold) {
            adjustedQuantity = orderQuantity - 1;
        } else {
            adjustedQuantity = orderQuantity;
        }
    }

    return adjustedQuantity;
}

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

function getNextDayOfWeek(currentDay) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentIndex = daysOfWeek.indexOf(currentDay);
    const nextIndex = (currentIndex + 1) % 7;
    return daysOfWeek[nextIndex];
}


function generateSweetOrderPDF(orderDate) {
    const branch = document.getElementById('branch').value;
    const username = document.getElementById('username').value;
    const date = orderDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    document.getElementById('pdfSweetBranch').innerText = branch;
    document.getElementById('pdfSweetDate').innerText = `${date} - ${username}`;

    const pdfSweetItemsContainer = document.getElementById('pdfSweetItems');
    pdfSweetItemsContainer.innerHTML = '';

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginBottom = '20px';

    const headerRow = document.createElement('tr');
    ['Item Name', 'Quantity'].forEach(headerText => {
        const th = document.createElement('th');
        th.style.border = '1px solid #000';
        th.style.padding = '8px';
        th.style.backgroundColor = '#7BA084'; // Primary Green
        th.style.color = '#fff';
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    for (const itemName in selectedSweetItems) {
        const item = selectedSweetItems[itemName];
        const row = document.createElement('tr');
        ['name', 'quantity'].forEach(field => {
            const td = document.createElement('td');
            td.style.border = '1px solid #000';
            td.style.padding = '8px';
            td.innerText = item[field];
            row.appendChild(td);
        });
        table.appendChild(row);
    }

    pdfSweetItemsContainer.appendChild(table);

    // Add footer after the table
    const footer = document.createElement('div');
    footer.style.display = 'flex';
    footer.style.justifyContent = 'space-between';
    footer.style.padding = '10px';
    footer.style.backgroundColor = '#466564'; // Secondary Green
    footer.style.color = '#fff';
    footer.style.fontWeight = 'lighter'; // Thinner font
    footer.style.fontSize = '12px'; // Smaller font
    footer.style.width = '100%';

    const leftText = document.createElement('span');
    leftText.innerText = 'Heal Coffee';
    leftText.style.color = '#fff'; // White color

    footer.appendChild(leftText);

    pdfSweetItemsContainer.appendChild(footer);

    const printableSweetOrder = document.getElementById('printableSweetOrder');
    printableSweetOrder.style.display = 'block';

    html2pdf(printableSweetOrder, {
        margin: 0.5,
        filename: `${branch}_${date}_sweet_order.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).then(() => {
        printableSweetOrder.style.display = 'none';
    });
}

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}
