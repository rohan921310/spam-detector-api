// Import dependencies
const fs = require("fs");
const bayes = require("bayes");

(async () => {

    // Load the classifier back from its JSON representation.
    const classifier = bayes.fromJson(fs.readFileSync("classifiers/spam-or-ham-classifier.json"));

    // Now ask it to categorize a document it has never seen before
    console.log(await classifier.categorize("awesome, cool, amazing!! Yay.")); // => "positive"
    console.log(await classifier.categorize("This is a TERRIBLE product.")); // => "negative"
    console.log(await classifier.categorize("Goodmorning 8696200766 Congrats,You receive 65% Discount on FullBodyCheck @ HOME 72-Tests  Consultation Worth 1999@just 699 Click & Book")); // => "negative"
    console.log(await classifier.categorize("Buy the new amazing products for only $20"));
    console.log(await classifier.categorize("Mobile No: 7065414292"));
    console.log(await classifier.categorize("Get flat 50% off at PUMA Stores on purchase of 2 or more! Also, shop for Rs.5499, get styles worth Rs.1200 free. Ends 28 Jan. T&C. Opt-out call 08067006976")) // => "spam"
    
})();