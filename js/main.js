// 🍀코딩용... 자동으로 가장 밑으로 스크롤시키기
setTimeout(function(){
  window.scrollTo(0, document.body.scrollHeight);
  // window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}, 500);
