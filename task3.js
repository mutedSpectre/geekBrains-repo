var time1, time2, time3, time1out, time2out, time3out;

function CheckSec() {

switch (time3) {
    case 0: time3out = ''; return;
    case 1:case 21:case 31:case 41:case 51: time3out = time3 + ' секунда'; return;
    case 2:case 3:case 4:case 22:case 23:case 24:case 32:case 33:case 34:case 42:case 43:case 44:case 52:case 53:case 54: time3out = time3 + ' секунды'; return;
    default: time3out = time3 + ' секунд'; return;
}

}

function CheckMin() {

switch (time2) {
    case 0: time2out = ''; return;
    case 1:case 21:case 31:case 41:case 51: time2out = time2 + ' минута'; return;
    case 2:case 3:case 4:case 22:case 23:case 24:case 32:case 33:case 34:case 42:case 43:case 44:case 52:case 53:case 54: time2out = time2 + ' минуты'; return;
    default: time2out = time2 + ' минут'; return;
    }
}


function CheckH() {

switch (time1) {
    case 0: time1out = ''; return;
    case 1:case 21:case 31:case 41:case 51: time1out = time1 + ' час'; return;
    case 2:case 3:case 4:case 22:case 23:case 24:case 32:case 33:case 34:case 42:case 43:case 44:case 52:case 53:case 54: time1out = time1 + ' часа'; return;
    default: time1out = time1 + ' часов';
    }
}


function Check() {
    if (time3 >= 60) {
        time2 = (time3-(time3 % 60))/60;
        time3 %= 60;
        CheckSec();
        if (time2 >= 60) {
            time1 = (time2-(time2 % 60))/60;
            time2 %= 60;
            CheckMin();
            CheckH();
            if (time2 == 0) {
                console.log(time1out,time3out);
            }
            else if (time3 == 0) {
                console.log(time1out,time2out);
            }
            else if ((time2 == 0)&(time3 == 0)){
                console.log(time1out);
            }
            else {
                console.log(time1out,time2out,time3out);
            }
        }
        else if (time2 < 60){
            CheckMin();
            if (time3 == 0) {
                console.log(time2out);
            }
            else {
                console.log(time2out,time3out);
            }
        }
    }
    else if (time3 < 60) {
        CheckSec();
        console.log(time3out); //отладочная печать
    }
}

time3 = Number(process.argv[2]) + Number(process.argv[3]);
Check();