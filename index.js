

  const car = document.getElementById("car");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Cikcak efekt: auto se bude pohybovat doleva a doprava
    const x = Math.sin(scrollY / 80) * 150; // 150px doleva/doprava
    const y = scrollY * 0.5; // rychlost dolů

    car.style.transform = `translate(${x}px, ${y}px)`;
  });