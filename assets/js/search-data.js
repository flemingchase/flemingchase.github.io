// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-writings",
          title: "writings",
          description: "A collection of expository papers and talks given",
          section: "Navigation",
          handler: () => {
            window.location.href = "/writings/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught and their syllabi",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-properties-of-the-score-function",
      
        title: "Properties of the score function",
      
      description: "some more notes on a paper by D. Shlyakhtenko",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/score-function/";
        
      },
    },{id: "post-conditional-expectation-with-respect-to-von-neumann-subalgebras",
      
        title: "Conditional expectation with respect to von-Neumann subalgebras",
      
      description: "some notes on a paper by D. Shlyakhtenko",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/conditional-expectation/";
        
      },
    },{id: "post-random-variables",
      
        title: "Random Variables",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/random-variables-as-staralgebra/";
        
      },
    },];
