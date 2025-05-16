const storyPages = [
  {
    text: "Once upon a time, a little cloud named Coco floated high above the world.",
    image: "https://example.com/cloud1.jpg" // Replace with real image URL
  },
  {
    text: "Coco loved watching the world below — children playing, birds flying, flowers blooming.",
    image: "https://example.com/cloud2.jpg"
  },
  {
    text: "One day, Coco saw a thirsty flower wilting in a dry field.",
    image: "https://example.com/flower.jpg"
  },
  {
    text: "Coco shared his rain. The flower bloomed, and Coco smiled.",
    image: "https://example.com/rain.jpg"
  },
  {
    text: "That night, Coco fell asleep in the sky, happy and light.",
    image: "https://example.com/moon.jpg"
  },
  {
    text: "🌟 Moral: Kindness may make you give a little, but it grows something beautiful in return.",
    image: "https://example.com/star.jpg"
  }
];

let currentPage = 0;

function updatePage() {
  const page = storyPages[currentPage];
  document.getElementById("story-text").textContent = page.text;
  const imgDiv = document.getElementById("story-image");
  imgDiv.innerHTML = page.image ? `<img src="${page.image}" alt="Story Image">` : "";
  document.querySelectorAll("button")[0].disabled = currentPage === 0;
  document.querySelectorAll("button")[1].disabled = currentPage === storyPages.length - 1;
}

function nextPage() {
  if (currentPage < storyPages.length - 1) {
    currentPage++;
    updatePage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
}

window.onload = updatePage;
