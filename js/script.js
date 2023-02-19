console.log("Hello world!");
const myName = "Zain Jamil";
const h1 = document.querySelector(".heading-primary");

// console.log(myName);
// console.log(h1);

// h1.addEventListener("click", changeBackground);

// function changeBackground() {
//   h1.textContent = "Zain Jamil";
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// }

// To select the current year
const yearEl = document.querySelector(".year");
// yearEl.textContent = "3000";
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
console.log(yearEl);

// To make the mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Scroll animation

// Select all links
const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

// Assign event listener to EACH link
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // Scroll to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other sections
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
// console.log(sectionHeroEl);

const obs = new IntersectionObserver(
  function (entries) {
    // ent me threshold value jayegi pehli, ek hi value hai means wohi jayegi
    const ent = entries[0];

    // console.log(ent);

    // isIntersecting false tab hoga jb section-hero viewport se gayab hojaega, islye ye condition use ki
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting == true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // Here null means viewport, means viewport me wo element kahan par hai
    root: null,

    // threshold basically means condition, jis par humein koi event occur krwana hai.
    // Here threshold 0 means k jb section-hero 0% visible ho VIEWPORT me, tb occur ho event
    threshold: 0,

    // The rootMargin will be added to the container viewport so in essence we can shrink/grow our view port with this value. (shrink in this case)
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
