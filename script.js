// CUSTOMIZE: Add your own reasons here! You can add as many as you want (20-40 is a good range)
// Add image paths to the 'image' property for each reason (e.g., "images/reason1.jpg" or "https://example.com/image.jpg")
const reasons = [
    {
        title: "Du bryr dig om alla",
        text: "Du bryr dig om alla du känner och alla du inte känner på ett sätt jag aldrig sett tidigare. Det är helt otroligt, nästan så att det inte går att förstå.",
        category: "Hjärta",
        image: "images/reason1.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Hur du tar hand om människor",
        text: "Du ser alla för den dem är. Du vill att alla ska må bra och det är en egenskap jag inspireras av.",
        category: "Små saker",
        image: "images/reason2.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Hur du ser på mig",
        text: "När du tittar på mig på ett visst sätt, känner jag mig sett och älskad på ett sätt jag aldrig trodde var möjligt.",
        category: "Hjärta",
        image: "images/reason3.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Din empati",
        text: "Du förstår mig på ett sätt som få andra gör och du bryr dig verkligen om hur jag mår. Det älskar jag verkligen med dig.",
        category: "Stöd",
        image: "images/reason4.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Ditt sätt att vara",
        text: "Det känn som att du är dig själv när vi är tillsammans och det är alldeles underbart. Det gör att jag kan vara mig själv när jag är med dig och det är så värdefullt.",
        category: "Små saker",
        image: "images/reason5.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Hur du fixar och fixar och fixar",
        text: "Du lägger verkligen tid på de du bryr sig om, och det syns. Små presenter, små handlingar, små saker som får oss att minnas vilken fantastisk person du är.",
        category: "Stöd",
        image: "images/reason6.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Ditt flit och arbetssinne",
        text: "Du är en person som inte ger upp, utan fortsätter att arbeta även i motvind. Det är få kämpar som du gör och det går inte osett.",
        category: "Små saker",
        image: "images/reason7.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Hur du resonerar och tänker",
        text: "Du har båda fötterna på jorden och är någon man kan luta sig mot när man behöver. Du kan sätta ord på sådant som är svårt och ibland jobbigt att prata om. Du förstår mig och det gör mig så glad.",
        category: "Hjärta",
        image: "images/reason8.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Den förebild du är",
        text: "Du är en förebild för många. Sätter du är, sätter du beter dig och hur du hanterar människor är något vi alla ser upp till. Jag är säker på att det är många som drömmer om att vara som du.",
        category: "Stöd",
        image: "images/reason9.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Hur får mig att skratta",
        text: "Du är bra rolig du. Du kan få mig att skratta även när jag inte är på humör och det är så värdefullt.",
        category: "Hjärta",
        image: "images/reason10.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Hur du lyssnar",
        text: "Du kan rikta din fulla uppmärksamhet när någon pratar och det märks verkligen av när man pratar med dig.",
        category: "Stöd",
        image: "images/reason11.jpg" // CUSTOMIZE: Add your image path here
    },
    {
        title: "Ditt sätt att vara",
        text: "Du är och agerar med hela ditt hjärta och det märks i allt du gör. Man får nypa sig i armen ibland för man tror inte det är sant.",
        category: "Hjärta",
        image: "images/reason12.jpg" // CUSTOMIZE: Add your image path here
    }
];

// Render all reasons into the grid
function renderReasons() {
    const grid = document.getElementById('reasons-grid');
    
    if (!grid) return;
    
    grid.innerHTML = reasons.map((reason, index) => {
        return `
            <div class="reason-card">
                <div class="reason-image">
                    <img src="${reason.image}" alt="${reason.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="image-placeholder" style="display: none;">
                        <span>📷</span>
                        <p>Lägg till bild</p>
                    </div>
                </div>
                <div class="reason-content">
                    <h3 class="reason-title">${reason.title}</h3>
                    <p class="reason-text">${reason.text}</p>
                </div>
            </div>
        `;
    }).join('');
}

// CUSTOMIZE: Add your carousel images here (18 images total)
const carouselImages = [
    //"images/carousel1.jpg",
    "images/carousel2.jpg",
    "images/carousel3.jpg",
    "images/carousel4.jpg",
    "images/carousel5.jpg",
    "images/carousel6.jpg",
    "images/carousel7.jpg",
    "images/carousel8.jpg",
    "images/carousel9.jpg",
    "images/carousel10.jpg",
    "images/carousel11.jpg",
    "images/carousel12.jpg",
    "images/carousel13.jpg",
    "images/carousel14.jpg",
    "images/carousel15.jpg",
    "images/carousel16.jpg",
    "images/carousel17.jpg",
    "images/carousel18.jpg"
];

let carouselPosition = 0;
let carouselAutoScroll = true;
let carouselInterval = null;

