const yourDate = new Date("2022-10-29T00:00:00"),
      music = ['ido', 'matmoc', 'dungnguoidungthoidiem'],
      christmasMusic = ["We_Wish_You_a_Merry_Christmas"]; // Nhạc Giáng sinh

// Hàm kiểm tra ngày và đổi nền nếu là ngày Giáng sinh
function checkChristmasBackground() {
      const today = new Date();
      const isChristmas = today.getMonth() === 11 && today.getDate() === 24; // Tháng 11 là tháng 12 (vì getMonth() trả giá trị từ 0-11)

      if (isChristmas) {
            document.body.style.backgroundImage = "url('background/christmast_bg.png')";
            document.body.style.backgroundSize = "cover";  // Đảm bảo ảnh nền bao phủ toàn bộ trang
            document.querySelector("audio").setAttribute("src", `music/${christmasMusic[0]}.mp3`); // Phát nhạc Giáng sinh

            // Đổi màu chữ cho các phần tử cụ thể
            document.querySelector("h1").textContent = "MERRY CHRISTMAST"; // Thay đổi nội dung của phần tử chứa "LOVE DAYS"
            document.querySelector("h1").style.fontWeight = "bold";//In đậm nó lên
            document.querySelector("h1").style.color = "white"; // Đổi màu chữ "MERRY CHRISTMAS" sang màu trắng
            document.querySelector("#info .one p").style.color = "white"; // Đổi màu chữ "Đặng Kiến Quốc" sang màu trắng
            document.querySelector("#info .two p").style.color = "white"; // Đổi màu chữ "Lê Dương Minh" sang màu trắng
            document.querySelector("footer").style.color = "white"; // Đổi màu chữ "Thank you...." sang màu trắng
            document.querySelector("#heart").style.color = "white"; // Đổi màu chữ "Lê Dương Minh" sang màu trắng


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
