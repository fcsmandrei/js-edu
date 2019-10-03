/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let result = 0;
      const withBg = 800,
            withoutBg = 1300;

      if(knowsProgramming) {
        result = Math.ceil(withBg/config[focus]);
      } else {
        result =  Math.ceil(withoutBg/config[focus]);
      }
      return result;
  };
  