// Render carousel images
function renderCarousel() {
    const track = document.getElementById('carousel-track');
    
    if (!track) return;
    
    // Duplicate images for seamless loop
    const allImages = [...carouselImages, ...carouselImages];
    
    track.innerHTML = allImages.map((imageSrc, index) => {
        return `
            <div class="carousel-slide">
                <img src="${imageSrc}" alt="Carousel image ${index + 1}" onerror="this.style.display='none';">
            </div>
        `;
    }).join('');
    
    // Setup carousel controls
    setupCarouselControls();
}

// Setup carousel manual controls
function setupCarouselControls() {
    const track = document.getElementById('carousel-track');
    const slider = document.getElementById('carousel-slider');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    if (!track || !slider || !prevBtn || !nextBtn) return;
    
    const slideWidth = 320; // 300px width + 20px gap
    const totalSlides = carouselImages.length;
    const maxPosition = totalSlides * slideWidth;
    let isManualControl = false;
    
    // Update carousel position
    function updateCarouselPosition(position, updateSlider = true) {
        carouselPosition = position;
        
        // Handle seamless loop
        if (carouselPosition >= maxPosition) {
            carouselPosition = 0;
        } else if (carouselPosition < 0) {
            carouselPosition = maxPosition - slideWidth;
        }
        
        // Disable CSS animation and use transform for manual control
        if (isManualControl) {
            track.style.animation = 'none';
            track.style.transform = `translateX(-${carouselPosition}px)`;
        }
        
        if (updateSlider) {
            const sliderValue = (carouselPosition / maxPosition) * 100;
            slider.value = sliderValue;
        }
    }
    
    // Previous button
    prevBtn.addEventListener('click', function() {
        isManualControl = true;
        track.style.animation = 'none';
        updateCarouselPosition(carouselPosition - slideWidth);
        
        // Resume auto-scroll after 3 seconds of no interaction
        setTimeout(() => {
            if (isManualControl) {
                isManualControl = false;
                track.style.animation = 'scroll 20s linear infinite';
                track.style.transform = '';
            }
        }, 3000);
    });
    
    // Next button
    nextBtn.addEventListener('click', function() {
        isManualControl = true;
        track.style.animation = 'none';
        updateCarouselPosition(carouselPosition + slideWidth);
        
        // Resume auto-scroll after 3 seconds of no interaction
        setTimeout(() => {
            if (isManualControl) {
                isManualControl = false;
                track.style.animation = 'scroll 20s linear infinite';
                track.style.transform = '';
            }
        }, 3000);
    });
    
    // Slider control
    let sliderTimeout;
    slider.addEventListener('input', function() {
        isManualControl = true;
        track.style.animation = 'none';
        const position = (this.value / 100) * maxPosition;
        updateCarouselPosition(position, false);
        
        // Clear previous timeout
        clearTimeout(sliderTimeout);
        
        // Resume auto-scroll after 3 seconds of no interaction
        sliderTimeout = setTimeout(() => {
            if (isManualControl) {
                isManualControl = false;
                track.style.animation = 'scroll 20s linear infinite';
                track.style.transform = '';
            }
        }, 3000);
    });
    
    // Pause auto-scroll on hover (CSS handles this, but we keep it for consistency)
    track.addEventListener('mouseenter', function() {
        track.style.animationPlayState = 'paused';
    });
    
    track.addEventListener('mouseleave', function() {
        if (!isManualControl) {
            track.style.animationPlayState = 'running';
        }
    });
}

// CUSTOMIZE: Add your map markers here
// Each marker has: city name, latitude/longitude coordinates, and description text
const mapMarkers = [
    {
        city: "Paris",
        lat: 48.8566,
        lng: 2.3522,
        text: "Besöka Eiffeltornet tillsammans och kyssas på Pont de Arts."
    },
    {
        city: "New York",
        lat: 40.7128,
        lng: -74.0060,
        text: "Gå på Broadway-show och äta pizza i Central Park."
    },
    {
        city: "Reykjavik",
        lat: 64.1466,
        lng: -21.9426,
        text: "Se norrsken, bada i Geysir och utforska isländsk natur tillsammans."
    },
    {
        city: "Rom",
        lat: 41.9028,
        lng: 12.4964,
        text: "Besöka Colosseum, äta autentisk pasta och gå hand i hand genom historiska gator."
    },
    {
        city: "Singapore",
        lat: 1.3521,
        lng: 103.8198,
        text: "Upptäcka den fascinerande mixen av kulturer, äta street food och se staden från Marina Bay."
    },
    {
        city: "Tokyo",
        lat: 35.6762,
        lng: 139.6503,
        text: "Upptäcka japansk kultur, äta sushi (en av oss i alla fall) och njuta av staden."
    },
    {
        city: "Amalfikusten",
        lat: 40.6340,
        lng: 14.6027,
        text: "Se de vackra kuststäderna, äta skaldjurspasta vid havet och njuta av den italienska kusten."
    },
    {
        city: "Aten",
        lat: 37.9838,
        lng: 23.7275,
        text: "Besöka Akropolis, utforska antikens Grekland och njuta av tzatziki i mängder."
    },
    {
        city: "Barcelona",
        lat: 41.3851,
        lng: 2.1734,
        text: "Se Gaudi's arkitektur, gå längs La Rambla och äta tapas i den katalanska staden."
    },
    {
        city: "Rio de Janeiro",
        lat: -22.9068,
        lng: -43.1729,
        text: "Besöka Copacabana, se solnedgången från Sugarloaf Mountain och kanske dansa samba tillsammans."
    },
    {
        city: "Kapstaden",
        lat: -33.9249,
        lng: 18.4241,
        text: "Åka på safari, besöka vinodlingar (eller...?) och utforska den vackra sydafrikanska kusten."
    },
    {
        city: "Sydney",
        lat: -33.8688,
        lng: 151.2093,
        text: "Beskåda Operahuset, gå över Harbour Bridge och njuta av den australiska kuststaden med alla kängurus."
    }
];

