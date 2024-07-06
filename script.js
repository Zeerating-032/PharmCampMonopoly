document.addEventListener("DOMContentLoaded", function() {
  var buttonContainer = document.getElementById("buttonContainer");

  var audioFolder = "audio/";
  var audioFiles = [
    "01_ARTMS_Virtual Angel.m4a",
    "02_LE SSERAFIM_Perfect Night.m4a",
    "03_IVE_Accendio.m4a",
    "04_SEVENTEEN_청춘찬가.m4a",
    "05_도경수_Mars.m4a",
    "06_QWER_대관람차.m4a",
    "07_Stray Kids Ft.Charlie Puth_Lose My Breath.m4a",
    "08_IU_Love wins all.m4a",
    "09_TAEYEON Ft.Verbal Jint_I.m4a",
    "10_로꼬 × 펀치_Say Yes.m4a",
    "11_ASCA_Hibari.m4a",
    "12_cinnamons × evening cinema_summertime.m4a",
    "13_LiSA_Shine Days.m4a",
    "14_ARCANA PROJECT_とめどない潮騒に僕たちは何を歌うだろうか.m4a",
    "15_Saya_宇宙を見上げて.m4a",
    "16_今井麻美_朝焼けのスターマイン.m4a",
    "17_上田麗奈_Literature.m4a",
    "18_島崎信長_オーランドー.m4a",
    "19_柳麻美_光放て.m4a",
    "20_JAM Project_未来への咆哮.m4a",
    "21_櫻川めぐ_繋いでいく未来.m4a",
    "22_川田まみ_Halfway.m4a",
    "23_上条ひずる_涼風.m4a",
    "24_fhána_星をあつめて.m4a",
    "25_栗林美奈實_遙かなる地球の歌.m4a",
    "26_YOASOBI_Into the Night.m4a",
    "27_Ami Fujisaki_Close My Eyes.m4a",
    "28_茅原實里_みちしるべ.m4a",
    "29_孫盛希Ft.OZI_曖.m4a",
    "30_伍佰 × China Blue_煞到妳.m4a",
    "31_八三夭Ft.房東的貓_不搖滾.m4a",
    "32_Uniparity_初雪.mp3",
    "33_周杰倫_紅塵客棧.m4a",
    "34_徐佳瑩_現在不跳舞要幹嘛.m4a",
    "35_郁可唯 × 阿雲嘎_情人咒.m4a",
    "36_五月天_步步.m4a",
    "37_鄧紫棋_桃花諾.m4a",
    "38_動力火車_忠孝東路走九遍.m4a",
    "39_A-Lin_天若有情.m4a",
    "40_玖壹壹_啪哩啪哩.m4a",
    "41_閻奕格_Vroom.m4a",
    "42_Will Smith_Prince Ali.m4a",
    "43_Santino Fontana × Kristen Bell_Love Is an Open Door.m4a",
    "44_Zachary Levi × Mandy Moore_I See the Light.m4a",
    "45_Earth Wind & Fire_September.m4a",
    "46_AURORA_Cure For Me.m4a",
    "47_Taylor Swift_Back To December.m4a",
    "48_Dean Lewis_Be Alright.m4a",
    "49_Rachel Platten_Fight Song.m4a",
    "50_Luis Fonsi Ft.Daddy Yankee_Despacito.m4a",
    "51_Natti Natasha_Algarete.m4a",
    "52_Marshmello × Manuel Turizo_El Merengue.m4a",
    "53_HA-ASH_Qué Me Faltó.m4a",
    "54_Río Roma_Todavía No Te Olvido.m4a",
    "55_Alvaro Soler_Sofia.m4a",
    "56_Janie_La Macarena.m4a",
    "57_Fabien Incardona_Je me sens vivant.m4a",
    "58_Zaho Ft. Nej_Yabibi.m4a",
    "59_Cécilia Cara_MAMA TERRE.m4a",
    "60_Florent Mothe_Stop.m4a",
  ];

  audioFiles.forEach(function(file) {
    var button = document.createElement("button");
    button.textContent = file;
    button.classList.add("audio-button");

    if (localStorage.getItem(file)) {
      button.classList.add("clicked");
    }

    button.addEventListener("click", function() {
      var audioPlayer = document.getElementById("audioPlayer");
      audioPlayer.src = audioFolder + file;
      audioPlayer.load();
	  
	  if (resetButton.classList.contains("recovery-mode")) {
        // 在回復模式中，切換按鈕狀態並刪除localStorage中的記錄
        if (button.classList.contains("clicked")) {
          button.classList.remove("clicked");
          localStorage.removeItem(file);
		} 
	  } else {
		  // 設定標題
		  clickedButtonText.textContent = file;
		  // 更新按鈕的樣式
		  button.classList.add("clicked");
          // 在localStorage中記錄按下的按鈕
		  localStorage.setItem(file, "clicked");
		  audioPlayer.addEventListener('timeupdate', checkTime);
	  }
    });
    buttonContainer.appendChild(button);
  });

  function checkTime(){
      const audioPlayer = document.getElementById('audioPlayer');
      const remainingTime = audioPlayer.duration - audioPlayer.currentTime;
      if (remainingTime <= 3.3 && remainingTime > 0) {
          // 3.3秒前發出震動
          if (navigator.vibrate) {
              navigator.vibrate(300); // 震動0.3秒
          }
          // 移除事件監聽器以避免重複震動
          audioPlayer.removeEventListener('timeupdate', checkTime);
		  // 清除標題
		  clickedButtonText.textContent = '';
      }
    }
  
  resetButton.addEventListener("click", function() {
    if (resetButton.classList.contains("recovery-mode")) {
      resetButton.classList.remove("recovery-mode");
    } else {
      resetButton.classList.add("recovery-mode");
    }
  });
});
