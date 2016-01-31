window.onload=function(){//先获取元素
	var pingpairight2=getClass("pingpairight2");//集合
	var pingpainavleft1=getClass("pingpainavleft1");
	//alert(pingpairight2);
	for(var i=0;i<pingpairight2.length;i++){

		pingpairight2[i].index=i;//index保存相应对象i的变化的·值
		//每一个标题添加单击事件
		pingpairight2[i].onclick=function(){
			for(var j=0;j<pingpainavleft1.length;j++){
				pingpainavleft1[j].style.display="none";
				pingpairight2[j].style.fontWeight="normal";
				pingpairight2[j].style.textDecoration="none";
			}//j用this.index代替
			pingpainavleft1[this.index].style.display="block";
			this.style.fontWeight="bold";
			this.style.textDecoration="underline";
		}
	}








  
//***********************************************************
	var pingpainavleft4=getClass("pingpainavleft4");
	var xin=getClass("xin");
	for(var i=0;i<pingpainavleft4.length;i++){
		pingpainavleft4[i].index=i;
		pingpainavleft4[i].onmouseover=function(){
		xin[this.index].style.display="block";
	    }
	    pingpainavleft4[i].onmouseout=function(){
		xin[this.index].style.display="none";
	    }
	}


//**************************************************************        
          var bannerone=$(".bannerone");//事件源
          var btn=$(".btn");
          var num=0;//下标
          var banner=$(".banner-box")[0];
          var bigarr=["#51b598","#c3c8c8","#fffc00","#c3c8c8","#9f18f5"]
          function move(){
                if(num==5){
                  num=0;
                }
                for(var i=0;i<bannerone.length;i++){
                        bannerone[i].style.zIndex=3;
                        btn[i].style.background="#ccc"
                }
                bannerone[num].style.zIndex=4;
                btn[num].style.background="black";
                banner.style.background=bigarr[num];
                num++; //4
                }
                var t=setInterval(move,2000);
                for(var i=0;i<btn.length;i++){
                        btn[i].index=i;
                        btn[i].onmouseover=function(){
                          for(var j=0;j<bannerone.length;j++){
                                bannerone[j].style.zIndex=3;
                                btn[j].style.background="#ccc";
                          }
                              clearInterval(t);
                              bannerone[this.index].style.zIndex=4;
                              btn[this.index].style.background="black";
                              banner.style.background=bigarr[this.index];
                        }
                        btn[i].onmouseout=function(){
                                t=setInterval(move,2000);
                                num=this.index+1;
                        }
                }
 //*********************************************************************
   var tex=$("#tex");
            //原理：表单获得焦点时，如果value值为默认值，则清空；表单失去焦点，如果value值为空时，变为默认值
          tex.onfocus=function(){//表单获得焦点事件
            if(tex.value=="猫猫狗狗购物狂欢，给它最好的"){
               tex.value="";
              }
          }
          tex.onblur=function(){//表单失去焦点事件
            if(tex.value){

            }else{
              tex.value="猫猫狗狗购物狂欢，给它最好的";
            }  
          }       

//******************************************
      var search=$(".search")[0];
      var flag=true;
      var flag1=true;//0--440  440-3000
      var floors=$(".one");

      var jump=$(".jump")[0];
        var btnl=$("li",jump);
        //alert(floors[1].offsetTop)

//按钮控制滚动条
        for(var i=0;i<btnl.length;i++){
          btnl[i].index=i;
          btnl[i].onclick=function(){
                //alert(floors[this.index].t)
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                //var scrollT=getScrollT();
                //obj.scrollTop=floors[this.index].t;
                animate(obj,{scrollTop:floors[this.index].t})//当前按钮的对应楼层的top赋值给滚动条
          }
        }

      window.onscroll=function(){
        //搜索框的显示与隐藏
        var scrollT=getScrollT();
        if(scrollT>=1100){
          if(flag){//为了保证页面往下拉时只有一个animate函数执行
            animate(search,{top:0},500);
            flag=false;
            flag1=true;
          }           
        }else{
                if(flag1){
                  animate(search,{top:-50});
                  flag1=false;
                  flag=true;
                }         
        }


        //楼层跳转
          if(scrollT>=1100&&scrollT<=6400){
            jump.style.display="block";
          }else{
            jump.style.display="none";
          }
//滚动条控制按钮
            for(var i=0;i<floors.length;i++){
              floors[i].t=floors[i].offsetTop;//
              if(floors[i].t<=scrollT){//如果scrollTop大于当前楼层的top
                //alert(11111)
                for(var j=0;j<btnl.length;j++){
                  btnl[j].style.color="black";
                }
                btnl[i].style.color="red";
              }
              //floors[i].index=i;
            }


      }
//*********************************************************
//侧栏翻转
function getLunbo(num){
    var lunbobox2=$(".lunbobox3")[num];
      var btnleft=$(".btnleft")[num];
      var btnright=$(".btnright")[num];
        function moveleft(){
            animate(lunbobox2,{left:-90},600,Tween.Linear,function(){
                //2把第一个放到最后
              lunbobox2.appendChild(getFirst(lunbobox2));
              //3拉回来
              lunbobox2.style.left=0+"px";
            });  
        }
        function moveright(){
          var last=getLast(lunbobox2);
          lunbobox2.insertBefore(last,getFirst(lunbobox2));
          lunbobox2.style.left=-90+"px";
          animate(lunbobox2,{left:0},600,Tween.Linear)
        }
        var t=setInterval(moveleft,2000);
        btnright.onmouseover=btnleft.onmouseover=function(){
          clearInterval(t);
        }
        btnright.onmouseout=btnleft.onmouseout=function(){
          t=setInterval(moveleft,2000);
        }
          btnleft.onclick=function(){
            moveright();
          }
          btnright.onclick=function(){
            moveleft();
          }
}
for(var i=0;i<6;i++){
  getLunbo(i);
}
   
//*****************************************************


function getLeftmove(num){
  var moveleft=$(".two-left2")[num];
  var moveimg=$("img",moveleft);
  for(var i=0;i<moveimg.length;i++){
      moveimg[i].index=i;
      moveimg[i].onmouseover=function(){
        moveimg[this.index].style.cssText="position:relative;left:-5px";
      }
      moveimg[i].onmouseout=function(){
        moveimg[this.index].style.cssText="position:relative;left:0px";
      }
  }
}
for(var j=0;j<12;j++){
  getLeftmove(j);
}


/*var movel=$(".two-left2");
var moveimg=$("img",movel);

  //var moveleft=$(".oneleft2")[aa];
  //var moveimg=$(".moveimg",moveleft);  
    for(var i=0;i<moveimg.length;i++){
      moveimg[i].index=i;
      moveimg[i].onmouseover=function(){
        moveimg[this.index].style.cssText="position:relative;left:-5px";
      }
      moveimg[i].onmouseout=function(){
        moveimg[this.index].style.cssText="position:relative;left:0px";
      }
  }*/
  //鼠标滑上移动
 /* var yidong=$(".one-left2");
  for(var i=0;i<yidong.length;i++)
  { 
    yidong[i].index=i;
    yidong[i].onmouseover=function()
    {
      yidong[this.index].style.left=-2+"px";
      yidong[this.index].style.top=-2+"px";
      // yidong[this.index].style.boxShadow=0+"px";5+"px";20+"px";"red";
    }
    yidong[i].onmouseout=function()
    {
      yidong[this.index].style.left=0+"px";
      yidong[this.index].style.top=0+"px";
    }
  }*/
  /*var yidongtwo=$(".one-left4");
  for(var i=0;i<yidongtwo.length;i++)
  { 
    yidongtwo[i].index=i;
    yidongtwo[i].onmouseover=function()
    {
      yidongtwo[this.index].style.left=-2+"px";
      yidongtwo[this.index].style.top=-2+"px";
    }
    yidongtwo[i].onmouseout=function()
    {
      yidongtwo[this.index].style.left=0+"px";
      yidongtwo[this.index].style.top=0+"px";
    }
  }*/
//右侧固定导航动效
var cenavlist=$(".cenavlist");
  var yinxiao=$(".yinxiao");
  var cenavlistdalibao=$(".cenavlistdalibao")[0];
  var yinerweima=$(".yinerweima")[0];
  var fanhuidingbu=$(".fanhuidingbu")[0];
  for(var i=0;i<cenavlist.length;i++)
  { 
    cenavlist[i].index=i;
    cenavlist[i].onmouseover=function()
    {
      cenavlist[this.index].style.background="red";
      animate(yinxiao[this.index],{right:30,opacity:1},300,Tween.Linear);
      yinxiao[this.index].style.display="block";
    }
    cenavlist[i].onmouseout=function()
    { 
      /*for(var j=0;j<yinxiao.length;j++)
      { 
        yinxiao[j].index=j;*/
        cenavlist[this.index].style.background="black";
        animate(yinxiao[this.index],{right:60,opacity:0},200,Tween.Linear/*,function()
          {
            yinxiao[this.index].style.display="none";
          }*/);
        
      // }
        
    }
  }
  cenavlistdalibao.onmouseover=function()
  {
    cenavlistdalibao.style.background="red";
    yinerweima.style.display="block";
  }
  cenavlistdalibao.onmouseout=function()
  {
    cenavlistdalibao.style.background="black";
    yinerweima.style.display="none";
  }

//****************************************************
//下拉框
      var yiji=$(".yiji");
      var erji=$(".erji");
      for(var i=0;i<yiji.length;i++){
        yiji[i].index=i;
        hover(yiji[i],function(){
          var lis=$("li",erji[this.index]);
          var h=lis[0].offsetHeight;
          erji[this.index].style.height=0+"px";
          animate(erji[this.index],{height:lis.length*h},600,Tween.Linear);
        },function(){
                animate(erji[this.index],{height:0},600,Tween.Linear);
        })
      }

//网站导航下拉框
      var wangzhan=$(".wangzhan")[0];
      var wangzhan1=$(".wangzhan1")[0];
      hover(wangzhan,function(){
        wangzhan1.style.height=0+"px";
        animate(wangzhan1,{height:300},600,Tween.Linear);
      },function(){
        animate(wangzhan1,{height:0},600,Tween.Linear);
      })

//**********************************************************
//侧栏滑动
/*  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  obj.scrollTop=0;
  var caidanc=getClass("caidanc");
  var caidans=getClass("caidans");
  var yanse1=["#fff701","#e0e0e0","#73eac4","#b917f8","#e4e4e4","#e0e0e0","#73eac4","#b917f8","#e4e4e4","#fff701","#b917f8","#e4e4e4","#fff701","#e0e0e0","#73eac4"]
  var xiao1=getClass('xiao1');
  var quanbj;
  var youtupiana=getClass("youtupiana");
  for(var i=0;i<caidanc.length;i++){
    caidanc[i].a=i;
    caidanc[i].onmouseover=function(){
      caidans[this.a].style.display="block";
      if(this.a>0){
        for(var y=0;y<youtupiana.length;y++){
            youtupiana[y].style.display="none";
          }
        if(this.a%3==0){
          youtupiana[0].style.display="block";
        }
        if(this.a%3==1){
          youtupiana[1].style.display="block";
        }
        if(this.a%3==2){
          youtupiana[2].style.display="block";
        }
        clearInterval(t);
        xiao1[this.a-1].style.display="block";
        quanbj=quan.style.background;
        quan.style.background=yanse1[this.a-1];
      }

    };
    caidanc[i].onmouseout=function(){
      if(this.a>0){
        t=setInterval(gun,2000);
        xiao1[this.a-1].style.display="none";
        quan.style.background=quanbj;
      }
      caidans[this.a].style.display="none";
    };
  }
  for(var j=0;j<caidans.length;j++){
    caidans[j].a=j;
    caidans[j].onmouseover=function(){
      caidans[this.a].style.display="block";
    };
    caidans[j].onmouseout=function(){
      caidans[this.a].style.display="none";
    };
  }*/
  //var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  var jinxuan=$(".jinxuan")[0];
  var banneroneone=$(".banner-left3")[0];
  banneroneone.onmouseover=function(){
    jinxuan.style.display="block";
  }
  banneroneone.onmouseout=function(){
    jinxuan.style.display="none";
  }
  jinxuan.onmouseover=function(){
    jinxuan.style.display="block";
  }
  jinxuan.onmouseout=function(){
    jinxuan.style.display="none";
  }

  
  var caidanone=getClass("banner-left4");
  //alert(caidanone.length);
  var chehua=$(".chehuaone")[0];
  for(var i=0;i<caidanone.length;i++){
    /*caidan[i].index=i;*/
    caidanone[i].onmouseover=function(){
      chehua.style.display="block";
    }
    caidanone[i].onmouseout=function(){
      chehua.style.display="none";
    }
    chehua.onmouseover=function(){
      chehua.style.display="block";
    }
    chehua.onmouseout=function(){
      chehua.style.display="none";
    }
  }


  

 

  

}