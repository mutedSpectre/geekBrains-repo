var day;

function Year() {
    switch (process.argv[3]){
        case 'января':
            day = Number(process.argv[2]);
            break;
        case 'февраля':
            day = 31 + Number(process.argv[2]);
            break;
        case 'марта':
            day = 59 + Number(process.argv[2]);
            break;
        case 'апреля':
            day = 90 + Number(process.argv[2]);
            break;
        case 'мая':
            day = 120 + Number(process.argv[2]);
            break;
        case 'июня':
            day = 151 + Number(process.argv[2]);
            break;
        case 'июля':
            day = 181 + Number(process.argv[2]);
            break;
        case 'августа':
            day = 212 + Number(process.argv[2]);
            break;
        case 'сентября':
            day = 243 + Number(process.argv[2]);
            break;
        case 'октября':
            day = 273 + Number(process.argv[2]);
            break;
        case 'ноября':
            day = 304 + Number(process.argv[2]);
            break;
        case 'декабря':
            day = 334 + Number(process.argv[2]);
            break;
    }
}

Year();
if (Number(process.argv[4])%4 == 0){
    if (process.argv[3] == 'января'){
        console.log(366 - day);
    }
    else {
        console.log(366 - ++day);
    }
}
else {
    console.log(365 - day);
}