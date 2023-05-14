const Ancestor = (letter,number) =>{
    if (letter === "m" || letter === "M") {
        switch (number) {
          case -3:
            console.log("great grandfather");
            break;
          case -2:
            console.log("grandfather");
            break;
          case -1:
            console.log("father");
            break;
          case 0:
            console.log("me!");
            break;
          case 1:
            console.log("Son");
            break;
          case 2:
            console.log("grandson");
            break;
          case 3:
            console.log("great grandson");
            break;
      
          default:
            break;
        }
      } else {
        switch (number) {
          case -3:
            console.log("great grandmother");
            break;
          case -2:
            console.log("grandmother");
            break;
          case -1:
            console.log("mother");
            break;
          case 0:
            console.log("me!");
            break;
          case 1:
            console.log("daughter");
            break;
          case 2:
            console.log("granddaughter");
            break;
          case 3:
            console.log("great granddaughter");
            break;
      
          default:
            break;
        }
      }
    }
    Ancestor("M",3)