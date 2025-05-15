// Food data
const foodData = [
  {
    id: 1,
    image: "public/unsplash_33GPuoFI7v8.png",
    discount: "50%",
    name: "Home made pizza",
    price: "₹190",
    rating: "4.7",
    deliveryTime: "50-79 min",
     
    hasDiscount: false,
  },

  {
    id: 1,
    image: "public/unsplash_60nzTP7_hMQ.png",
    discount: "40%",
    name: "Home made pizza",
    price: "₹180",
    rating: "4.1",
    deliveryTime: "40-60 min",
     
    hasDiscount: true,
  },

  {
    id: 1,
    image: "public/unsplash_CbNAuxSZTFo.png",
    discount: "50%",
    name: "Home made pizza",
    price: "₹175",
    rating: "4.5",
    deliveryTime: "50-70 min",
     
    hasDiscount: false,
  },

  {
    id: 1,
    image: "public/unsplash_MqT0asuoIcU-1.png",
    discount: "50%",
    name: "Home made pizza",
    price: "200",
    rating: "4.9",
    deliveryTime: "50-80 min",
     
    hasDiscount: true,
  },

  {
    id: 1,
    image: "public/unsplash_MqT0asuoIcU.png",
    discount: "50%",
    name: "Home made pizza",
    price: "₹150",
    rating: "4.6",
    deliveryTime: "50-69 min",
     
    hasDiscount: true,
  },

  {
    id: 1,
    image: "public/unsplash_nP11TkjxJ7s.png",
    discount: "50%",
    name: "Home made pizza",
    price: "₹180",
    rating: "4.7",
    deliveryTime: "50-74 min",
     
    hasDiscount: false,
  },

  {
    id: 1,
    image: "public/unsplash_sejqj6Eaqe8.png",
    discount: "50%",
    name: "Home made pizza",
    price: "₹175",
    rating: "4.8",
    deliveryTime: "55-75 min",
     
    hasDiscount: false,
  },

  {
    id: 1,
    image: "public/unsplash_60nzTP7_hMQ.png",
    discount: "45%",
    name: "Home made pizza",
    price: "₹210",
    rating: "4.9",
    deliveryTime: "60-80 min",
     
    hasDiscount: true,
  },

  {
    id: 1,
    image: "public/unsplash_UxRhrU8fPHQ.png",
    discount: "36%",
    name: "Home made pizza",
    price: "₹190",
    rating: "4.7",
    deliveryTime: "70-79 min",
     
    hasDiscount: true,
  },

  {
    id: 1,
    image: "public/unsplash_Y6OgisiGBjM.png",
    discount: "50%",
    name: "Home made pizza",
    price: "₹180",
    rating: "4.4",
    deliveryTime: "60-79 min",
     
    hasDiscount: false,
  },

  {
    id: 1,
    image: "public/unsplash_CbNAuxSZTFo.png",
    discount: "30%",
    name: "Home made pizza",
    price: "₹180",
    rating: "4.2",
    deliveryTime: "55-67 min",
     
    hasDiscount: true,
  },

  {
    id: 1,
    image: "public/unsplash_MqT0asuoIcU.png",
    discount: "50%",
    name: "Home made pizza",
    price: "₹220",
    rating: "4.5",
    deliveryTime: "65-70 min",
     
    hasDiscount: false,
    
  },
  
];

const popularItems = [
  {
    id: 1,
    image: "public/unsplash_nP11TkjxJ7s.png",
    name: "Home made pizza",
    price: "₹180",
    rating: "4.4",
    deliveryTime: "60-79 min",
    
    hasDiscount: false,
    hasCounter: true,
  },

  {
    id: 1,
    image: "public/unsplash_Y6OgisiGBjM.png",
    name: "Home made pizza",
    price: "₹190",
    rating: "4.7",
    deliveryTime: "50-79 min",
    
    hasDiscount: false,
    hasCounter: false,
  },

  {
    id: 1,
    image: "public/unsplash_UxRhrU8fPHQ.png",
    name: "Home made pizza",
    price: "₹210",
    rating: "4.9",
    deliveryTime: "60-80 min",
    
    hasDiscount: false,
    hasCounter: false,
  },

  {
    id: 1,
    image: "public/unsplash_33GPuoFI7v8.png",
    name: "Home made pizza",
    price: "₹175",
    rating: "4.8",
    deliveryTime: "55-75 min",
    
    hasDiscount: false,
    hasCounter: false,
  },

  {
    id: 1,
    image: "public/unsplash_MqT0asuoIcU-1.png",
    name: "Home made pizza",
    price: "₹190",
    rating: "4.7",
    deliveryTime: "50-79 min",
    
    hasDiscount: false,
    hasCounter: false,
  },
  
];



