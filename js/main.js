

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