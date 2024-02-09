export const fn = (a, b, c) => {

   return (a>=0 && b>=0 && c>=0 && (a+b+c)<40 && ((a+b+c) %3) ===0) ? Math.ceil((12*a+14*b+16*c)/3) : (() => {throw new Error('input error')})();
};