// Function to create a food card
function createFoodCard(item) {
  const card = document.createElement('div');
  card.className = 'food-card';
  
  card.innerHTML = `
    <div class="food-image" style="background-image: url(${item.image})">
      ${item.hasDiscount ? `
        <div class="discount-badge">${item.discount}</div>
      ` : ''}
    </div>
    <div class="food-content">
      <div class="food-header">
        <span class="food-name">${item.name}</span>
        <span class="food-price">${item.price}</span>
      </div>
      <div class="food-footer">
        <div class="rating-delivery">
          <div class="rating">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L10.163 5.279L15 6.017L11.5 9.389L12.326 14L8 11.838L3.674 14L4.5 9.389L1 6.017L5.837 5.279L8 1Z" fill="#FFB800"/>
            </svg>
            ${item.rating}
          </div>
          <div class="delivery-time">${item.deliveryTime}</div>
        </div>
        ${item.hasCounter ? `
          <div class="counter">
            <button class="minus">
              <img src="public/iconoir_add-to-cart-1.svg" alt="Minus" width="20" height="20" style="border-radius: 5px;" />
            </button>
            
            <span class="counter-value">1</span>
            
            <button class="plus">
              <img src="public/iconoir_add-to-cart-2.svg" alt="Plus" width="20" height="20" style="border-radius: 5px;" />
            </button>
          </div>
        ` : `
          <button class="add-to-cart">
            <img src="public/iconoir_add-to-cart-2.svg" width="20" height="20" alt="Add to Cart Icon" style="border-radius: 5px;" />
          </button>
        `}
      </div>
    </div>
  `;
  
  return card;
}

// Initialize food grid
function initFoodGrid() {
  const foodGrid = document.getElementById('foodGrid');
  foodData.forEach(item => {
    foodGrid.appendChild(createFoodCard(item));
  });
}

// Initialize popular items
function initPopularItems() {
  const popularGrid = document.getElementById('popularGrid');
  popularItems.forEach(item => {
    popularGrid.appendChild(createFoodCard(item));
  });
}

// Carousel navigation
function initCarousel() {
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const popularGrid = document.getElementById('popularGrid');
  const cards = popularGrid.querySelectorAll('.food-card');
  let currentIndex = 0; 

  // Function to update the center card shadow
  function updateCenterShadow() {
    cards.forEach((card, index) => {
      card.classList.remove('center');
      
      if (index === currentIndex + 1) {
        card.classList.add('center');
      }
    });
  }

  // Initial shadow on the center card
  updateCenterShadow();

  // Scroll one card to the left
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      const cardWidth = cards[0].offsetWidth + 24; 
      popularGrid.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
      updateCenterShadow();
    }
  });

  // Scroll one card to the right
  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) { 
      currentIndex++;
      const cardWidth = cards[0].offsetWidth + 24;
      popularGrid.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
      updateCenterShadow();
    }
  });
}

// Form submission
function initForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
  });
}

function initVideoPlayer() {
  const video = document.getElementById('serviceVideo');
  const playBtn = document.getElementById('playBtn');

  // Toggle play/pause on video or button click
  function togglePlay() {
    if (video.paused) {
      video.play();
      playBtn.classList.add('hidden');
    } else {
      video.pause();
      playBtn.classList.remove('hidden');
    }
  }

  
  video.addEventListener('click', togglePlay);
  playBtn.addEventListener('click', togglePlay);

  
  video.addEventListener('ended', () => {
    playBtn.classList.remove('hidden');
  });
}

// Request Dish Modal
function initRequestDishModal() {
  const requestBtn = document.getElementById('requestDishBtn');
  const modal = document.getElementById('requestDishModal');
  const cancelBtn = modal.querySelector('.cancel-btn');
  const form = document.getElementById('requestDishForm');

  
  requestBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
  });

  
  cancelBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  });

  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    form.reset(); 
  });
}


// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initFoodGrid();
  initPopularItems();
  initCarousel();
  initForm();
  initVideoPlayer();
  initRequestDishModal();
});