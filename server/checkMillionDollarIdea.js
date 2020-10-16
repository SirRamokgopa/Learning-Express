const checkMillionDollarIdea = (req, res, next) => {
    const revenue = +req.body.weeklyRevenue;
    const weeks = +req.body.numWeeks;
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
    
    // Check if revenue and weeks are numbers and if idea is at least milliondolars
    if (weeks*revenue < 1000000 || (!isNumber(revenue) || !isNumber(weeks))) {
        res.sendStatus(400);
        return;
    } 
    next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
