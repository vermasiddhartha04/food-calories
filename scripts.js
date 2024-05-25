const foodData = {
    "Fruits": {
        "Apple": { calories: 52, protein: 0.3, image: "https://via.placeholder.com/50?text=Apple" },
        "Banana": { calories: 89, protein: 1.1, image: "https://via.placeholder.com/50?text=Banana" },
        "Orange": { calories: 47, protein: 0.9, image: "https://via.placeholder.com/50?text=Orange" },
        "Grapes": { calories: 69, protein: 0.7, image: "https://via.placeholder.com/50?text=Grapes" },
        "Strawberry": { calories: 32, protein: 0.7, image: "https://via.placeholder.com/50?text=Strawberry" },
        "Pineapple": { calories: 50, protein: 0.5, image: "https://via.placeholder.com/50?text=Pineapple" },
        "Mango": { calories: 60, protein: 0.8, image: "https://via.placeholder.com/50?text=Mango" },
        "Watermelon": { calories: 30, protein: 0.6, image: "https://via.placeholder.com/50?text=Watermelon" },
        "Blueberry": { calories: 57, protein: 0.7, image: "https://via.placeholder.com/50?text=Blueberry" },
        "Pear": { calories: 57, protein: 0.4, image: "https://via.placeholder.com/50?text=Pear" },
        "Peach": { calories: 39, protein: 0.9, image: "https://via.placeholder.com/50?text=Peach" },
        "Kiwi": { calories: 61, protein: 1.1, image: "https://via.placeholder.com/50?text=Kiwi" }
    },
    "Vegetables": {
        "Carrot": { calories: 41, protein: 0.9, image: "https://via.placeholder.com/50?text=Carrot" },
        "Broccoli": { calories: 55, protein: 3.7, image: "https://via.placeholder.com/50?text=Broccoli" },
        "Spinach": { calories: 23, protein: 2.9, image: "https://via.placeholder.com/50?text=Spinach" },
        "Tomato": { calories: 18, protein: 0.9, image: "https://via.placeholder.com/50?text=Tomato" },
        "Cucumber": { calories: 16, protein: 0.7, image: "https://via.placeholder.com/50?text=Cucumber" },
        "Potato": { calories: 77, protein: 2, image: "https://via.placeholder.com/50?text=Potato" },
        "Sweet Potato": { calories: 86, protein: 1.6, image: "https://via.placeholder.com/50?text=SweetPotato" },
        "Bell Pepper": { calories: 20, protein: 0.9, image: "https://via.placeholder.com/50?text=BellPepper" },
        "Onion": { calories: 40, protein: 1.1, image: "https://via.placeholder.com/50?text=Onion" },
        "Garlic": { calories: 149, protein: 6.4, image: "https://via.placeholder.com/50?text=Garlic" },
        "Lettuce": { calories: 15, protein: 1.4, image: "https://via.placeholder.com/50?text=Lettuce" },
        "Zucchini": { calories: 17, protein: 1.2, image: "https://via.placeholder.com/50?text=Zucchini" },
        "Pumpkin": { calories: 26, protein: 1, image: "https://via.placeholder.com/50?text=Pumpkin" },
        "Cabbage": { calories: 25, protein: 1.3, image: "https://via.placeholder.com/50?text=Cabbage" },
        "Cauliflower": { calories: 25, protein: 1.9, image: "https://via.placeholder.com/50?text=Cauliflower" }
    },
    "NonVegetarian": {
        "Chicken Breast": { calories: 165, protein: 31, image: "https://via.placeholder.com/50?text=Chicken" },
        "Fish (Salmon)": { calories: 206, protein: 22, image: "https://via.placeholder.com/50?text=Salmon" },
        "Egg": { calories: 78, protein: 6.3, image: "https://via.placeholder.com/50?text=Egg" },
        "Beef": { calories: 250, protein: 26, image: "https://via.placeholder.com/50?text=Beef" },
        "Pork": { calories: 242, protein: 27, image: "https://via.placeholder.com/50?text=Pork" },
        "Turkey": { calories: 135, protein: 30, image: "https://via.placeholder.com/50?text=Turkey" },
        "Shrimp": { calories: 99, protein: 24, image: "https://via.placeholder.com/50?text=Shrimp" },
        "Lamb": { calories: 294, protein: 25, image: "https://via.placeholder.com/50?text=Lamb" },
        "Duck": { calories: 337, protein: 19, image: "https://via.placeholder.com/50?text=Duck" },
        "Crab": { calories: 97, protein: 20, image: "https://via.placeholder.com/50?text=Crab" },
        "Lobster": { calories: 77, protein: 16, image: "https://via.placeholder.com/50?text=Lobster" }
    },
    "Bread": {
        "Whole Wheat Bread": { calories: 247, protein: 13, image: "https://via.placeholder.com/50?text=Whole+Wheat+Bread" },
        "White Bread": { calories: 265, protein: 8, image: "https://via.placeholder.com/50?text=White+Bread" },
        "Sourdough Bread": { calories: 269, protein: 9, image: "https://via.placeholder.com/50?text=Sourdough+Bread" },
        "Rye Bread": { calories: 259, protein: 9, image: "https://via.placeholder.com/50?text=Rye+Bread" },
        "Multigrain Bread": { calories: 250, protein: 11, image: "https://via.placeholder.com/50?text=Multigrain+Bread" },
        "Naan": { calories: 303, protein: 9, image: "https://via.placeholder.com/50?text=Naan" },
        "Roti": { calories: 106, protein: 3, image: "https://via.placeholder.com/50?text=Roti" },
        "Paratha": { calories: 260, protein: 5, image: "https://via.placeholder.com/50?text=Paratha" },
        "Puri": { calories: 101, protein: 2, image: "https://via.placeholder.com/50?text=Puri" },
        "Chapati": { calories: 120, protein: 3, image: "https://via.placeholder.com/50?text=Chapati" },
        "Bhatura": { calories: 220, protein: 5, image: "https://via.placeholder.com/50?text=Bhatura" }
    },
    "Rice": {
        "White Rice": { calories: 130, protein: 2.7, image: "https://via.placeholder.com/50?text=White+Rice" },
        "Brown Rice": { calories: 112, protein: 2.6, image: "https://via.placeholder.com/50?text=Brown+Rice" },
        "Basmati Rice": { calories: 121, protein: 3.5, image: "https://via.placeholder.com/50?text=Basmati+Rice" },
        "Jasmine Rice": { calories: 129, protein: 2.9, image: "https://via.placeholder.com/50?text=Jasmine+Rice" },
        "Wild Rice": { calories: 101, protein: 4, image: "https://via.placeholder.com/50?text=Wild+Rice" }
    },
    "Beans": {
        "Black Beans": { calories: 132, protein: 8.9, image: "https://via.placeholder.com/50?text=Black+Beans" },
        "Kidney Beans": { calories: 127, protein: 8.7, image: "https://via.placeholder.com/50?text=Kidney+Beans" },
        "Chickpeas": { calories: 164, protein: 8.9, image: "https://via.placeholder.com/50?text=Chickpeas" },
        "Lentils": { calories: 116, protein: 9, image: "https://via.placeholder.com/50?text=Lentils" },
        "Pinto Beans": { calories: 143, protein: 9, image: "https://via.placeholder.com/50?text=Pinto+Beans" },
        "Soybeans": { calories: 172, protein: 18, image: "https://via.placeholder.com/50?text=Soybeans" },
        "Green Beans": { calories: 31, protein: 1.8, image: "https://via.placeholder.com/50?text=Green+Beans" },
        "Navy Beans": { calories: 140, protein: 8.2, image: "https://via.placeholder.com/50?text=Navy+Beans" },
        "Fava Beans": { calories: 110, protein: 7.6, image: "https://via.placeholder.com/50?text=Fava+Beans" },
        "Adzuki Beans": { calories: 128, protein: 7.5, image: "https://via.placeholder.com/50?text=Adzuki+Beans" }
    }
};

