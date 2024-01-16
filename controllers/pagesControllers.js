const getHomepage = (req, res) => {
    res.render('home');
}
const getAboutpage = (req, res) => {
    res.render('about');
}
const getCoursespage = (req, res) => {
    res.render('courses');
}
const getClassmode = (req, res) => {
    res.render('classmode');
}
const getContactpage = (req, res) => {
    res.render('contact');
}
const getEnrollpage = (req, res) => {
    res.render('enroll');
}

module.exports = {getHomepage, getAboutpage, getCoursespage, getClassmode, getContactpage, getEnrollpage};
