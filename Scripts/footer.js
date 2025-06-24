class SmartFooter {
  constructor() {
    this.footer = document.getElementById("smartFooter");
    this.lastScrollTop = 0;
    this.scrollThreshold = 10; // Minimum scroll distance to trigger hide/show
    this.topThreshold = 20; // Distance from top where footer should always be visible
    this.ticking = false;
    this.mobileBreakpoint = 768; // Screen width below which footer stays fixed

    this.init();
  }

  init() {
    this.showFooter();

    window.addEventListener("scroll", () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.handleScroll();
          this.ticking = false;
        });
        this.ticking = true;
      }
    });

    window.addEventListener("load", () => this.handleScroll());
    window.addEventListener("resize", () => this.handleScroll());
  }

  handleScroll() {
    // Check if screen width is below mobile breakpoint
    if (window.innerWidth < this.mobileBreakpoint) {
      this.showFooter(); // Always show footer on mobile
      return;
    }

    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection =
      currentScrollTop > this.lastScrollTop ? "down" : "up";
    const scrollDifference = Math.abs(currentScrollTop - this.lastScrollTop);

    if (currentScrollTop <= this.topThreshold) {
      this.showFooter();
      this.lastScrollTop = currentScrollTop;
      return;
    }

    if (scrollDifference < this.scrollThreshold) {
      return;
    }

    if (scrollDirection === "up") {
      this.showFooter();
    } else if (scrollDirection === "down") {
      this.hideFooter();
    }

    this.lastScrollTop = currentScrollTop;
  }

  showFooter() {
    this.footer.classList.remove("hidden");
  }

  hideFooter() {
    this.footer.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SmartFooter();
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new SmartFooter();
  });
} else {
  new SmartFooter();
}
