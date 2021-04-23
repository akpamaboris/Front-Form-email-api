const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("the document has been loaded");

  $.querySelector(".t-f").addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("on submit activated");
    const data = {
      firstName: $.querySelector("#firstname").value,
      lastName: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
    };
    console.log(data);

    const response = await axios.post(
      "https://api-email-send.herokuapp.com/post",
      data
    );
    console.log(response);
  });
});