let totalCalories = 0;
let totalProtein = 0;

function populateFoodItems() {
    const categorySelect = document.getElementById('food-category');
    const foodSelect = document.getElementById('food-select');
    const selectedCategory = categorySelect.value;
    
    // Clear previous options
    foodSelect.innerHTML = '<option value="">Select food item</option>';
    
    if (selectedCategory) {
        const items = foodData[selectedCategory];
        for (const food in items) {
            const option = document.createElement('option');
            option.value = food;
            option.textContent = food;
            foodSelect.appendChild(option);
        }
    }
}

function addFoodItem() {
    const categorySelect = document.getElementById('food-category');
    const foodSelect = document.getElementById('food-select');
    const selectedCategory = categorySelect.value;
    const selectedFood = foodSelect.value;
    
    if (selectedCategory && selectedFood) {
        const foodItem = foodData[selectedCategory][selectedFood];
        
        const foodList = document.getElementById('food-list');
        const foodListItem = document.createElement('li');
        foodListItem.innerHTML = `
            <img src="${foodItem.image}" alt="${selectedFood}">
            <span>${selectedFood} - Calories: ${foodItem.calories} kcal, Protein: ${foodItem.protein} g</span>
        `;
        foodList.appendChild(foodListItem);
        
        totalCalories += foodItem.calories;
        totalProtein += foodItem.protein;
        
        document.getElementById('total-calories').textContent = totalCalories;
        document.getElementById('total-protein').textContent = totalProtein.toFixed(1);
    }
}

document.getElementById('add-food').addEventListener('click', addFoodItem);
document.getElementById('food-category').addEventListener('change', populateFoodItems);
populateFoodItems(); // Initial population of food items
