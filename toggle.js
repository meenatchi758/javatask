const langData = {
    en: {
      title: "Welcome to our website!",
      description: "This is a sample website."
    },
    es: {
      title: "Bienvenido a nuestro sitio web!",
      description: "Este es un sitio web de ejemplo."
    },
    fr: {
      title: "Bienvenue sur notre site web!",
      description: "Ceci est un site web exemple."
    }
  };
  
  function translateText(lang) {
    const translatableElements = document.querySelectorAll(".translatable");
    translatableElements.forEach((element) => {
      const translateKey = element.getAttribute("data-translate");
      element.textContent = langData[lang][translateKey];
    });
  }
  
 
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      translateText(lang);
    });
  });
  