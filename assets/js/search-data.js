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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-a-simple-computation",
      
        title: "A simple computation",
      
      description: "the Fock state&#39;s action on Weyl Operators",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/simplecomputation/";
        
      },
    },];
