const express= require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js")
const Listing = require("../models/listing.js")
const {validateReview, isLoggedIn, isOwner, isReviewAuthor} = require("../middleware.js")

const reviewControler = require("../controllers/reviews.js");


//Reviews
//Post Route

router.post("/",isLoggedIn, validateReview, wrapAsync(reviewControler.createReview));


//Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewControler.deleteReview));



module.exports = router;