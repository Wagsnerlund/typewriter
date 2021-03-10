const sentence = "hello world";
let i = 0;
const printOut = () => {
  if (i < sentence.length) {
    process.stdout.write(sentence[i]);
    i++;
    setTimeout(printOut, 500);
  } else {
    process.stdout.write('\n');
  }
};
printOut(sentence);