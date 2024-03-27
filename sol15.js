try {
    const undefinedObject = undefined;
    console.log(undefinedObject.property);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Caught TypeError:", error.message);
    } else {
        // Handle other types of errors
        console.log("Caught an error:", error);
    }
}
