document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".list .item");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0;
    let interval;

    // Hide all items except the first one
   function updateItems() {
        items.forEach((item, index) => {
            item.style.display = index === currentIndex ? "block" : "none";
        });
    }

      /*  function updateItems() {
            items.forEach((item, index) => {
                if (index === currentIndex) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        }
        */

    // Function to move to the next item
    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length; // Loop to first item if at the end
        updateItems();
    }

    // Function to move to the previous item
    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop to last item if at the beginning
        updateItems();
    }

    // Start automatic sliding every 7 seconds
    function startAutoSlide() {
        interval = setInterval(nextItem, 9000);
    }

    // Stop auto-slide when manually clicking buttons, then restart it
    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    // Event listeners for manual navigation
    nextBtn.addEventListener("click", function () {
        nextItem();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", function () {
        prevItem();
        resetAutoSlide();
    });

    // Initialize first item visibility and start auto-sliding
    updateItems();
    startAutoSlide();
});
