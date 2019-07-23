const targets = document.querySelectorAll("[data-lazy]");

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    entries.forEach((entry) => {
      console.log("😍");

      if (entry.isIntersecting) {
        const img = entry.target;
        console.log(img);
        const src = img.getAttribute("data-lazy");

        img.setAttribute("src", src);
        /* img.classList.add("fade"); */

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);
