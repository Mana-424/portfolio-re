
// ページ読み込み時の処理
document.addEventListener("DOMContentLoaded", () => {

  // スクロール時のアニメーション
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // コピーライトの年を自動更新
  const footer = document.querySelector("footer p");

  if (footer) {
    footer.textContent =
      `© ${new Date().getFullYear()} My Portfolio. All Rights Reserved.`;
  }

});
