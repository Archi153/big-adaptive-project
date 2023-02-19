const f_slide = document.getElementById("first_slide")
const s_slide = document.getElementById("second_slide")
const t_slide = document.getElementById("third_slide")

function fs(){
    f_slide.style.display = "block";
    s_slide.style.display = 'none';
    t_slide.style.display = 'none';
}
function ss(){
    f_slide.style.display = 'none';
    s_slide.style.display = "block";
    t_slide.style.display = 'none';
}
function ts(){
    f_slide.style.display = 'none';
    s_slide.style.display = 'none';
    t_slide.style.display = "block";
}


/* document.getElementById("pol_btn").onclick=change
function change(){
    this.classList.toggle("clicked");
    if(!this){
        this.classList.remove("clicked")
    }
} */

function group(){
    var el =  document.getElementById("first")
    var node = document.getElementById("additional");
    var display = node.style.display;
    node.style.display = display == "block" ? 'none' : "block";
    if (display == "block"){
        el.style.color = "#333333"
    } 
    else{
        el.style.color = "var(--purple)"
    }
}

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 296;
    if (offset > 592) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 296;
    if (offset < 0) {
        offset = 592;
    }
    sliderLine.style.left = -offset + 'px';
});

let second_offset = 0;
const second_sliderLine = document.querySelector('.second_slider-line');

document.querySelector('.second_slider-next').addEventListener('click', function(){
    second_offset = second_offset + 340;
    if (second_offset > 681) {
        second_offset = 0;
    }
    second_sliderLine.style.left = -second_offset + 'px';
});

document.querySelector('.second_slider-prev').addEventListener('click', function () {
    second_offset = second_offset - 340;
    if (second_offset < 0) {
        second_offset = 681;
    }
    second_sliderLine.style.left = -second_offset + 'px';
});

function toggle_visibility() {
    var e = document.getElementById('feedback-main');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
       
 }


/*  FeedbackForm */

const feedback_form = document.getElementById("feedback_form")

function open_feedback_form(){
  this.feedback_form.style.display = "flex";

}
function close_feedback_form(){
  this.feedback_form.style.display = "none";

}

Checkbox.onchange = function(){
  var button = document.body.getElementsByClassName('send')[0];
  if(button.disabled) button.disabled = false;
  else button.disabled = true;
}


/* search_hub */

const search_hub = document.getElementById("search_hub")

function open_search_hub(){ search_hub.style.display = "block";
}
function close_search_hub(){
  this.search_hub.style.display = "none";
}