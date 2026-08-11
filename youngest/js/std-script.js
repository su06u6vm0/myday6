    // 影片資料 - 🌟 ID 必須跟上面的 HTML 一模一樣，影片才生得出來！
    const videoData = {
        'tab-video1': { id: 'fQI52C2bj6w', player: null, subEl: 'subtitle-video1', container: 'player-container-video1' },
        'tab-video2': { id: 'W9SBhNLTDVw', player: null, subEl: 'subtitle-video2', container: 'player-container-video2', interval: null }
    };

    function updateButtonUI(theme) {
      document.getElementById('btn-light').classList.remove('active');
      document.getElementById('btn-dark').classList.remove('active');
      document.getElementById('btn-' + theme).classList.add('active');
    }

    function switchTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('pageTheme', theme);
      updateButtonUI(theme);
    }

    function openTab(tabId, btnElement) {
      Object.keys(videoData).forEach(key => {
          if (videoData[key].player && typeof videoData[key].player.pauseVideo === 'function') {
              videoData[key].player.pauseVideo();
          }
      });

      stopLyricsAnimation("stdsa-lyrics");
      stopLyricsAnimation("stdmv-lyrics");

      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
      btnElement.classList.add('active');

      initVideo(tabId);
    }

    // 安全載入 YouTube 播放器
    window.onYouTubeIframeAPIReady = function() {
        // API 準備好時，不做任何事，等到讀者點擊頁籤才觸發 initVideo
    };

    function initVideo(tabId) {
        const vData = videoData[tabId];
        if (vData.player) return;

        if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
            setTimeout(() => initVideo(tabId), 100);
            return;
        }

        vData.player = new YT.Player(vData.container, {
            videoId: vData.id,
            width: '100%',
            height: '100%',
            host: 'https://www.youtube-nocookie.com',
            playerVars: { 'autoplay': 0, 'rel': 0, 'playsinline': 1 }, // 絕對不偷播
            events:{
              onReady:function(event){

                  loadSRT(vData.srt,vData.subEl,event.target);

                  if(tabId==="tab-video1"){
                      syncLyricsWithVideo(event.target,"stdsa-lyrics");
                      bindLyricsInteraction(event.target,"stdsa-lyrics");
                  }

                  if(tabId==="tab-video2"){
                      syncLyricsWithVideo(event.target,"stdmv-lyrics");
                      bindLyricsInteraction(event.target,"stdmv-lyrics");
                  }
              }
          }
        });
    }

    function loadSRT(filename, subtitleId, player) {
        fetch(filename)
            .then(response => response.text())
            .then(text => {
                const subs = parseSRT(text);
                setInterval(() => {
                  if (!player) return;
                  const subtitleElement = document.getElementById(subtitleId);
                  const time = player.getCurrentTime();
                  const currentSub = subs.find(s => time >= s.start && time <= s.end);
                  if (currentSub) {
                    subtitleElement.innerHTML = `<span>${currentSub.text}</span>`;
                  } else if (player.getPlayerState() === YT.PlayerState.PLAYING) {
                  subtitleElement.innerHTML = '';
                }
              }, 200);
            }).catch(e => console.log("字幕載入失敗", e));
    }

    function parseSRT(srt) {
        const regex = /(\d+)\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})\n([\s\S]*?)(?=\n{2}|\n*$)/g;
        let match, subs = [];
        while ((match = regex.exec(srt)) !== null) {
            subs.push({
                start: timeToSeconds(match[2]), end: timeToSeconds(match[3]), text: match[4].replace(/\n/g, '<br>')
            });
        }
        return subs;
    }

    function timeToSeconds(timeStr) {
        const parts = timeStr.split(/[:,]/);
        return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]) + parseInt(parts[3]) / 1000;
    }

    function changeSubtitleSize(delta, subtitleId) {
      // 取得目前的變數數值（如果沒有則預設 22）
      const root = document.documentElement;
      const currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--subtitle-size')) || 22;
    
      // 計算新大小 (delta 0.1 * 20 = 2px)
      let newSize = currentSize + (delta * 20);
    
      // 設定範圍限制 (最小 12px，最大 80px)
      if (newSize < 12) newSize = 12;
      if (newSize > 80) newSize = 80;

      // 更新 CSS 變數，這會同時影響到全螢幕與非全螢幕的所有字幕
      root.style.setProperty('--subtitle-size', newSize + 'px');
  }

    // =====================================
    // 🌟 全螢幕與偽全螢幕邏輯 (完全移植)
    // =====================================
    function triggerFullscreen(wrapperId) {
        const wrapper = document.getElementById(wrapperId);
        const exitBtn = wrapper.querySelector('.exit-fs-btn-global');

        const isFS = document.fullscreenElement || document.webkitFullscreenElement;
        const isPseudo = wrapper.classList.contains("pseudo-fullscreen");

        if (isFS || isPseudo) {
            exitFullscreenMode(wrapperId);
        } else {
            const isIPhone = /iPhone|iPod/.test(navigator.userAgent);
            const req = wrapper.requestFullscreen || wrapper.webkitRequestFullscreen;

            if (req && !isIPhone) {
                req.call(wrapper).then(() => {
                    setTimeout(() => showExitBtn(exitBtn), 100);
                }).catch(() => {
                    enterPseudoFullscreen(wrapper, exitBtn);
                });
            } else {
                enterPseudoFullscreen(wrapper, exitBtn);
            }
        }
    }

    function enterPseudoFullscreen(wrapper, exitBtn) {
        wrapper.classList.add("pseudo-fullscreen");
        document.body.classList.add("is-in-fullscreen");
        window.scrollTo(0, 0); // 嘗試隱藏網址列
        showExitBtn(exitBtn);
    }

    function exitFullscreenMode(wrapperId) {
        const wrapper = document.getElementById(wrapperId);
        const exitBtn = wrapper.querySelector('.exit-fs-btn-global');

        const isFS = document.fullscreenElement || document.webkitFullscreenElement;
        if (isFS) {
            const exit = document.exitFullscreen || document.webkitExitFullscreen;
            if (exit) exit.call(document);
        }

        wrapper.classList.remove("pseudo-fullscreen");
        document.body.classList.remove("is-in-fullscreen");

        if (exitBtn) {
            exitBtn.style.opacity = "0";
            exitBtn.style.display = "none";
        }

        if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
             setTimeout(() => window.scrollTo(0, 0), 100);
        }
    }

    function showExitBtn(btnElement) {
        if (!btnElement) return;
        btnElement.style.setProperty('display', 'flex', 'important');
        requestAnimationFrame(() => {
            btnElement.style.opacity = "1";
        });
    }

    // 監聽原生 ESC 鍵或返回鍵退出
    document.addEventListener('fullscreenchange', handleGlobalFsChange);
    document.addEventListener('webkitfullscreenchange', handleGlobalFsChange);

    function handleGlobalFsChange() {
        const isFS = document.fullscreenElement || document.webkitFullscreenElement;
        if (!isFS) {
            document.body.classList.remove("is-in-fullscreen");
            document.querySelectorAll('.exit-fs-btn-global').forEach(btn => {
                btn.style.display = "none";
                btn.style.opacity = "0";
            });
        }
    }

    // 螢幕轉向時顯示退出按鈕
    window.addEventListener("orientationchange", () => {
        document.querySelectorAll('.pseudo-fullscreen .exit-fs-btn-global').forEach(btn => showExitBtn(btn));
    });

    // 點擊螢幕喚醒退出按鈕
    document.addEventListener('touchstart', (e) => { 
        const activeWrapper = document.querySelector('.pseudo-fullscreen') || document.fullscreenElement;
        if (activeWrapper && activeWrapper.contains(e.target)) {
            const btn = activeWrapper.querySelector('.exit-fs-btn-global');
            if(btn) showExitBtn(btn);
        }
    }, { passive: true, capture: true });

    document.addEventListener('DOMContentLoaded', () => {
      updateButtonUI(localStorage.getItem('pageTheme') || 'light');

      const firstTabBtn = document.querySelector('.tab-btn');
      openTab('tab-video1', firstTabBtn);
    });

    //======================================================
    // 歌詞字體大小調整與說明
    //======================================================
    function showInstruction() {
      alert("💡如果頻繁切換影片可能會導致動態歌詞字幕無法顯示，如有出現該狀況再麻煩重新整理！\n");
    }

    //歌詞字體大小調整
    function adjustFontSize(containerId, change) {
      var container = document.getElementById(containerId);
      if (!container) return;
  
      // 取得目前字體大小，若無設定則預設為 15px
      var currentSize = parseFloat(window.getComputedStyle(container).fontSize) || 15;
      var newSize = currentSize + change;
  
      // 設定安全範圍：11px ~ 25px
      if (newSize >= 11 && newSize <= 25) {
        container.style.fontSize = newSize + 'px';
        // 儲存到本機紀錄中
        localStorage.setItem('lyrics_fontsize_' + containerId, newSize);
      }
    }

    // 當網頁載入時，自動讀取上次儲存的字體大小紀錄
    window.addEventListener("DOMContentLoaded", () => {
      const containers = ['stdsa-lyrics', 'stdmv-lyrics'];
  
      containers.forEach(id => {
        var savedSize = localStorage.getItem('lyrics_fontsize_' + id);
        var container = document.getElementById(id);
    
        if (savedSize && container) {
          container.style.fontSize = savedSize + 'px';
        }
      });
    });

    //======================================================
    // 動態歌詞與互動設定核心邏輯
    //======================================================

    let lyricsEnabled = true;
    const lyricsStates = {};

    function toggleLyricsMode(){
        lyricsEnabled = !lyricsEnabled;
        const btn = document.getElementById("lyrics-toggle-btn");
        btn.classList.toggle("active", lyricsEnabled);
        btn.textContent = lyricsEnabled ? "🎵 動態歌詞：開" : "🎵 動態歌詞：關";

        // 如果動態歌詞關閉，把所有歌詞恢復成普通清爽的文字顯示
        if (!lyricsEnabled) {
            Object.keys(lyricsStates).forEach(containerId => {
                const container = document.getElementById(containerId);
                if(container) {
                    container.querySelectorAll("p").forEach(p => {
                        p.classList.remove("current-lyric");
                        p.style.opacity = "1";
                        p.style.transform = "scale(1)";
                    });
                }
                lyricsStates[containerId].currentIndex = -1;
            });
        }
    }

    function bindLyricsInteraction(player, lyricsContainerId){
        const container = document.getElementById(lyricsContainerId);
        if(!container) return;
        if(container.dataset.binded === "1") return;
        container.dataset.binded = "1";

        const paragraphs = container.querySelectorAll("p[data-start]");

        if(!lyricsStates[lyricsContainerId]) {
            lyricsStates[lyricsContainerId] = { currentIndex: -1 };
        }
        
        const state = lyricsStates[lyricsContainerId];
        state.player = player;
        state.isUserScrolling = false;
        state.scrollTimer = null;

        // 當使用者自己滑動歌詞時，暫停自動捲動，避免跟使用者的手指搶控制權
        function pauseAutoScroll() {
            if(!lyricsEnabled) return;
            state.isUserScrolling = true;
            clearTimeout(state.scrollTimer);
        }

        // 當使用者停止滑動 1.5 秒後，自動恢復跟隨影片
        function resumeAutoScroll() {
            if(!lyricsEnabled) return;
            clearTimeout(state.scrollTimer);
            state.scrollTimer = setTimeout(() => {
                state.isUserScrolling = false;
            }, 1500);
        }

        container.addEventListener("wheel", pauseAutoScroll, {passive: true});
        container.addEventListener("touchstart", pauseAutoScroll, {passive: true});
        container.addEventListener("touchend", resumeAutoScroll, {passive: true});

        paragraphs.forEach(p => {
            p.addEventListener("click", () => {
                const startTime = parseFloat(p.dataset.start);
                if (!isNaN(startTime)) {
                    player.seekTo(startTime, true);
                    state.isUserScrolling = false;
                    clearTimeout(state.scrollTimer);
                }
            });
        });
    }

    function syncLyricsWithVideo(player, lyricsContainerId){
        const container = document.getElementById(lyricsContainerId);
        if(!container) return;

        // 確保 JS 控制的滾動不受干擾
        container.style.position = "relative";
        container.style.scrollBehavior = "auto";
      
        const paragraphs = container.querySelectorAll("p[data-start]");
        
        if(!lyricsStates[lyricsContainerId]) {
            lyricsStates[lyricsContainerId] = { currentIndex: -1, lastTime: 0 };
        }
        const state = lyricsStates[lyricsContainerId];

        if(state.animationId) {
            cancelAnimationFrame(state.animationId);
        }

        function animate(){
            state.animationId = requestAnimationFrame(animate);

            if(!lyricsEnabled) return;
            
            // 取得播放器狀態，只要不是空值，且處於播放(1)、暫停(2)、或緩衝(3)，都允許更新歌詞
            const pState = player ? player.getPlayerState() : -1;
            if(!player || (pState !== YT.PlayerState.PLAYING && pState !== YT.PlayerState.PAUSED && pState !== YT.PlayerState.BUFFERING)) {
                return;
            }

            const currentTime = player.getCurrentTime();

            // 偵測影片時間是否發生「跳躍」(差距大於 0.5 秒)
            // 如果 state.lastTime 是 0，代表剛初始化，先將其同步為目前時間
            if (state.lastTime === 0) state.lastTime = currentTime;
            const timeDiff = Math.abs(currentTime - state.lastTime);
            const isVideoSeeking = timeDiff > 0.5; // 判斷使用者是否點擊了進度條
            state.lastTime = currentTime; // 更新為最新時間
          
            let newIndex = -1;

            for(let i = 0; i < paragraphs.length; i++){
                const start = parseFloat(paragraphs[i].dataset.start);
                const end = parseFloat(paragraphs[i].dataset.end);
                if(currentTime >= start && currentTime <= end){
                    newIndex = i;
                    break;
                }
            }

            if(newIndex === -1 && currentTime > 0) {
                for (let i = paragraphs.length - 1; i >= 0; i--) {
                     const start = parseFloat(paragraphs[i].dataset.start);
                     if (currentTime >= start) {
                         newIndex = i;
                         break;
                     }
                }
            }

            if (newIndex !== -1 && (newIndex !== state.currentIndex || (isVideoSeeking && !state.isUserScrolling))) {
                state.currentIndex = newIndex;
                const currentP = paragraphs[state.currentIndex];

                // 更新歌詞淡出淡入樣式
                paragraphs.forEach((p, index) => {
                    p.classList.remove("current-lyric");
                    const distance = Math.abs(index - state.currentIndex);
                    if(distance === 0){
                        p.style.opacity = "1";
                        p.style.transform = "scale(1.08)";
                    } else if(distance === 1){
                        p.style.opacity = "0.75";
                        p.style.transform = "scale(1.02)";
                    } else if(distance === 2){
                        p.style.opacity = "0.55";
                        p.style.transform = "scale(1)";
                    } else {
                        p.style.opacity = "0.3";
                        p.style.transform = "scale(0.96)";
                    }
                });

                currentP.classList.add("current-lyric");

                // 執行滾動
                if (!state.isUserScrolling) {
                    // 使用 offsetTop 取得絕對精準的位置，解決手機版對不準的問題
                    const targetScroll = currentP.offsetTop - (container.clientHeight / 2) + (currentP.clientHeight / 2);
                    
                    if (isVideoSeeking) {
                        // 如果是點擊影片時間軸：取消平滑，要求「瞬間切換」
                        container.scrollTop = targetScroll;
                    } else {
                        // 如果是正常播放換句：呼叫瀏覽器原生高順暢度的「平滑滾動」
                        if (container.scrollTo) {
                            container.scrollTo({ top: targetScroll, behavior: 'smooth' });
                        } else {
                            container.scrollTop = targetScroll;
                        }
                    }
                }
            }
        }
        animate();
    }

    function stopLyricsAnimation(lyricsContainerId){
        const state = lyricsStates[lyricsContainerId];
        if(!state) return;
        if(state.animationId){
            cancelAnimationFrame(state.animationId);
            state.animationId = null;
        }
    }
	
	// 控制選單的展開與收合
	function toggleMenu() {
		const dropdown = document.getElementById('controlsDropdown');
		dropdown.classList.toggle('show');
	}

	// 點擊畫面其他空白處時自動收合選單
	window.addEventListener('click', function(e) {
		const container = document.querySelector('.menu-container');
		const dropdown = document.getElementById('controlsDropdown');
		if (!container.contains(e.target) && dropdown.classList.contains('show')) {
			dropdown.classList.remove('show');
		}
	});