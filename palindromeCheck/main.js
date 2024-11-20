let userInput = document.getElementById("user_input");

function palindrome(input) {
  return input.split("").reverse().join("");
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log(userInput.value);
  //   console.log(typeof userInput);
  //   console.log(typeof palindrome(userInput.value));
  if (userInput.value.length < 3) {
    document.getElementById("output").innerText = "add more than 2 characters";
    document.getElementById("output").style.color = "red";
  } else if (userInput.value.toLowerCase() == palindrome(userInput.value).toLowerCase()) {
    // console.log(palindrome(userInput.value));

    document.getElementById("compare").innerText = `${
      userInput.value
    }⬅️➡️  ${palindrome(userInput.value).toLowerCase()}`;

    document.getElementById("output").innerText = "palindrome";
    document.getElementById('output').style.color = "green"
  } else if (userInput.value.toLowerCase() != palindrome(userInput.value.toLowerCase())) {
    document.getElementById("compare").innerText = `${
      userInput.value
    }⬅️➡️  ${palindrome(userInput.value)}`;

    document.getElementById("output").innerText = "NOT palindrome";
  }
});

document.getElementById("myForm").addEventListener("submit", () => {
  console.log("palindrome : " + palindrome(userInput.value));
});
