

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




let show = document.querySelector(".imgPil");




function showpills(cityName) {

  let pills = document.querySelectorAll("." + cityName +` .imgPil`);
  let closBtn = document.querySelector("." + cityName +` .closeBtn`);

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
  }, 500)
  
  mypills.forEach((pill) => {
    setTimeout(()=> {
      pill.style.opacity = '0';
    }, 500)

    setTimeout(()=> {
      pill.style.display = 'none';
    }, 800)

    if(pill.classList.contains("one")) {
      setTimeout(()=> {
        pill.classList.remove("pilone")
      }, 100)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.remove("piltwo")
        
      }, 200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.remove("pilthree")
              }, 300)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.remove("pilfour")
              }, 400)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.remove("pilfive")
              }, 500)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.remove("pilsix")
              }, 600)
      
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
    }, 100)

    if(pill.classList.contains("one")) {
      setTimeout(()=> {
        pill.classList.add("pilone")
      }, 100)
    } else if(pill.classList.contains("two")) {
      setTimeout(()=> {
        pill.classList.add("piltwo")

      }, 200)
  
    } else if(pill.classList.contains("three")) {
      setTimeout(()=> {
        pill.classList.add("pilthree")

      }, 300)
      
    } else if(pill.classList.contains("four")) {
      setTimeout(()=> {
        pill.classList.add("pilfour")

      }, 400)
      
    } else if(pill.classList.contains("five")) {
      setTimeout(()=> {
        pill.classList.add("pilfive")

      }, 500)
      
    }  else if(pill.classList.contains("six")) {
      setTimeout(()=> {
        pill.classList.add("pilsix")

      }, 600)
      
    }

  })

  


}