
const typewriter = function (sentence) {
  let timInt = 0
  process.stdout.write("\n");
  for(let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
        process.stdout.write(sentence[i] );
        }, timInt);
    timInt += 50 
  };

  setTimeout(() => {
    process.stdout.write("\n")
  }, timInt);

  // for(const char of sentence) {
  //   setTimeout(() => {
  //   process.stdout.write(char);
  //   },  );
  // }
}

// would like to use char variable and logic from the loop to simplify
// for char of sentence prcess.stdout.write(char), with += 50 ms for each value of char" through the loop can we use .length to loop through ? 
typewriter("Paige, Jack and Erin I love you");