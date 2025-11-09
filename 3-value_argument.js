const argv=process.argv.slice(2); // remove first two default args
if (argv.length ===  0) {
    console.log("No argument");
} else {
    console.log(argv[0]);
}