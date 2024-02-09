export const fn = (a, b, c) => {
   
   // let total = 0;
   // let highest = "";
   // let lowest = "";

   // if (a+b+c < 40 && a+b+c % 3 === 0) {
   //    while (a+b+c > 0) {
   //       if (c > 0) {
   //          a
   //       }
         
   //    }
   // } else {
   //    console.log('input error');
   // }

   // console.log(a+b+c);
   // return Math.ceil((12*a+14*b+16*c)/3);
   return (a>0 && b>0 && c>0 && a+b+c<40 && a+c+c %3 ===0) ? Math.ceil((12*a+14*b+16*c)/3) : fn(a,b,c).toThrow();
};
