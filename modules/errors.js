function otherBroke() {
  itBloke();
}

function itBloke() {
  return 3 + z;
}

const itBrokeAsync = async (cb) => {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('error in my async function');
      cb(error.message);
    }
  });
};

try {
  // otherBroke();
  itBrokeAsync(console.log);
} catch (error) {
  console.log(error.message);
}
