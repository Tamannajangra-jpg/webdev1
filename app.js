const accordians=document.querySelectorAll('.accordian');

accordians.forEach(accordian=>{
  const icon=accordian.querySelector('.icon');
  const answer=accordian.querySelector('.answer');

  accordian.addEventListener('click',()=>{
    icon.classList.toggle('active');
    answer.classList.toggle('active');
  })
})

document.getElementById("validatebutton").addEventListener("click", function() {
            const urlInput = document.getElementById("urlinput").value.trim();
            const urlPattern = /https?:\/\/[^\s]+/;
            const message = document.getElementById("message");
            const final = urlInput.match(urlPattern);

            if (!final) {
                message.textContent = "Error: A valid URL is required!";
            }else if(final===Null) {
                message.textContent = "Error: A valid URL is required!";
            } else {
                message.textContent = "Success: URL submitted!";
            }

        });
