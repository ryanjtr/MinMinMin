const yourDate = new Date("2022-10-29T00:00:00"),
      music = ['ido', 'matmoc', 'dungnguoidungthoidiem'],
      christmasMusic = ['We_Wish_You_a_Merry_Christmas', 'Feliz_Navidad', 'All_I_Want_For_Christmas_Is_You']; // Nhạc Giáng sinh

// Hàm kiểm tra ngày và đổi nền nếu là ngày Giáng sinh
function checkChristmasBackground() {
      const today = new Date();
      const isChristmas = today.getMonth() === 11 && today.getDate() === 9; // Tháng 11 là tháng 12 (vì getMonth() trả giá trị từ 0-11)

      if (isChristmas) {
            document.body.style.backgroundImage = "url('background/christmast_bg.png')";
            document.body.style.backgroundSize = "cover";  // Đảm bảo ảnh nền bao phủ toàn bộ trang
            document.querySelector("audio").setAttribute("src", `music/${christmasMusic[Math.floor(Math.random() * christmasMusic.length)]}.mp3`); // Phát nhạc Giáng sinh

            // Đổi màu chữ cho các phần tử cụ thể
            document.querySelector("h1").textContent = "MERRY CHRISTMAST"; // Thay đổi nội dung của phần tử chứa "LOVE DAYS"
            document.querySelector("h1").style.fontWeight = "bold";//In đậm nó lên
            document.querySelector("h1").style.color = "white"; // Đổi màu chữ "MERRY CHRISTMAS" sang màu trắng
            document.querySelector("#info .one p").style.color = "white"; // Đổi màu chữ "Đặng Kiến Quốc" sang màu trắng
            document.querySelector("#info .two p").style.color = "white"; // Đổi màu chữ "Lê Dương Minh" sang màu trắng
            document.querySelector("footer").style.color = "white"; // Đổi màu chữ "Thank you...." sang màu trắng
            document.querySelector("#heart").style.color = "white"; // Đổi màu chữ "Lê Dương Minh" sang màu trắng

            // Thêm phần sleigh vào trang
            const sleighSection = document.createElement("section");
            sleighSection.classList.add("sleigh");
            sleighSection.innerHTML = `
                  <div class="santa">🦌</div>
                  <div class="santa1">🦌</div>
                  <div class="santa2">🦌</div>
                  <div class="santa3">🦌</div>
                  <div class="santa4">🦌</div>
                  <div class="santa5"><i class="fa-solid fa-sleigh"></i></div>
            `;
            document.body.appendChild(sleighSection);

            // Thêm phần tuyết rơi vào trang
            const snowSection = document.createElement("section");
            snowSection.classList.add("snow");
            snowSection.innerHTML = `
                <div class="snowflake"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake1"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake2"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake3"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake4"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake5"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake6"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake7"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake8"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake9"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake10"><i class="fa-solid fa-snowflake"></i></div>
                <div class="snowflake11"><i class="fa-solid fa-snowflake"></i></div>
                <div class="snowflake12"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake13"><i class="fa-regular fa-snowflake"></i></div>
                <div class="snowflake14"><i class="fa-regular fa-snowflake"></i></div>
            `;
            document.body.appendChild(snowSection);

            //Đổi vị trí và thời gian trễ tuyết
            const snowflakes = document.querySelectorAll('.snowflake, .snowflake1, .snowflake2, .snowflake3, .snowflake4, .snowflake5, .snowflake6, .snowflake7, .snowflake8, .snowflake9');
            snowflakes.forEach(function (snowflake) {
                  // Set random horizontal position
                  snowflake.style.left = Math.random() * 100 + 'vw';

                  // Set random animation delay for staggered effect
                  snowflake.style.animationDelay = Math.random() * 5 + 's';
            });
      } else {
            document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random() * music.length)]}.mp3`); // Phát nhạc ngẫu nhiên nếu không phải ngày Giáng sinh
      }
}



document.addEventListener('DOMContentLoaded', function () {
      // Gọi hàm kiểm tra và đổi nền nếu là ngày Giáng sinh
      checkChristmasBackground();

      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yourDate.getDate() > 9) ? yourDate.getDate() : "0" + yourDate.getDate()}-${(yourDate.getMonth() > 8) ? (yourDate.getMonth() + 1) : "0" + (yourDate.getMonth() + 1)}-${yourDate.getFullYear()}`;

      document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " DAYS";

      function olock() {
            var today = new Date(),
                  hrs = (Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
                  min = (Math.floor(Math.floor((today - yourDate) / 1000) / 60)) % 60,
                  sec = Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs > 9) ? hrs : "0" + hrs}:${(min > 9) ? min : "0" + min}:${(sec > 9) ? sec : "0" + sec}`;
      }
      olock();
      var timer = setInterval(function () { olock() }, 1000);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);
