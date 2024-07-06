let L = 100; 

switch (true) {
    case (L >= 90 && L <= 100):
        console.log("A");
        break;
    case (L >= 80 && L < 89):
        console.log("B");
        break;
    case (L >= 70 && L < 79):
        console.log("C");
        break;
    case (L >= 60 && L < 69):
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}
