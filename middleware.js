function isWeekdayBusinessHours() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
    const hourOfDay = now.getHours();
  
    // Check if it's a weekday (Monday to Friday) and if the current hour is between 8 and 17
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 8 && hourOfDay < 17) {
      return true;
    } else {
      return false;
    }
  }
  
  async function check(req, res, next) {
    try {
      const isBuss = isWeekdayBusinessHours();
  
      console.log(isBuss);
      if (!isBuss) {
        return res.render("error");
      }
      next()
    } catch (error) {
      console.log(error);
    }
  }
  
  module.exports = check;