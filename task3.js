var time1, time2, time3, time1out, time2out, time3out;

function CheckSec() {  //функция для форматирования единицы времени для вывода (для форматирования склонения)

    switch (time3) {
        case 0: time3out = ''; return;
        case 1:case 21:case 31:case 41:case 51: time3out = time3 + ' секунда'; return;
        case 2:case 3:case 4:case 22:case 23:case 24:case 32:case 33:case 34:case 42:case 43:case 44:case 52:case 53:case 54: time3out = time3 + ' секунды'; return;
        default: time3out = time3 + ' секунд'; return;
    }

}

function CheckMin() {  //функция для форматирования единицы времени для вывода (для форматирования склонения)

    switch (time2) {
        case 0: time2out = ''; return;
        case 1:case 21:case 31:case 41:case 51: time2out = time2 + ' минута'; return;
        case 2:case 3:case 4:case 22:case 23:case 24:case 32:case 33:case 34:case 42:case 43:case 44:case 52:case 53:case 54: time2out = time2 + ' минуты'; return;
        default: time2out = time2 + ' минут'; return;
    }
    
}


function CheckH() {  //функция для форматирования единицы времени для вывода (для форматирования склонения)

    switch (time1) {
        case 0: time1out = ''; return;
        case 1:case 21:case 31:case 41:case 51: time1out = time1 + ' час'; return;
        case 2:case 3:case 4:case 22:case 23:case 24:case 32:case 33:case 34:case 42:case 43:case 44:case 52:case 53:case 54: time1out = time1 + ' часа'; return;
        default: time1out = time1 + ' часов';
    }
    
}


function Check() {
    
    if (time3 >= 60) {
        time2 = (time3-(time3 % 60))/60;    //если секунд больше 60, то рассчитываем сколько это минут и перезаписываем секунды
        time3 %= 60;
        CheckSec();    //вызываем функцию, которая отформатирует текст для вывода (секунды)
        
        if (time2 >= 60) {
            time1 = (time2-(time2 % 60))/60;    //если минут больше 60, то рассчитываем сколько это часов и перезаписываем минуты
            time2 %= 60;
            CheckMin();   //вызываем функцию, которая отформатирует текст для вывода (минуты)
            CheckH();    //вызываем функцию, которая отформатирует текст для вывода (часы)
            
            if (time2 == 0) {
                console.log(time1out,time3out);    //если минуты == 0, то выводим только часы и секунды
            }
            else if (time3 == 0) {
                console.log(time1out,time2out);    //если секунды == 0, то выводим только часы и минуты
            }
            else if ((time2 == 0)&(time3 == 0)){    //если и минут и секунды == 0, то выводим только часы
                console.log(time1out);
            }
            else {
                console.log(time1out,time2out,time3out);    //если все единицы времени != 0, то выводим ВСЁ
            }
        }
        else if (time2 < 60){    //если минут меньше 60
        
            CheckMin();    //вызываем функцию, которая отформатирует текст для вывода
            
            if (time3 == 0) {    //если секунды == 0, то выводим только минуты
                console.log(time2out);
            }
            else {
                console.log(time2out,time3out);    //если обе единицы времени != 0, то выводим обе
            }
        }
    }
    else if (time3 < 60) {    //если секунд меньше 60
        CheckSec();
        console.log(time3out);   //вывод секунд
    }
}

time3 = Number(process.argv[2]) + Number(process.argv[3]);   //записываем в секунды сумму двух временных отрезков введеных через консоль
Check();    //вызываем основную функцию