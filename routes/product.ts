import express from "express";

const router = express.Router();
const {
    getProducts,
    
} = require("../controllers/Product")
router.route("/").get(getProducts)
// router
//   .route("/:id")
//   .get(getBootcamp)
//   .put(updateBootcamp)
//   .delete(deleteBootcamp);
module.exports = router;