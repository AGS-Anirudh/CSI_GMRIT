const statValues=document.querySelectorAll(".number-counter");
const countElement = document.getElementById('count');
const logIn=document.querySelector(".log-in");
var interval=1000;


const parentContainers=document.querySelectorAll('.read-more-container');

logIn.addEventListener("mouseover",function(){
  document.querySelector(".login-a").style.color='white'
})

logIn.addEventListener("mouseout",function(){
  document.querySelector(".login-a").style.color='var(--primary-color)'
})

function updateprogress(){
  const{ scrollTop, scrollHeight}= document.documentElement;
  const scrollpercent=`${(scrollTop/(scrollHeight-window.innerHeight)) *100}%`;

  document.querySelector('.progress-bar').style.width=scrollpercent;

}
document.addEventListener('scroll',updateprogress)


parentContainers.forEach((parent)=>{
    parent.addEventListener('click',e=>{
        const current=e.target; 
        const isReadMoreBtn=current.className.includes('read-more-btn');
    
        if(!isReadMoreBtn) return;
    
        const currentText=e.target.parentNode.querySelector('.read-more-text');
    
        currentText.classList.toggle('read-more-text--show');
    
        current.textContent=current.textContent.includes('Read More') ? "Read Less...":"Read More...";
    })
})




statValues.forEach((value)=>{
    var start=0
    var end=parseInt(value.getAttribute("data-value"))

    let duration=Math.floor(interval/end);
    let counter=setInterval(function(){
        start+=1;
        value.innerHTML=start;

        if(start==end){
            clearInterval(counter)
        }
    },duration*2)
})


window.onload = function() {
  var scrollLinks = document.querySelectorAll('a.scroll-link');
  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = link.getAttribute('href');
      if (document.querySelector(target)) {
        var offset = document.querySelector(target).offsetTop;
                
        window.scrollTo({
          top: offset-100
        });
      }
    });
  });
};
