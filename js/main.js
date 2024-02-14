

const backToTopButton = document.querySelector("#buttonToTop");

backToTopButton.onclick = () =>
  document.documentElement.scroll({
    top: 0,
    behavior: "smooth"
  });

window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    backToTopButton.hidden = false;
  } else {
    backToTopButton.hidden = true;
  }
};








function showpills(cityName) {

  let pilsClaseName = "." + cityName +` .imgPil`;
  let CloselaseName = "." + cityName +` .closeBtn`;

  let pills = document.querySelectorAll(pilsClaseName);
  let closBtn = document.querySelector(CloselaseName);


  let checkExit = document.querySelector(".pilone")
  let result = ""

  // if(checkExit == null){
  //   result = false
  // } else {
  //   result = true
  // }

  // if(result) {
  //   collapse(CloselaseName, pilsClaseName)
  // showMyPills(pills, closBtn)

  // }

  showMyPills(pills, closBtn)

}


function collapse(theCloseBtn, pills) {

  let mypills = document.querySelectorAll(pills);
  let closeBtn = document.querySelector(theCloseBtn);


  closeBtn.style.width = '0';
  closeBtn.style.height = '0';
  
  setTimeout(()=> {
    closeBtn.style.opacity = '0';

  }, 300)


  setTimeout(()=> {
    closeBtn.style.display = 'none';
  }, 400)
  
  mypills.forEach((pill) => {
    setTimeout(()=> {
      pill.style.opacity = '0';
    }, 800)

    setTimeout(()=> {
      pill.style.display = 'none';
    }, 800)

    if(pill.classList.contains("one")) {
      setTimeout(()=> {
        pill.classList.remove("pilone")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.remove("piltwo")
        
      }, 200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.remove("pilthree")
              },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.remove("pilfour")
              },200)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.remove("pilfive")
              },200)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.remove("pilsix")
              },200)
      
    } else if(pill.classList.contains("seven")) {
      setTimeout(()=> {
        pill.classList.remove("pilseven")
      },200)
      
    } else if(pill.classList.contains("eight")) {
      setTimeout(()=> {
        pill.classList.remove("pileight")
      },200)
      
    } else if(pill.classList.contains("nine")) {
      setTimeout(()=> {
        pill.classList.remove("pilnine")
      }, 200)
      
    } else if(pill.classList.contains("ten")) {
      setTimeout(()=> {
        pill.classList.remove("pilten")
      }, 200)
      
    } else if(pill.classList.contains("eleven")) {
      setTimeout(()=> {
        pill.classList.remove("pileleven")
      }, 200)
      
    } else if(pill.classList.contains("twelve")) {
      setTimeout(()=> {
        pill.classList.remove("piltwelve")
      }, 200)
      
    } else if(pill.classList.contains("thirteen")) {
      setTimeout(()=> {
        pill.classList.remove("pilthirteen")
      }, 200)
      
    } else if(pill.classList.contains("fourteen")) {
      setTimeout(()=> {
        pill.classList.remove("pilfourteen")
      }, 200)
      
    } else if(pill.classList.contains("fifteen")) {
      setTimeout(()=> {
        pill.classList.remove("pilfifteen")
      }, 200)
      
    } else if(pill.classList.contains("sixteen")) {
      setTimeout(()=> {
        pill.classList.remove("pilsixteen")
      }, 200)
      
    } else if(pill.classList.contains("seventeen")) {
      setTimeout(()=> {
        pill.classList.remove("pilseventeen")
      }, 200)
      
    } 

  })

  


}



function showMyPills(pills, closBtn) {



  setTimeout(()=> {
    closBtn.style.opacity = '1';
  }, 200)


  setTimeout(()=> {
    closBtn.style.display = 'block';
  }, 400)


  pills.forEach((pill) => {
    pill.style.display = 'block';
    setTimeout(()=> {
      pill.style.opacity = '1';
    }, 200)

    if(pill.classList.contains("one")) {
      
      setTimeout(()=> {
        pill.classList.add("pilone")
      }, 100)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.add("piltwo")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.add("pilthree")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.add("pilfour")

      },200)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.add("pilfive")

      },200)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.add("pilsix")

      },200)
      
    } else if(pill.classList.contains("seven")) {
      setTimeout(()=> {
        pill.classList.add("pilseven")

      },200)
      
    } else if(pill.classList.contains("eight")) {
      setTimeout(()=> {
        pill.classList.add("pileight")

      },200)
      
    } else if(pill.classList.contains("nine")) {
      setTimeout(()=> {
        pill.classList.add("pilnine")

      }, 200)
      
    } else if(pill.classList.contains("ten")) {
      setTimeout(()=> {
        pill.classList.add("pilten")

      }, 200)
      
    } else if(pill.classList.contains("eleven")) {
      setTimeout(()=> {
        pill.classList.add("pileleven")

      }, 200)
      
    } else if(pill.classList.contains("twelve")) {
      setTimeout(()=> {
        pill.classList.add("piltwelve")
      }, 200)
      
    } else if(pill.classList.contains("thirteen")) {
      setTimeout(()=> {
        pill.classList.add("pilthirteen")
      }, 200)
      
    } else if(pill.classList.contains("fourteen")) {
      setTimeout(()=> {
        pill.classList.add("pilfourteen")
      }, 200)
      
    } else if(pill.classList.contains("fifteen")) {
      setTimeout(()=> {
        pill.classList.add("pilfifteen")
      }, 200)
      
    } else if(pill.classList.contains("sixteen")) {
      setTimeout(()=> {
        pill.classList.add("pilsixteen")
      }, 200)
      
    } else if(pill.classList.contains("seventeen")) {
      setTimeout(()=> {
        pill.classList.add("pilseventeen")
      }, 200)
      
    } 

  })

  


}





function showCard(cardName) {
  
  let theCard = document.querySelector("." + cardName);
  let overlay = document.querySelector(`.landMarkCards`);

  overlay.style.display = 'flex';
  theCard.style.display = 'flex';
  setTimeout(()=> {
    overlay.style.opacity = '1';
    theCard.classList.add('showtheCard')
  }, 100)

}





function closeCard(cardName) {

  let theCard = document.querySelector("." + cardName);
  let overlay = document.querySelector(`.landMarkCards`);

  theCard.classList.remove('showtheCard')

  setTimeout(()=> {
    overlay.style.opacity = '0';
    overlay.style.display = 'none';
    theCard.style.display = 'none';
  }, 100)

}





