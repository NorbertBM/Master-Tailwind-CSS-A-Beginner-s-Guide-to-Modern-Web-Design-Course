// Common navigation bar for all pages

function createNav() {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const title = document.querySelectorAll("h1");
  const subTitle2 = document.querySelectorAll("h2");
  const subTitle3 = document.querySelectorAll("h3");
  const nav = document.createElement("nav");
  const isHomePage = document.title === "Home";

  body.classList.add(
    "flex",
    "col-span-1",
    "min-h-screen",
    "container",
    "ml-1",
    "mb-5"
  );
  main.classList.add("container", "mx-2", "flex", "flex-col", "flex-1", "p-2");
  title.forEach((title1) =>
    title1.classList.add(
      "text-7xl",
      "text-center",
      "my-6",
      "font-bold",
      "text-sky-400"
    )
  );
  subTitle2.forEach((subT2) => {
    subT2.classList.add("text-4xl", "text-center", "my-6", "font-medium");
    const hr = document.createElement("hr");
    hr.classList.add("my-2");
    subT2.appendChild(hr);
  });
  subTitle3.forEach((subT3) => {
    subT3.classList.add("text-3xl", "text-center", "my-6");
    const hr = document.createElement("hr");
    hr.classList.add("my-2");
    subT3.appendChild(hr);
  });
  nav.classList.add(
    "flex",
    "flex-col",
    "sticky",
    "top-0",
    "left-0",
    "h-full",
    "justify-between",
    "items-center",
    "p-2",
    "text-slate-400"
  );

  const navBrand = document.createElement("a");
  navBrand.classList.add("text-white", "text-xl", "font-bold");
  // Check if the current page is the home page
  if (isHomePage) {
    navBrand.href = "./index.html";
  } else {
    navBrand.href = "../index.html";
  }

  navBrand.innerText = "Tailwind CSS";
  navBrand.classList.add("text-sky-400");

  const navLinks = document.createElement("div");
  navLinks.classList.add(
    "hidden",
    "md:flex",
    "flex-col",
    "h-full",
    "border",
    "border-0",
    "border-b-2",
    "border-slate-300"
  );

  const links = [
    "01-Typography",
    "02-Sizing",
    "03-Container and Spacing",
    "04-Colors",
    "05-Display and Positioning",
    "06-Backgrounds",
    "07-Borders",
    "08-Effects",
    "09-Filters",
    "10-Transitions",
    "11-Animations",
    "12-Transforms",
    "13-Tables",
    "14-Columns",
    "15-Flexbox",
    "16-Grid system",
    "17-Gird and Flex properties",
    "18-Custom configuration",
    "19-Dark mode",
  ];

  links.forEach((link) => {
    const a = document.createElement("a");
    a.classList.add(
      "mr-1",
      "hover:text-slate-900",
      "block",
      "dark:hover:text-fuchsia-600"
    );
    if (body.classList.contains("dark")) {
      a.classList.add("text-white");
    }
    if (isHomePage) {
      a.href = `./pages/${link.toLowerCase()}.html`;
    } else {
      a.href = `./${link.toLowerCase()}.html`;
    }
    // if the link is the current page, add the active class
    if (document.title === link.replace(/^\d+-/, "")) {
      a.classList.add("text-sky-400", "font-bold");
    }

    a.innerText = link.replace(/^\d+-/, "");
    navLinks.appendChild(a);
  });

  const hamburger = document.createElement("button");
  hamburger.classList.add("md:hidden");
  hamburger.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  `;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
  });

  nav.appendChild(navBrand);
  nav.appendChild(hamburger);
  nav.appendChild(navLinks);
  body.insertBefore(nav, body.firstChild);
}

document.addEventListener("DOMContentLoaded", createNav);

//
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  function randomTextColor() {
    const colors = [
      "text-red-500",
      "text-yellow-500",
      "text-green-500",
      "text-blue-500",
      "text-indigo-500",
      "text-purple-500",
      "text-pink-500",
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }
  if (title && title.innerText === "Typography") {
    const par = document.querySelectorAll("p");
    par.forEach((p) => {
      p.classList.add(`${randomTextColor()}`);
    });
  }
});
