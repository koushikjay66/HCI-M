

function prepareLocalStorage(inDevelopment){

  hasPrepared = localStorage['prepareLocalStorage'];
  if (hasPrepared != 'done' || inDevelopment){
    console.debug('Initalsing LocalStorage');
    
    // ****  Prepare Local Storage for Home Screen
    // prepare JSON data structure and put in local storage 
    var home_externalLinks = {
      uniba: {
       title: "University of Bamberg",
       href: "http://www.uni-bamberg.de"
      },
      wiai: {
       title: "WIAI.de",
       href: "http://www.wiai.de"
      },
      feki: {
       title: "Feki.de",
       href: "http://www.feki.de"
      }
    };

    


    var studies_links = {
      link_1: {
       title: "Partner Universities",
       href: "https://www.uni-bamberg.de/en/studies/partner-universities/"
      },
      link_2: {
       title: "Living and Studying in Bamberg",
       href: "https://www.uni-bamberg.de/en/studies/living-studying/"
      }
    };

     var research_links_ = {
      link_1: {
       title: "Research Profiles",
       href: "https://www.uni-bamberg.de/en/research/research-profile/"
      }
    };
    
    localStorage.setItem('studies_links_', JSON.stringify(studies_links));
    localStorage.setItem('research_links_', JSON.stringify(research_links_));
    localStorage.setItem('home_externalLinks', JSON.stringify(home_externalLinks));
    
    // ****  Prepare Local Storage for Other Screens
    // you can fill the local storage with your data
    
    // ****  Finally
    localStorage.setItem('prepareLocalStorage', 'done');
  }
  else {
    console.debug('Leaving LocalStorage untouched');
  }
}

