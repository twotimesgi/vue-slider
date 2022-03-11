var app = new Vue({
    el: '#root',
    data: {
        timer: null,
      currentImg: 0,
      slidesArray: [
          {
            id: 0,
            title: "Svezia",
          img: "https://picsum.photos/id/201/600/400",
          text: "Subtitle"
        },
        {
            id: 1,
            title: "Svizzera",
          img: "https://picsum.photos/id/206/600/400",
          text: "Subtitle"
        },
        {
            id: 2,
            title: "Gran Bretagna",
          img: "https://picsum.photos/id/204/600/400",
          text: "Subtitle"
        },
        {
            id: 3,
            title: "Germania",
          img: "https://picsum.photos/id/210/600/400",
          text: "Subtitle"
        },
        {
            id: 4,
            title: "Paradise",
          img: "https://picsum.photos/id/217/600/400",
          text: "Subtitle"
        }
      ]
       },
    methods: {
        previous: function(){
          this.currentImg < this.slidesArray.length-1 ? this.currentImg++ : this.currentImg = 0;
      },
      next: function(){
                this.currentImg > 0 ? this.currentImg-- : this.currentImg = this.slidesArray.length - 1;
      },
      setCurrent: function(index){
          this.currentImg = index;
      },
      startTimer: function(){
          this.timer = setInterval(this.previous,4000);
      },
      stopTimer: function(){
          clearInterval(this.timer);
      }
    },
    created(){
        this.timer = setInterval(this.previous,4000);
    }
  });