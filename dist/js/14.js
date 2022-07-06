function countdown(hr,mm,ss)
    {
        var interval = setTimeout(function work(){
            if(ss == 0)
            {
                ss = 60;
                if(mm == 0)
                {
                    mm = 60;
                    if(hr != 0){
                        hr--;
                    }  
                }
                mm--
            }
            ss--
            if(hr.toString().length < 2) hr = '0'+hr;
            if(mm.toString().length < 2) mm = '0'+mm;
            if(ss.toString().length < 2) ss = '0'+ss;
            if(hr == 0 && mm == 0 && ss == -1){
                clearInterval(interval);
                window.location.reload();
            }else{
              postMessage([hr, mm, ss]);
              interval = setTimeout(work, 1000)
            }
            
        },1000)
    }
onmessage = function(e) {
  countdown(+e.data[0], +e.data[1], +e.data[2])
}

    //countdown()