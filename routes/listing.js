const express= require("express");
const router = express.Router();
const multer = require("multer");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js")
const Review = require("../models/review.js");
const {isLoggedIn, isOwner, validateListing}=require("../middleware.js");

const listingController = require("../controllers/listing.js");

const mullter = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router
    .route("/")
    //Index Route
    .get(wrapAsync(listingController.index) )
    //create route
    .post(
        isLoggedIn, 
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing)
    );
    


//New Route
router.get("/new",isLoggedIn, listingController.renderNewFrom);


router
    .route("/:id")
    .get(
        (req, res, next) => {
            console.log("SHOW ROUTE HIT:", req.params.id);
            next();
        },
        wrapAsync(listingController.showListing)
    )
    .put(
        isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.deleteListing)
    );

//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.rendereditForm));


module.exports = router;
