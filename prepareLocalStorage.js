
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
      koushik:{

        title: "University of Tuntuni",
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

