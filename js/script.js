var root = new Vue({
    el: '#root',
    data: {
      timer: null,
      currentSlide: 0,
      slidesArray: [
        {
              title:'Svezia',
              text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
              items:'img/01.jpg'
        },
        {
            title:'Svizzera',
            text:'Lorem ipsum',
            items:'img/02.jpg'
        },
        {
            title:'Gran Bretagna',
            text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            items:'img/03.jpg'
        },
        {
            title:'Germania',
            text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            items:'img/04.jpg'
        },
        {
            title:'Paradise',
            text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            items:'img/05.jpg'
        }
      ]
    },
    methods:{
        next: function(){
            if(this.currentSlide < this.slidesArray.length - 1) this.currentSlide++;
        },
        prev: function(){
            if(this.currentSlide > 0) this.currentSlide--;
        },
        startTimer: function(){
            this.timer = setInterval(this.next,4000);
        },
        stopTimer: function(){
            clearInterval(this.timer);
        }
    },
    created(){
        this.startTimer();
    }
  })