let mapProjection = null;
let mapSvg = null;

// Render world map with D3.js
function renderWorldMap() {
    const svg = d3.select("#world-map-svg");
    const container = d3.select(".map-background");
    
    if (svg.empty()) return;
    
    const width = container.node().offsetWidth;
    const height = container.node().offsetHeight;
    
    // Clear previous map
    svg.selectAll(".country").remove();
    
    // Set SVG dimensions
    svg.attr("width", width).attr("height", height);
    
    // Create projection
    mapProjection = d3.geoNaturalEarth1()
        .scale(width / 6.5)
        .translate([width / 2, height / 2]);
    
    const path = d3.geoPath().projection(mapProjection);
    
    // Load world map GeoJSON
    d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
        .then(function(world) {
            // Draw countries
            svg.selectAll(".country")
                .data(world.features)
                .enter()
                .append("path")
                .attr("class", "country")
                .attr("d", path)
                .attr("fill", "rgba(255, 107, 157, 0.25)")
                .attr("stroke", "rgba(255, 107, 157, 0.9)")
                .attr("stroke-width", "1.5");
            
            // Render markers after map is loaded
            renderMapMarkers();
        })
        .catch(function(error) {
            console.error("Error loading map:", error);
            // Fallback: try TopoJSON source
            d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
                .then(function(world) {
                    // Convert TopoJSON to GeoJSON
                    const countries = topojson.feature(world, world.objects.countries);
                    
                    // Draw countries
                    svg.selectAll(".country")
                        .data(countries.features)
                        .enter()
                        .append("path")
                        .attr("class", "country")
                        .attr("d", path)
                        .attr("fill", "rgba(255, 107, 157, 0.25)")
                        .attr("stroke", "rgba(255, 107, 157, 0.9)")
                        .attr("stroke-width", "1.5");
                    
                    renderMapMarkers();
                })
                .catch(function(error2) {
                    console.error("Error loading fallback map:", error2);
                    renderMapMarkers();
                });
        });
}

// Render map markers
function renderMapMarkers() {
    const mapBackground = document.querySelector('.map-background');
    
    if (!mapBackground || !mapProjection) {
        // If projection not ready, try again after a short delay
        setTimeout(renderMapMarkers, 100);
        return;
    }
    
    // Clear existing markers
    const existingMarkers = mapBackground.querySelectorAll('.map-marker');
    existingMarkers.forEach(marker => marker.remove());
    
    // Add markers
    mapMarkers.forEach((marker) => {
        const [x, y] = mapProjection([marker.lng, marker.lat]);
        
        if (x && y && !isNaN(x) && !isNaN(y)) {
            const markerDiv = document.createElement('div');
            markerDiv.className = 'map-marker';
            markerDiv.style.left = x + 'px';
            markerDiv.style.top = y + 'px';
            markerDiv.innerHTML = `
                <div class="marker-pin"></div>
                <div class="marker-tooltip">
                    <h4>${marker.city}</h4>
                    <p>${marker.text}</p>
                </div>
            `;
            mapBackground.appendChild(markerDiv);
        }
    });
}

// Handle window resize for map
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        if (mapProjection) {
            renderWorldMap();
        }
    }, 250);
});

// Christmas gift open interaction
function setupPaperDrag() {
    const giftLid = document.getElementById('gift-lid');
    
    if (!giftLid) return;
    
    let isOpened = false;
    
    function openGift() {
        if (isOpened) return;
        
        isOpened = true;
        giftLid.classList.add('opened');
    }
    
    // Click to open
    giftLid.addEventListener('click', openGift);
    
    // Touch support
    giftLid.addEventListener('touchend', function(e) {
        e.preventDefault();
        openGift();
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render all reasons
    renderReasons();
    
    // Render carousel
    renderCarousel();
    
    // Render world map (markers will be rendered after map loads)
    renderWorldMap();
    
    // Setup paper drag interaction
    setupPaperDrag();
});

