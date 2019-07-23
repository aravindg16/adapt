function BarGraph(ctx) {

      
    var that = this;
    var startArr;
    var endArr;
    var looping = false;

      var draw = function (arr) {
                              
        var numOfBars = arr.length;
        var barWidth;
        var barHeight;
        var border = 2;
        var ratio;
        var maxBarHeight;
        var gradient;
        var largestValue;
        var graphAreaX = 0;
        var graphAreaY = 0;
        var i;
        ctx.canvas.width  = 200;
        ctx.canvas.height = 100;
        
        if(window.innerWidth >= "320") {
            ctx.canvas.width  = 300;
            ctx.canvas.height = 150;
        }

        if(window.innerWidth >= "760") {
            ctx.canvas.width  = 500;
            ctx.canvas.height = 200;
        }

        that.width = ctx.canvas.width
        that.height = ctx.canvas.height
        var graphAreaWidth = ctx.canvas.width;
        var graphAreaHeight = ctx.canvas.height;
                  
        ctx.fillStyle = that.backgroundColor;
        ctx.fillRect(0, 0, that.width, that.height);
                      
        if (that.xAxisLabelArr.length) {
          graphAreaHeight -= 40;
        }
                  
        barWidth = graphAreaWidth / numOfBars - that.margin * 1;
        maxBarHeight = graphAreaHeight - 25;
                  
        var largestValue = 0;
        for (i = 0; i < arr.length; i += 1) {
          if (arr[i] > largestValue) {
            largestValue = arr[i];	
          }
        }
        
        for (i = 0; i < arr.length; i += 1) {
          if (that.maxValue) {
            ratio = arr[i] / that.maxValue;
          } else {
            ratio = arr[i] / largestValue;
          }
          
          barHeight = ratio * maxBarHeight;
        
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          //ctx.shadowColor = "#999";
                          
          ctx.fillStyle = "#fff";			
          ctx.fillRect(that.margin + i * that.width / numOfBars,
            graphAreaHeight - barHeight,
            barWidth,
            barHeight);
              
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.shadowBlur = 0;
  
          if (barHeight > border * 2) {
              gradient = ctx.createLinearGradient(0, 0, 0, graphAreaHeight);
              gradient.addColorStop(1-ratio, that.colors[i % that.colors.length]);
  
              ctx.fillStyle = gradient;
              ctx.fillRect(that.margin + i * that.width / numOfBars + border,
                graphAreaHeight - barHeight + border,
                barWidth - border * 2,
                barHeight - border * 2);
          }
          ctx.fillStyle = "#333";
          ctx.font = "bold 12px sans-serif";
          ctx.textAlign = "center";
          try {
            ctx.fillText(parseInt(arr[i],10),
              i * that.width / numOfBars + (that.width / numOfBars) / 2,
              graphAreaHeight - barHeight - 10);
          } catch (ex) {}
          if (that.xAxisLabelArr[i]) {					

            ctx.font = "bold 12px sans-serif";
            ctx.textAlign = "center";
            try{
              ctx.fillText(that.xAxisLabelArr[i],
                i * that.width / numOfBars + (that.width / numOfBars) / 2,
                that.height - 10);
              } catch (ex) {}
            }
          }
        };
      
    this.width = 500;
    this.height = 300;	
    this.maxValue;
    this.margin = 5;
    this.colors = ["purple", "red", "green", "yellow"];
    this.curArr = [];
    this.backgroundColor = "#fff";
    this.xAxisLabelArr = [];
    this.yAxisLabelArr = [];
    this.animationInterval = 100;
    this.animationSteps = 10;

      this.update = function (newArr) {

        if (that.curArr.length !== newArr.length) {
          that.curArr = newArr;
          draw(newArr);
        }
      }; 
  }