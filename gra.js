(function(){
"use strict";

const CONFIG = {
  loaderMinDuration: 1400,
  revealRootMargin: "0px 0px -10% 0px",
  revealThreshold: 0.15,
  sliderAutoplayDelay: 6000,
  sliderSpeed: 1100
};

/* ============================================================
   EMAILJS CONFIG — thay 3 giá trị dưới đây bằng của bạn:
   1) Public Key  : Account → General → Public Key
   2) Service ID  : Email Services → chọn service đã kết nối
   3) Template ID : Email Templates → chọn template đã tạo
   Template nên có các biến: {{from_name}}, {{confirm_status}}, {{message}}
   Người nhận (namnguyena14k58qo@gmail.com) cấu hình trong "To Email"
   của Template trên dashboard EmailJS — không cần sửa gì trong code.
   ============================================================ */
const EMAILJS_CONFIG = {
  publicKey:  "myxjZ2Fk9fQLD1jc9",
  serviceId:  "service_94b6dnf",
  templateId: "template_gecn1hu",
  toEmail:    "namnguyena14k58qo@gmail.com"
};

if (typeof emailjs !== "undefined"){
  emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
}

function motionScale(){
  const w = window.innerWidth;
  if (w >= 1024) return 1.0;
  if (w >= 640)  return 0.8;
  return 0.6;
}

const images = {
  logo:        "logo.jpg",
  cover:       "main.jpg",
  film1:       "frend1.JPG",
  film2:       "frend2.JPG",
  film3:       "frend3.JPG",
  film4:       "frend4.JPG",
  film5:       "frend5.JPG",
  film6:       "frend6.JPG",
  film7:       "frend7.JPG",
  gallery1:    "gal1.JPG",
  gallery2:    "gal2.JPG",
  gallery3:    "gal3.JPG",
  gallery4:    "gal4.JPG",
  gallery5:    "sash3.jpg",
  gallery6:    "sash5.JPG",
  slider1:     "sli1.jpg",
  slider2:     "sli2.jpg",
  slider3:     "sli3.jpg",
  slider4:     "sli4.jpg",
  slider5:     "sli5.jpg",
  thanks:      "last.jpg",
};

const invitation = {
  school:      "HỌC VIỆN TÀI CHÍNH",
  schoolEn:    "ACADEMY OF FINANCE",
  graduate:    "",
  major:       "Hệ thống thông tin quản lý",
  classInfo:   "K60 (2022 - 2026)",
  guest:       "Bạn",
  date:        "20",
  month:       "Tháng 08",
  year:        "Năm 2026",
  time:        "15:00, Thứ Năm",
  venueName:   "HỘI TRƯỜNG 700 - HỌC VIỆN TÀI CHÍNH",
  venueAddress:"Số 58, Lê Văn Hiến, Đức Thắng, Hà Nội",
  directionUrl:"https://maps.app.goo.gl/fiWh6k8vfyEP1pacA",
  message: "Tài chính đến với mình như một cơ hội, mang theo rất nhiều điều để học, để lớn lên. Hoá ra những áp lực từng trải qua cũng chỉ tóm gọn trong tiếng thở dài trôi đi mất, chỉ có trải nghiệm và sự mạnh mẽ là ở lại. Mong rằng mỗi chúng ta hôm nay hay muôn ngày sau vẫn sẽ sống đời kiêu hãnh có khiêm nhường, hạnh phúc có bình an. Mong cho chúng ta dù có khó khăn thế nào thì vẫn luôn kiên cường vượt qua, chân cứng đá mền vượt qua chông gai và đặc biệt luôn là những người tử tế.",
  rsvpNote: "Vui lòng xác nhận sự tham dự của bạn để mình chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng cảm ơn!",
  fullImageCaption: "Học viện Tài chính"
};

/* ============================================================
   TIMELINE — "Hành trình thanh xuân"
   Danh sách các dấu mốc trong suốt quãng đời sinh viên.
   Những mốc chưa có mô tả gốc đã được viết bổ sung để đầy đủ
   cảm xúc và dễ nhớ hơn.
   ============================================================ */
const timeline = [
  {
    date: "10/2022",
    title: "Ngày đầu nhập học",
    desc: "Bước chân rụt rè qua cổng trường đại học, là đứa phát biểu đầu tiên được 9 điểm của lớp."
  },
  {
    date: "11/2022",
    title: "Những người bạn thân",
    desc: "Tìm những người đồng hành, cùng nhau chia sẻ nhiều điều trong học tập, công việc và cuộc sống."
  },
  {
    date: "24/11/2022",
    title: "Lần đầu viết NCKH",
    desc: "Tham gia Hội thảo cấp Học viện, Hội thảo Chuyển đổi số cấp Khoa. Lần đầu được đứng tham vấn trước toàn thể các tác giả NCKH và còn là cấp Học viện, siêu tự hào."
  },
  {
    date: "17/10/2023",
    title: "Sinh viên 5 tốt — Cấp Học viện",
    desc: "Hóa ra hắn nỗ lực từ những điều chưa hoàn hảo nhất và trở thành sinh viên 5 tốt, đạt GPA xuất sắc."
  },
  {
    date: "20/03/2024 & 18/04/2024",
    title: "Tiếp tục hành trình NCKH",
    desc: "Tiếp tục tham gia nghiên cứu khoa học và được đăng bài — một cột mốc nhỏ nhưng là minh chứng cho sự kiên trì không dừng lại ở lần đầu."
  },
  {
    date: "20/09/2024",
    title: "Học bổng khuyến khích học tập — Lần 1",
    desc: "Manifest thành công học bổng khuyến khích học tập lần đầu tiên, thành quả xứng đáng cho một hành trình miệt mài trên giảng đường."
  },
  {
    date: "18/05/2025",
    title: "Festival Chuyển đổi số — Giải Quán quân",
    desc: "Tham gia Festival \"Chuyển đổi số\" và xuất sắc giành giải Quán quân, dấu ấn đáng tự hào của một năm nhiều nỗ lực."
  },
  {
    date: "05/08/2025",
    title: "NCKH gặt hái thành quả",
    desc: "Hoàn thành công trình nghiên cứu khoa học, đạt giải Nhì cấp Khoa và giải Ba cấp Học viện — trái ngọt cho những đêm miệt mài cùng số liệu."
  },
  {
    date: "19/09/2025",
    title: "Học bổng khuyến khích học tập — Lần 2",
    desc: "Manifest thành công học bổng khuyến khích học tập lần thứ hai, tiếp nối hành trình cố gắng không ngừng nghỉ."
  },
  {
    date: "24/11/2025",
    title: "Đội tuyển Olympic Tin học",
    desc: "Đỗ đội tuyển Olympic Tin học, đại diện Học viện tham gia khối không chuyên tại Hồ Chí Minh — một trải nghiệm đáng nhớ ngoài giảng đường quen thuộc."
  },
  {
    date: "14/05/2026",
    title: "NCKH — Giải Ba cấp Khoa",
    desc: "Hoàn thành công trình nghiên cứu khoa học, đạt giải Ba cấp Khoa, khép lại một chặng nghiên cứu đầy tâm huyết."
  },
  {
    date: "25/05/2026",
    title: "Bảo vệ đồ án tốt nghiệp",
    desc: "Bảo vệ thành công đồ án tốt nghiệp chuyên ngành 41, đạt điểm 9.9 — thành quả rực rỡ khép lại 4 năm đại học."
  },
  {
    date: "01/06/2026",
    title: "Học bổng khuyến khích học tập — Lần 3",
    desc: "Manifest thành công học bổng khuyến khích học tập lần thứ ba, một dấu mốc đẹp trước khi khép lại hành trình sinh viên."
  }
];

const UTILS = {
  qs:  (sel, ctx) => (ctx || document).querySelector(sel),
  qsa: (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel)),
  clamp: (v, min, max) => Math.min(Math.max(v, min), max),
  lerp: (a, b, t) => a + (b - a) * t,
  now: () => performance.now() / 1000
};

/* ============================================================
   IMAGE LOADER — chống lỗi ảnh vỡ trên mobile / GitHub Pages
   ------------------------------------------------------------
   GitHub Pages chạy trên server phân biệt HOA/thường (Linux),
   trong khi máy tính cá nhân (Windows/macOS) thường KHÔNG phân
   biệt. Vì vậy 1 file khai báo là "anh1.JPG" trong code nhưng
   file thật trên repo là "anh1.jpg" (hoặc ngược lại) sẽ chạy
   ngon ở máy local nhưng vỡ ảnh khi mở trên điện thoại qua
   GitHub Pages.

   Hàm dưới đây tự thử lại nhiều biến thể HOA/thường trước khi
   chịu thua. Nếu vẫn không tìm thấy ảnh thật, nó ẩn khung ảnh
   gọn gàng thay vì hiện icon "ảnh vỡ" xấu xí.
   ============================================================ */
function buildImageCandidates(filename){
  if (!filename) return [];
  const dot = filename.lastIndexOf(".");
  if (dot === -1) return [filename];
  const base = filename.slice(0, dot);
  const ext  = filename.slice(dot + 1).toLowerCase();

  const extGroups = {
    jpg:  ["jpg","JPG","jpeg","JPEG","Jpg"],
    jpeg: ["jpeg","JPEG","jpg","JPG","Jpeg"],
    png:  ["png","PNG","Png"],
    webp: ["webp","WEBP","Webp"]
  };
  const list = extGroups[ext] || [ext, ext.toUpperCase()];
  const seen = new Set([filename]);
  const out = [filename];
  list.forEach(e => {
    const candidate = `${base}.${e}`;
    if (!seen.has(candidate)){ seen.add(candidate); out.push(candidate); }
  });
  return out;
}

function setImageSafely(imgEl, filename, fallbackSelector){
  if (!imgEl) return;
  const candidates = buildImageCandidates(filename);
  let i = 0;
  function tryNext(){
    if (i >= candidates.length){
      // hết cách thử — ẩn khung ảnh gọn gàng thay vì icon vỡ
      const wrap = fallbackSelector ? imgEl.closest(fallbackSelector) : imgEl.parentElement;
      if (wrap) wrap.classList.add("img-missing");
      imgEl.removeAttribute("src");
      imgEl.onerror = null;
      return;
    }
    imgEl.src = candidates[i++];
  }
  imgEl.onerror = tryNext;
  tryNext();
}

const ANIMATION = {
  runLoader(onDone){
    const loader = UTILS.qs("#loader");
    const fill = UTILS.qs("#loaderFill");
    if (!loader || !fill){ onDone && onDone(); return; }
    const start = performance.now();
    let progress = 0;

    function step(){
      try{
        progress += (92 - progress) * 0.06;
        fill.style.width = progress.toFixed(1) + "%";
        const elapsed = performance.now() - start;
        if (elapsed < CONFIG.loaderMinDuration){
          requestAnimationFrame(step);
        } else {
          fill.style.width = "100%";
          setTimeout(() => {
            loader.classList.add("is-hidden");
            onDone && onDone();
          }, 260);
        }
      } catch(err){
        console.warn("[gra.js] Lỗi loader:", err);
        loader.classList.add("is-hidden");
      }
    }
    requestAnimationFrame(step);
  },

  initReveal(){
    const targets = UTILS.qsa(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: CONFIG.revealRootMargin, threshold: CONFIG.revealThreshold });
    targets.forEach(t => io.observe(t));
  },

  /* Khớp pivot sash */
  initSash(){
    const segTop = UTILS.qs("#sashSegTop");
    const segMid = UTILS.qs("#sashSegMid");
    const segTip = UTILS.qs("#sashSegTip");
    if (!segTop || !segMid || !segTip) return;

    const osc = {
      shoulderRot: { period: 14.0, amp: 0.7,  phase: 0.2 },
      waistRot:    { period: 8.6,  amp: 1.8,  phase: 2.4 },
      waistTx:     { period: 11.2, amp: 1.4,  phase: 1.1 },
      hemRot:      { period: 6.3,  amp: 2.6,  phase: 4.0 },
      hemTx:       { period: 9.7,  amp: 2.2,  phase: 3.2 },
      flutter:     { period: 2.3,  amp: 0.55, phase: 0.6 }
    };

    function wave(t, o){
      return Math.sin((t / o.period) * Math.PI * 2 + o.phase) * o.amp;
    }

    const cur = { shoulderRot: 0, waistRot: 0, waistTx: 0, hemRot: 0, hemTx: 0 };
    const SMOOTH = 0.045;

    function frame(){
      const t = UTILS.now();
      const scale = motionScale();

      const targetShoulderRot = wave(t, osc.shoulderRot) * scale;
      const targetWaistRot    = wave(t, osc.waistRot)    * scale;
      const targetWaistTx     = wave(t, osc.waistTx)     * scale;
      const flutter           = wave(t, osc.flutter)     * scale;
      const targetHemRot      = (wave(t, osc.hemRot) + flutter * 0.7) * scale;
      const targetHemTx       = (wave(t, osc.hemTx)  + flutter * 0.4) * scale;

      cur.shoulderRot = UTILS.lerp(cur.shoulderRot, targetShoulderRot, SMOOTH);
      cur.waistRot    = UTILS.lerp(cur.waistRot,    targetWaistRot,    SMOOTH);
      cur.waistTx     = UTILS.lerp(cur.waistTx,     targetWaistTx,     SMOOTH);
      cur.hemRot      = UTILS.lerp(cur.hemRot,      targetHemRot,      SMOOTH * 1.3);
      cur.hemTx       = UTILS.lerp(cur.hemTx,       targetHemTx,       SMOOTH * 1.3);

      segTop.setAttribute("transform", `rotate(${cur.shoulderRot.toFixed(3)} 50 0)`);
      segMid.setAttribute("transform", `rotate(${cur.waistRot.toFixed(3)} 50 120) translate(${cur.waistTx.toFixed(2)} 0)`);
      segTip.setAttribute("transform", `rotate(${cur.hemRot.toFixed(3)} 50 250) translate(${cur.hemTx.toFixed(2)} 0)`);

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  },

  initSlider(){
    const el = UTILS.qs(".slider-swiper");
    if (!el || typeof Swiper === "undefined") return;

    new Swiper(el, {
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: CONFIG.sliderSpeed,
      autoplay: { delay: CONFIG.sliderAutoplayDelay, disableOnInteraction: false },
      pagination: { el: ".section-slider .swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".section-slider .swiper-button-next",
        prevEl: ".section-slider .swiper-button-prev"
      },
      keyboard: { enabled: true },
      a11y: { enabled: true },
      grabCursor: true
    });
  },

  attachRipple(button){
    button.addEventListener("click", function(e){
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top  = (e.clientY - rect.top  - size / 2) + "px";
      button.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  },

  initCountdown(){
    // Setup target date based on invitation info: 15/08/2026 10:00
    const targetDate = new Date("2026-08-20T15:00:00").getTime();
    
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        UTILS.qs("#cd-days").textContent = "00";
        UTILS.qs("#cd-hours").textContent = "00";
        UTILS.qs("#cd-mins").textContent = "00";
        UTILS.qs("#cd-secs").textContent = "00";
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      UTILS.qs("#cd-days").textContent = days.toString().padStart(2, '0');
      UTILS.qs("#cd-hours").textContent = hours.toString().padStart(2, '0');
      UTILS.qs("#cd-mins").textContent = minutes.toString().padStart(2, '0');
      UTILS.qs("#cd-secs").textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
};

const UI = {
  populateText(){
    UTILS.qs("#coverSchool").textContent = invitation.school;
    UTILS.qs("#coverSchoolEn").textContent = invitation.schoolEn;
    UTILS.qs("#sashName").textContent = invitation.graduate;
    UTILS.qs("#sashMajor").textContent = invitation.major;
    UTILS.qs("#sashClass").textContent = invitation.classInfo;

    UTILS.qs("#guestName").textContent = invitation.guest;
    UTILS.qs("#infoTime").textContent = invitation.time;
    UTILS.qs("#infoMonthLabel").textContent = invitation.month;
    UTILS.qs("#infoDay").textContent = invitation.date;
    UTILS.qs("#infoYearLabel").textContent = invitation.year;
    UTILS.qs("#infoVenueName").textContent = invitation.venueName;
    UTILS.qs("#infoVenueAddress").textContent = invitation.venueAddress;
    UTILS.qs("#btnDirection").href = invitation.directionUrl;

    UTILS.qs("#messageText").textContent = invitation.message;
    UTILS.qs("#rsvpNote").textContent = invitation.rsvpNote;

    UTILS.qs("#fullimageCaption").textContent = invitation.fullImageCaption;
    UTILS.qs("#thanksDate").textContent = `${invitation.date} ${invitation.month} · ${invitation.year}`;
  },

  populateImages(){
    setImageSafely(UTILS.qs("#coverLogo"), images.logo, ".loader-logo, .cover-logo-wrap");
    setImageSafely(UTILS.qs("#coverPhoto"), images.cover, ".cover-photo-wrap");
    setImageSafely(UTILS.qs(".thanks-img img"), images.thanks, ".thanks-img");
  },

  renderTimeline(){
    const list = UTILS.qs("#timelineList");
    if (!list) return;
    list.innerHTML = timeline.map((item, i) => `
      <div class="timeline-item reveal reveal-delay-${(i % 3) + 1}">
        <span class="timeline-dot"></span>
        <div class="timeline-card">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-title">${item.title}</div>
          <p class="timeline-desc">${item.desc}</p>
        </div>
      </div>
    `).join("");
  },

  renderFilmMarquee(){
    const marquee = UTILS.qs("#filmMarquee");
    const filmKeys = ["film1", "film2", "film3", "film4", "film5", "film6", "film7"];
    let html = "";
    // Generate images — data-file thay vì src, JS sẽ tự nạp ảnh an toàn bên dưới
    for (let key of filmKeys) {
        html += `<div class="film-frame"><img data-file="${images[key]}" alt="" loading="lazy"></div>`;
    }
    // Duplicate for seamless infinite marquee scroll
    marquee.innerHTML = html + html;
    UTILS.qsa("img[data-file]", marquee).forEach(img => setImageSafely(img, img.dataset.file, ".film-frame"));
  },

  renderGallery(){
    const grid = UTILS.qs("#galleryGrid");
    // Cố định đúng 6 ảnh, xếp lưới 2 cột x 3 hàng đều nhau — mỗi ảnh 1 ô, không dồn/lệch
    const keys = ["gallery1", "gallery2", "gallery3", "gallery4", "gallery5", "gallery6"];
    grid.innerHTML = keys.map((k, i) => `
      <div class="gallery-item gallery-item-${i+1} reveal reveal-delay-${(i%3)+1}">
        <img data-file="${images[k]}" alt="" loading="lazy" decoding="async">
      </div>
    `).join("");
    UTILS.qsa("img[data-file]", grid).forEach(img => setImageSafely(img, img.dataset.file, ".gallery-item"));
  },

  renderSlider(){
    const wrapper = UTILS.qs("#sliderWrapper");
    const keys = ["slider1", "slider2", "slider3", "slider4", "slider5"];
    const origins = ["origin-a", "origin-b", "origin-c", "origin-b", "origin-a"];
    wrapper.innerHTML = keys.map((k, i) => `
      <div class="swiper-slide">
        <div class="slide-kenburns ${origins[i]}">
          <img data-file="${images[k]}" alt="" loading="lazy" decoding="async">
        </div>
      </div>
    `).join("");
    UTILS.qsa("img[data-file]", wrapper).forEach(img => setImageSafely(img, img.dataset.file, ".swiper-slide"));
  },

  initRsvpForm(){
    const form = UTILS.qs("#rsvpForm");
    const toast = UTILS.qs("#rsvpToast");
    const toastError = UTILS.qs("#rsvpToastError");
    const btn = UTILS.qs("#btnSubmit");
    ANIMATION.attachRipple(btn);

    // Auto-grow lời nhắn gửi: khung to dần theo nội dung, viết dài
    // thoải mái như lưu bút mà không bị bó trong ô nhỏ.
    const messageInput = UTILS.qs("#messageInput");
    if (messageInput){
      const autoGrow = () => {
        messageInput.style.height = "auto";
        messageInput.style.height = messageInput.scrollHeight + "px";
      };
      messageInput.addEventListener("input", autoGrow);
      autoGrow();
    }

    const confirmLabels = {
      yes:   "Có, mình sẽ đến",
      maybe: "Mình chưa chắc chắn",
      no:    "Rất tiếc, mình không thể đến"
    };

    function showToast(el){
      el.classList.add("is-visible");
      setTimeout(() => el.classList.remove("is-visible"), 4500);
    }

    form.addEventListener("submit", function(e){
      e.preventDefault();
      if (btn.classList.contains("is-loading")) return;

      toast.classList.remove("is-visible");
      toastError.classList.remove("is-visible");

      const formData = new FormData(form);
      const fromName = (formData.get("name") || "").toString().trim();
      const confirmValue = (formData.get("confirm") || "").toString();
      const messageValue = (formData.get("message") || "").toString().trim();

      const templateParams = {
        from_name: fromName || "Khách mời",
        confirm_status: confirmLabels[confirmValue] || confirmValue,
        message: messageValue || "(Không có lời nhắn)",
        to_email: EMAILJS_CONFIG.toEmail
      };

      btn.classList.add("is-loading");
      btn.disabled = true;

      const finish = () => {
        btn.classList.remove("is-loading");
        btn.disabled = false;
      };

      if (typeof emailjs === "undefined"){
        // EmailJS chưa tải được (vd. mất mạng) — báo lỗi thay vì âm thầm bỏ qua
        finish();
        showToast(toastError);
        return;
      }

      emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
        .then(function(){
          finish();
          form.reset();
          if (messageInput) messageInput.style.height = "auto";
          showToast(toast);
        })
        .catch(function(err){
          console.error("EmailJS send failed:", err);
          finish();
          showToast(toastError);
        });
    });
  }
};

/* ============================================================
   PROTECT — chặn sao chép / kéo ảnh / phím tắt lưu trang
   (Lưu ý: không có cách nào chặn 100% việc chụp màn hình,
   đây là lớp bảo vệ ở mức trải nghiệm thông thường)
   ============================================================ */
const PROTECT = {
  toastTimer: null,

  showToast(msg){
    let toast = UTILS.qs("#protectToast");
    if (!toast){
      toast = document.createElement("div");
      toast.id = "protectToast";
      toast.className = "protect-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(PROTECT.toastTimer);
    PROTECT.toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  },

  init(){
    const stage = UTILS.qs(".stage") || document;

    // Chặn menu chuột phải
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
      PROTECT.showToast("Nội dung thiệp đã được bảo vệ 🌿");
    });

    // Chặn kéo-thả ảnh (lưu ảnh qua thao tác kéo)
    document.addEventListener("dragstart", function(e){
      if (e.target && e.target.tagName === "IMG") e.preventDefault();
    });

    // Chặn bôi đen / chọn văn bản
    document.addEventListener("selectstart", function(e){
      const tag = e.target && e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
    });

    // Chặn sao chép nội dung văn bản
    document.addEventListener("copy", function(e){
      const tag = e.target && e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      PROTECT.showToast("Đã tắt sao chép nội dung 🌿");
    });

    // Chặn các phím tắt lưu trang / xem mã nguồn / devtools
    document.addEventListener("keydown", function(e){
      const key = (e.key || "").toLowerCase();
      const blockCombo =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["i","j","c"].includes(key)) ||
        (e.metaKey && e.altKey && ["i","j","c"].includes(key)) ||
        (e.ctrlKey && ["s","u","p"].includes(key)) ||
        (e.metaKey && ["s","p"].includes(key));
      if (blockCombo){
        e.preventDefault();
        PROTECT.showToast("Thao tác này đã bị vô hiệu hoá 🌿");
      }
    });

    // Ảnh nền — long-press trên mobile cũng khó lưu hơn vì pointer-events:none + touch-callout:none
    stage.querySelectorAll("img").forEach(img => {
      img.setAttribute("draggable", "false");
      img.addEventListener("contextmenu", e => e.preventDefault());
    });
  }
};

document.addEventListener("DOMContentLoaded", function(){
  // Mỗi bước được bọc try/catch riêng: nếu 1 bước lỗi (vd thiếu 1
  // phần tử nào đó), các bước còn lại — đặc biệt là runLoader() —
  // vẫn chạy bình thường thay vì làm treo cả trang trên điện thoại.
  function safe(fn, label){
    try { fn(); }
    catch (err){ console.warn("[gra.js] Lỗi ở bước:", label, err); }
  }

  safe(() => UI.populateText(),      "populateText");
  safe(() => UI.populateImages(),    "populateImages");
  safe(() => UI.renderTimeline(),    "renderTimeline");
  safe(() => UI.renderFilmMarquee(), "renderFilmMarquee");
  safe(() => UI.renderGallery(),     "renderGallery");
  safe(() => UI.renderSlider(),      "renderSlider");
  safe(() => UI.initRsvpForm(),      "initRsvpForm");

  safe(() => ANIMATION.initReveal(),    "initReveal");
  safe(() => ANIMATION.initSash(),      "initSash");
  safe(() => ANIMATION.initSlider(),    "initSlider");
  safe(() => ANIMATION.initCountdown(), "initCountdown");

  safe(() => PROTECT.init(), "protectInit");

  safe(() => ANIMATION.runLoader(), "runLoader");

  // Lưới an toàn cuối cùng: nếu vì lý do gì đó loader vẫn còn
  // hiển thị sau 6 giây (ví dụ lỗi JS không lường trước), tự ẩn
  // đi để người dùng trên mobile không bị kẹt ở màn hình loading.
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader && !loader.classList.contains("is-hidden")){
      loader.classList.add("is-hidden");
    }
  }, 6000);
});

})();
