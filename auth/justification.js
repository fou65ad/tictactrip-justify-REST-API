
function justification(str,ln) {
  

   
   e=0;
   output="";
   str3=str.split("<br><br>");
   while (e<str3.length) {
        var res = str3[e].split(" ");
        var ree = [];    
        var i =j= 0;
        while (i<res.length) {
             if(res[i].replace(/ /g,'')!='') {
                ree[j]=res[i].replace(/ /g,''); j++;
               }
               i++;
        }
        lines="";
        i=j=k=slice1=0;
        var line=[];
        var line2="";
        var leng=0;
        var tmp="";
        var t=ln;
        var re=ree;
        var l=ree.length;
        m=0;
        var slice=0;
      while(true){
                     i=j=0;
                    var line=[];
                     var line2="";
                       var leng=0;
                         

                while(leng<t+1){
                  
                    af=re[i].length;

                    if ( t-leng<af && leng!=t) 
                    {
                       
                        // console.log(t-leng);
                        while((j<t-leng+1) && (j<i-1)) {line[j]+=' ';j++;}
                        // console.log(line[i-1]+"ee");
                        line[i-1]=line[i-1].replace(/ /g,'');
                        // console.log(line[i-1]+"ee");
                        nb=t-leng-i+2;
                        // console.log(t+" t");
                        // console.log(leng+" leng");
                        // console.log(i+" i");
                        // console.log(nb+" nb");
                        if(nb>0)line[i-2]+=" ".repeat(nb);
                        // console.log(line[i-2]+"fff");
                        // console.log(i+" I1");
                        slice1=i;
                        line[i-1]+="<br>";
                       break;
                    } 
                    else if(leng==t)
                    {
                           line[i-1]=line[i-1].replace(/ /g,'')+'<br>';
                           line[i-2]+=" ";
                           slice1=i;
                           // console.log(i+" I2");
                       break;

                    }
                    else if(t-leng==af){
                      line[i]=re[i]+'<br>';
                      slice1=i+1;
                      // console.log(i+" I3");
                           break;

                    }
                    else {
                      line[i]=re[i]+' ';
                        slice1=i+1;
                    }
                    leng+=line[i].length;

                      // console.log(leng);
                    i++;
                    if (re.length<=i) {break;}

                }
                 slice = slice+slice1; k=0;
                    while(k<line.length) {line2=line2+line[k];k++;}
        
        line2 = line2.replace(/ /g,"&nbsp;");
      // line2 = line2.replace(/ /g, "x");
        // console.log(line2+"  LINE2");
              
        lines=lines+line2;
        if (slice>=l) {break;}
             
               re=ree.slice(slice);
                 // console.log(slice+" Sliceeeee");
                 // console.log(re+" RE");
              

              

    
   }
   e++;
   output= output+lines+'<br>';
 
 }

    return output;

    
}



module.exports = justification;









