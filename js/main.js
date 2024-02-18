

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


  if(pills.length == 5 ) {
    showMyPillsFive(pills, closBtn)
  }else if(pills.length == 6) {
    showMyPillsSix(pills, closBtn) 
  }else if(pills.length == 7) {
    showMyPillsSeven(pills, closBtn)
  } else if(pills.length == 8) {
    showMyPillsEight(pills, closBtn)
  } else if(pills.length == 4) {
    showMyPillsFour(pills, closBtn)
  }   else if(pills.length == 3) {
    showMyPillsThree(pills, closBtn)
  }   else if(pills.length == 2) {
    showMyPillsTwo(pills, closBtn)
  } else {
    showMyPills(pills, closBtn)
  }
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



    //  Collapse all
  
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



  //  Collapse if Eight thumb 

  mypills.forEach((pill) => {

    pill.style.display = 'block';
    setTimeout(()=> {
      pill.style.opacity = '1';
    }, 200)

    if(pill.classList.contains("one")) {
      
      setTimeout(()=> {
        pill.classList.remove("piloneEightThumb")
        pill.classList.remove("imgPilSizeEight")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.remove("piltwoEightThumb")
        pill.classList.remove("imgPilSizeEight")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.remove("pilthreeEightThumb")
        pill.classList.remove("imgPilSizeEight")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.remove("pilfourEightThumb")
        pill.classList.remove("imgPilSizeEight")

      },200)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.remove("pilfiveEightThumb")
        pill.classList.remove("imgPilSizeEight")

      },200)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.remove("pilSixEightThumb")
        pill.classList.remove("imgPilSizeEight")

      },200)
      
    }  else if(pill.classList.contains("seven")) {
      setTimeout(()=> {
        pill.classList.remove("pilSevenEightThumb")
        pill.classList.remove("imgPilSizeEight")

      },200)
     }  else if(pill.classList.contains("eight")) {
        setTimeout(()=> {
          pill.classList.remove("pilEightEightThumb")
          pill.classList.remove("imgPilSizeEight")
  
        },200) }

  })



  //  Collapse if seven thumb 

  mypills.forEach((pill) => {

    pill.style.display = 'block';
    setTimeout(()=> {
      pill.style.opacity = '1';
    }, 200)



    if(pill.classList.contains("one")) {
      
      setTimeout(()=> {
        pill.classList.remove("piloneSevenThumb")
        pill.classList.remove("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.remove("piltwoSevenThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.remove("pilthreeSevenThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.remove("pilfourSevenThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.remove("pilfiveSevenThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.remove("pilSixSevenThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    }  else if(pill.classList.contains("seven")) {
      setTimeout(()=> {
        pill.classList.remove("pilSevenSevenThumb")
        pill.classList.remove("imgPilSizeSix")

      },200) }

  })



   //  Collapse if Six thumb 

   mypills.forEach((pill) => {
    pill.style.display = 'block';
    setTimeout(()=> {
      pill.style.opacity = '1';
    }, 200)

    if(pill.classList.contains("one")) {
      
      setTimeout(()=> {
        pill.classList.remove("piloneSixThumb")
        pill.classList.remove("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.remove("piltwoSixThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.remove("pilthreeSixThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.remove("pilfourSixThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.remove("pilfiveSixThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.remove("pilsixSixThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } 

  })



   //  Collapse if Five thumb 

   mypills.forEach((pill) => {
    pill.style.display = 'block';
    setTimeout(()=> {
      pill.style.opacity = '1';
    }, 200)

    if(pill.classList.contains("one")) {
      
      setTimeout(()=> {
        pill.classList.remove("piloneFiveThumb")
        pill.classList.remove("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.remove("piltwoFiveThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.remove("pilthreeFiveThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.remove("pilfourFiveThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.remove("pilfiveFiveThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.remove("pilsixFiveThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } 

  })

   //  Collapse if Four thumb 


   mypills.forEach((pill) => {
    pill.style.display = 'block';
    setTimeout(()=> {
      pill.style.opacity = '1';
    }, 200)

    if(pill.classList.contains("one")) {
      
      setTimeout(()=> {
        pill.classList.remove("piloneFourThumb")
        pill.classList.remove("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.remove("piltwoFourThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.remove("pilthreeFourThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.remove("pilfourFourThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } 

  })

   //  Collapse if Three thumb 

  mypills.forEach((pill) => {
    pill.style.display = 'block';
    setTimeout(()=> {
      pill.style.opacity = '1';
    }, 200)

    if(pill.classList.contains("one")) {
      
      setTimeout(()=> {
        pill.classList.remove("piloneThreeThumb")
        pill.classList.remove("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.remove("piltwoThreeThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.remove("pilthreeThreeThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
      
    } 
  })


   //  Collapse if Two thumb 

  mypills.forEach((pill) => {
    pill.style.display = 'block';
    setTimeout(()=> {
      pill.style.opacity = '1';
    }, 200)

    if(pill.classList.contains("one")) {
      
      setTimeout(()=> {
        pill.classList.remove("piloneTwoThumb")
        pill.classList.remove("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.remove("piltwoTwoThumb")
        pill.classList.remove("imgPilSizeSix")

      },200)
  
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
      }, 200)
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



function showMyPillsTwo(pills, closBtn) {

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
        pill.classList.add("piloneTwoThumb")
        pill.classList.add("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.add("piltwoTwoThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
  
    }

  })


}


function showMyPillsThree(pills, closBtn) {

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
        pill.classList.add("piloneThreeThumb")
        pill.classList.add("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.add("piltwoThreeThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.add("pilthreeThreeThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } 

  })


}


function showMyPillsFour(pills, closBtn) {

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
        pill.classList.add("piloneFourThumb")
        pill.classList.add("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.add("piltwoFourThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.add("pilthreeFourThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.add("pilfourFourThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } 

  })


}


function showMyPillsFive(pills, closBtn) {
  

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
        pill.classList.add("piloneFiveThumb")
        pill.classList.add("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.add("piltwoFiveThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.add("pilthreeFiveThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.add("pilfourFiveThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.add("pilfiveFiveThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.add("pilsixFiveThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } 

  })


}


function showMyPillsSix(pills, closBtn) {

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
        pill.classList.add("piloneSixThumb")
        pill.classList.add("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.add("piltwoSixThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.add("pilthreeSixThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.add("pilfourSixThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.add("pilfiveSixThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.add("pilsixSixThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } 

  })


}


function showMyPillsSeven(pills, closBtn) {

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
        pill.classList.add("piloneSevenThumb")
        pill.classList.add("imgPilSizeSix")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.add("piltwoSevenThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.add("pilthreeSevenThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.add("pilfourSevenThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.add("pilfiveSevenThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.add("pilSixSevenThumb")
        pill.classList.add("imgPilSizeSix")

      },200)
      
    }  else if(pill.classList.contains("seven")) {
      setTimeout(()=> {
        pill.classList.add("pilSevenSevenThumb")
        pill.classList.add("imgPilSizeSix")

      },200) }

  })

}

function showMyPillsEight(pills, closBtn) {

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
        pill.classList.add("piloneEightThumb")
        pill.classList.add("imgPilSizeEight")
      }, 200)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.add("piltwoEightThumb")
        pill.classList.add("imgPilSizeEight")

      },200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.add("pilthreeEightThumb")
        pill.classList.add("imgPilSizeEight")

      },200)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.add("pilfourEightThumb")
        pill.classList.add("imgPilSizeEight")

      },200)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.add("pilfiveEightThumb")
        pill.classList.add("imgPilSizeEight")

      },200)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.add("pilSixEightThumb")
        pill.classList.add("imgPilSizeEight")

      },200)
      
    }  else if(pill.classList.contains("seven")) {
      setTimeout(()=> {
        pill.classList.add("pilSevenEightThumb")
        pill.classList.add("imgPilSizeEight")

      },200)
     }  else if(pill.classList.contains("eight")) {
        setTimeout(()=> {
          pill.classList.add("pilEightEightThumb")
          pill.classList.add("imgPilSizeEight")
  
        },200) }

  })

}


function showCard(cardName) {
  
  let theCard = document.querySelector("." + cardName);
  let overlay = document.querySelector(`.landMarkCards`);



  if(theCard !== null ) {
    overlay.style.display = 'flex';
    theCard.style.display = 'flex';
    setTimeout(()=> {
      overlay.style.opacity = '1';
      theCard.classList.add('showtheCard')
    }, 100)
  }

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





