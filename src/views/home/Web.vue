<template>
  <div class="app-container">
    <!-- 背景装饰 -->
    <div class="bg-decoration">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-overlay"></div>
    </div>

    <swiper :no-swiping="true" direction="vertical" :modules="modules" :mousewheel="{ mousewheel: true }" @swiper="onSwiper">
      <!-- 第一屏：Hero 区域 -->
      <swiper-slide>
        <div class="slide-content">
          <!-- 导航栏 -->
          <nav class="nav-bar">
            <div class="nav-container">
              <div class="logo-section">
                <div class="logo-icon">
                  <svg viewBox="0 0 40 40" class="w-40px h-40px">
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#6366F1"/>
                        <stop offset="100%" style="stop-color:#A855F7"/>
                      </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" opacity="0.2"/>
                    <path d="M20 8 L28 14 L28 26 L20 32 L12 26 L12 14 Z" fill="url(#logoGradient)"/>
                  </svg>
                </div>
                <div class="logo-text">
                  <span class="brand-name">神龙云</span>
                  <span class="brand-slogan">ShenlongCloud</span>
                </div>
              </div>
              <div class="nav-links">
                <a href="#" class="nav-link active">首页</a>
                <a href="#features" class="nav-link">产品特性</a>
                <a href="#pricing" class="nav-link">套餐价格</a>
                <a href="#about" class="nav-link">关于我们</a>
              </div>
              <div class="nav-actions">
                <button class="btn btn-ghost" @click="toQQ">联系客服</button>
                <button class="btn btn-primary" @click="download(1)">立即下载</button>
              </div>
            </div>
          </nav>

          <!-- Hero 内容 -->
          <div class="hero-section">
            <div class="hero-content">
              <div class="hero-badge">
                <span class="badge badge-accent">
                  <span class="pulse-dot"></span>
                  全新升级 · 更快更稳定
                </span>
              </div>
              <h1 class="hero-title">
                <span class="text-gradient">云端智能</span>
                <br />
                您的另一台手机
              </h1>
              <p class="hero-description">
                神龙云手机 — 基于云计算技术的虚拟智能设备。支持7×24小时云端托管、批量多开、智能操控，
                让您随时随地掌控云端世界。
              </p>

              <!-- 下载按钮组 -->
              <div class="download-section">
                <div class="download-buttons">
                  <button class="download-btn primary" @click="download(1)">
                    <div class="btn-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" class="w-24px h-24px">
                        <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/>
                      </svg>
                    </div>
                    <div class="btn-text">
                      <span class="btn-label">电脑版下载</span>
                      <span class="btn-hint">Windows 10+</span>
                    </div>
                  </button>
                  <button class="download-btn" @click="download(2)">
                    <div class="btn-icon android">
                      <svg viewBox="0 0 24 24" fill="currentColor" class="w-24px h-24px">
                        <path d="M17.6 11.4c-.2-.2-.5-.3-.7-.1l-1.4.8c-.5-.4-1.1-.7-1.8-.9l-.2-1.5c0-.3-.3-.5-.5-.5h-2c-.3 0-.5.2-.5.5l-.2 1.5c-.7.2-1.3.5-1.8.9l-1.4-.8c-.2-.2-.5-.1-.7.1l-1.4 1.4c-.2.2-.3.5-.1.7l.8 1.4c-.4.5-.7 1.1-.9 1.8l-1.5.2c-.3 0-.5.3-.5.5v2c0 .3.2.5.5.5l1.5.2c.2.7.5 1.3.9 1.8l-.8 1.4c-.2.2-.1.5.1.7l1.4 1.4c.2.2.5.3.7.1l1.4-.8c.5.4 1.1.7 1.8.9l.2 1.5c0 .3.3.5.5.5h2c.3 0 .5-.2.5-.5l.2-1.5c.7-.2 1.3-.5 1.8-.9l1.4.8c.2.2.5.1.7-.1l1.4-1.4c.2-.2.3-.5.1-.7l-.8-1.4c.4-.5.7-1.1.9-1.8l1.5-.2c.3 0 .5-.3.5-.5v-2c0-.3-.2-.5-.5-.5l-1.5-.2c-.2-.7-.5-1.3-.9-1.8l.8-1.4c.2-.2.1-.5-.1-.7l-1.4-1.4zM12 18c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                      </svg>
                    </div>
                    <div class="btn-text">
                      <span class="btn-label">Android 下载</span>
                      <span class="btn-hint">安卓 8.0+</span>
                    </div>
                  </button>
                  <button class="download-btn" @click="download(3)">
                    <div class="btn-icon ios">
                      <svg viewBox="0 0 24 24" fill="currentColor" class="w-24px h-24px">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <div class="btn-text">
                      <span class="btn-label">iOS 下载</span>
                      <span class="btn-hint">App Store</span>
                    </div>
                  </button>
                </div>
                <div class="download-extra">
                  <button class="extra-btn" @click="download(4)">
                    <span>华为专用版</span>
                  </button>
                  <button class="extra-btn" @click="download(5)">
                    <span>测试版</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Hero 图片/3D展示 -->
            <div class="hero-visual">
              <div class="phone-mockup">
                <div class="phone-frame">
                  <div class="phone-screen">
                    <div class="screen-content">
                      <div class="app-grid">
                        <div class="app-icon" v-for="i in 12" :key="i"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="phone-glow"></div>
              </div>
              <div class="floating-cards">
                <div class="float-card card-1">
                  <span class="card-icon">🚀</span>
                  <span class="card-text">极速运行</span>
                </div>
                <div class="float-card card-2">
                  <span class="card-icon">☁️</span>
                  <span class="card-text">云端托管</span>
                </div>
                <div class="float-card card-3">
                  <span class="card-icon">🔒</span>
                  <span class="card-text">安全稳定</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 滚动提示 -->
          <div class="scroll-hint">
            <span>向下滑动探索更多</span>
            <div class="scroll-arrow bouncy">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-24px h-24px">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- 第二屏：产品特性 -->
      <swiper-slide>
        <div class="slide-content features-slide" id="features">
          <div class="section-container">
            <div class="section-header">
              <span class="section-tag">核心优势</span>
              <h2 class="section-title">
                <span class="text-gradient">强大功能</span>
                <br />
                为您打造极致体验
              </h2>
              <p class="section-description">
                神龙云手机采用最新云计算技术，为您提供稳定、高效、安全的云端手机服务
              </p>
            </div>

            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" stroke="url(#grad1)" stroke-width="2" opacity="0.3"/>
                    <path d="M24 14v10l7 7" stroke="url(#grad1)" stroke-width="3" stroke-linecap="round"/>
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#06B6D4"/>
                        <stop offset="100%" style="stop-color:#6366F1"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">7×24 全天候运行</h3>
                <p class="feature-desc">云端服务器永不断电，您的应用持续在线运行，不受本地设备限制</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="12" width="12" height="24" rx="2" stroke="url(#grad2)" stroke-width="2"/>
                    <rect x="28" y="12" width="12" height="24" rx="2" stroke="url(#grad2)" stroke-width="2"/>
                    <path d="M20 24h8" stroke="url(#grad2)" stroke-width="2"/>
                    <defs>
                      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#A855F7"/>
                        <stop offset="100%" style="stop-color:#EC4899"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">批量多开管理</h3>
                <p class="feature-desc">支持同时运行多个云手机实例，统一管理，大幅提升操作效率</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="16" stroke="url(#grad3)" stroke-width="2"/>
                    <path d="M24 16v8l6 6" stroke="url(#grad3)" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="24" cy="8" r="3" fill="url(#grad3)"/>
                    <circle cx="40" cy="24" r="3" fill="url(#grad3)"/>
                    <circle cx="24" cy="40" r="3" fill="url(#grad3)"/>
                    <circle cx="8" cy="24" r="3" fill="url(#grad3)"/>
                    <defs>
                      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#10B981"/>
                        <stop offset="100%" style="stop-color:#06B6D4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">智能自动化</h3>
                <p class="feature-desc">智能托管脚本运行，自动执行重复任务，解放您的双手</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M24 8L8 18v12l16 10 16-10V18L24 8z" stroke="url(#grad4)" stroke-width="2"/>
                    <path d="M24 8v22M8 18l16 12 16-12" stroke="url(#grad4)" stroke-width="2"/>
                    <defs>
                      <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#F59E0B"/>
                        <stop offset="100%" style="stop-color:#EF4444"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">高性能配置</h3>
                <p class="feature-desc">采用企业级服务器硬件，提供流畅稳定的云端手机体验</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M24 4l6 8h-4v10h8l-8 6 8 6h-8v10h4l-6 8-6-8h4V34h-8l8-6-8-6h8V12h-4l6-8z" stroke="url(#grad5)" stroke-width="2"/>
                    <defs>
                      <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#6366F1"/>
                        <stop offset="100%" style="stop-color:#A855F7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">全平台覆盖</h3>
                <p class="feature-desc">支持 Windows、Android、iOS 多端同步，随时随地远程操控</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="url(#grad6)" stroke-width="2"/>
                    <path d="M18 24l4 4 8-8" stroke="url(#grad6)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                      <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#EC4899"/>
                        <stop offset="100%" style="stop-color:#F59E0B"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="feature-title">安全可靠</h3>
                <p class="feature-desc">数据加密存储，隐私安全有保障，企业级安全防护体系</p>
              </div>
            </div>
          </div>

          <!-- 滚动提示 -->
          <div class="scroll-hint">
            <span>继续探索</span>
            <div class="scroll-arrow bouncy">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-24px h-24px">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- 第三屏：联系我们 & 页脚 -->
      <swiper-slide>
        <div class="slide-content footer-slide" id="about">
          <div class="section-container">
            <div class="section-header">
              <span class="section-tag">联系我们</span>
              <h2 class="section-title">
                <span class="text-gradient">专业团队</span>
                <br />
                为您提供优质服务
              </h2>
            </div>

            <div class="contact-grid">
              <div class="contact-card">
                <div class="contact-icon">
                  <svg viewBox="0 0 48 48" fill="currentColor" class="w-48px h-48px text-primary-400">
                    <path d="M40 8H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z"/>
                  </svg>
                </div>
                <h3 class="contact-title">官方QQ群</h3>
                <p class="contact-desc">加入官方社群，获取最新资讯</p>
                <div class="qr-placeholder">
                  <img src="@/assets/image/home/slide-3-1.png" alt="QQ群二维码" class="qr-image" />
                </div>
              </div>

              <div class="contact-card">
                <div class="contact-icon">
                  <svg viewBox="0 0 48 48" fill="currentColor" class="w-48px h-48px text-accent-purple">
                    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 34h-4v-4h4v4zm4.13-15.49l-1.79 1.84C26.9 25.79 26 27 26 30h-4v-1c0-2.21.9-4.21 2.34-5.66l2.49-2.52C27.55 20.1 28 19.1 28 18c0-2.21-1.79-4-4-4s-4 1.79-4 4h-4c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.76-.71 3.35-1.87 4.51z"/>
                  </svg>
                </div>
                <h3 class="contact-title">代理合作</h3>
                <p class="contact-desc">诚邀合作伙伴，共创美好未来</p>
                <div class="qr-placeholder">
                  <img src="@/assets/image/home/slide-3-2.png" alt="代理合作二维码" class="qr-image" />
                </div>
              </div>

              <div class="contact-card">
                <div class="contact-icon">
                  <svg viewBox="0 0 48 48" fill="currentColor" class="w-48px h-48px text-accent-cyan">
                    <path d="M40 4H8C5.79 4 4 5.79 4 8v28c0 2.21 1.79 4 4 4h8l8 8 8-8h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM24 34l-2-6-6-2 6-2 2-6 2 6 6 2-6 2-2 6z"/>
                  </svg>
                </div>
                <h3 class="contact-title">在线客服</h3>
                <p class="contact-desc">7×24小时在线，随时为您解答</p>
                <button class="contact-btn" @click="toQQ">
                  <span>QQ在线客服</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-20px h-20px">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- 页脚 -->
          <footer class="site-footer">
            <div class="footer-content">
              <div class="footer-brand">
                <div class="footer-logo">
                  <svg viewBox="0 0 40 40" class="w-32px h-32px">
                    <defs>
                      <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#6366F1"/>
                        <stop offset="100%" style="stop-color:#A855F7"/>
                      </linearGradient>
                    </defs>
                    <path d="M20 4 L32 12 L32 28 L20 36 L8 28 L8 12 Z" fill="url(#footerGradient)"/>
                  </svg>
                  <span>神龙云手机</span>
                </div>
                <p class="footer-slogan">云端智能，触手可及</p>
              </div>

              <div class="footer-links">
                <div class="footer-column">
                  <h4>产品服务</h4>
                  <a href="#">云手机</a>
                  <a href="#">套餐价格</a>
                  <a href="#">常见问题</a>
                </div>
                <div class="footer-column">
                  <h4>法律条款</h4>
                  <a href="/user_agreement">用户协议</a>
                  <a href="/privacy">隐私政策</a>
                  <a href="/disclaimer">免责声明</a>
                </div>
                <div class="footer-column">
                  <h4>关于我们</h4>
                  <a href="#">公司介绍</a>
                  <a href="#">联系我们</a>
                  <a href="#">加入我们</a>
                </div>
              </div>
            </div>

            <div class="footer-bottom">
              <div class="footer-legal">
                <span>沪公网安备31011502007990号</span>
                <span class="divider">|</span>
                <span>经营许可证 沪B2-20180327</span>
                <span class="divider">|</span>
                <a href="https://beian.miit.gov.cn/" target="_blank" class="icp-link">蜀ICP备20022843号-3A</a>
              </div>
              <p class="copyright">© 2024 成都龙霆互娱信息科技有限公司 版权所有</p>
            </div>
          </footer>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 公告弹窗 -->
    <div v-if="anocementEntry" class="announcement-btn" @click="showAnocement">
      <div class="announcement-icon">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-24px h-24px">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      </div>
      <span>公告</span>
    </div>
  </div>

  <!-- 公告详情弹窗 -->
  <div v-show="show" class="modal-overlay" @click.self="show = false">
    <div class="modal-content">
      <div class="modal-header">
        <h3>系统公告</h3>
        <button class="modal-close" @click="show = false">
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-24px h-24px">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <h4>浙江1区机房维护公告</h4>
        <div class="notice-content">
          <p>尊敬的云手机用户：</p>
          <p>您好！</p>
          <p>为了提供更加稳定和高效的服务，接机房通知，将对杭州机房的交换机进行必要的维护工作。此次维护将涉及以下安排：</p>
          <p><strong>维护时间：</strong>2024年9月12日（星期三）0点至3点。</p>
          <p><strong>维护内容：</strong>交换机维护。</p>
          <p><strong>影响范围：</strong>由于维护工作需要，在此期间，您可能会遇到网络中断，导致游戏离线等问题。</p>
          <p>我们深知此次维护可能会给您带来不便，因此，我们强烈建议您在上述时间段内避免进行任何关键操作，以减少对您业务的影响。</p>
          <p>维护完成后，所有设备将会重启，届时网络服务将恢复正常。我们预计维护工作将在预定时间内完成，但不排除可能会有延迟。我们将尽最大努力缩短维护时间，并确保服务尽快恢复。</p>
          <p>我们对此次维护可能给您带来的不便深表歉意，并感谢您的理解与支持。如有任何疑问或需要进一步的帮助，请随时联系我们的客户服务团队。</p>
          <p>感谢您对我们工作的支持与配合！</p>
          <p>祝您使用愉快！</p>
          <p class="signature">云手机团队<br/>发布日期：2024年9月9日</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel } from 'swiper/modules';

const modules = [Mousewheel];
const homeSwiper = ref(null);

const onSwiper = (swiper: any) => {
  homeSwiper.value = swiper;
};

const download = (type: number) => {
  let url = '';
  if (type === 1) {
    url = 'https://www.ldmnq.com';
  } else if (type === 2) {
    url = 'https://res.ldmnq.com/xdyun/cph/store/XdCloudPhone-dalong-release-v3.22.0-c67.apk';
  } else if (type === 3) {
    url = 'https://apps.apple.com/us/app/神龙云-手机租赁/id6639605182';
  } else if (type === 4) {
    url = 'https://apk.dalongyun.com/apk_dalongyun/CloudPhone_huawei.apk';
  } else if (type === 5) {
    url = 'https://store.shenlongyun.com/apk_shenglongyun/gw-test/shenlongyun_beta.apk';
  }
  window.location.href = url;
};

const show = ref(false);
const anocementEntry = ref(true);

const toQQ = () => {
  window.open(
    'https://webpage.qidian.qq.com/qidian/chatv3/pc.html?kfuin=3009136856&kfext=3009136856&visitorId=126628530317749&visitorid=126628530317749&fid=17441&key=567f3986a56218e1163d3e26488e7f0e&cate=1&type=17&ftype=&tptype=1&tpForm=1&roleKey=roleQQ&roleValue=5&roleUin=0&pid=dsj1w2.7jc781.m25qosux&clickid=13qjsc.o0t3fs.m25qq0jb&qid=126628530317749&env=production&eptype=1&clickType=1&roleData=394&isKfuin=1&isLBS=0&isCustomEntry=0&callback=JSONP_CB_3_1728712389437_504&cb=JSONP_CB_3_1728712389437_504&rkey=7de451f86aa190a38aeb62fd6452251c&linkType=1&waitTime=10013&callImType=1&delayTime=10&translateSwitch=0&source=0&isSsc=0',
  );
};

const showAnocement = () => {
  window.open('https://mp.weixin.qq.com/s/aARnnjtJ604LwyjDTrWmaA');
};
</script>

<style lang="scss" scoped>
// 动画
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes orb-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.bouncy {
  animation: bounce 1.5s infinite;
}

// 主容器
.app-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%);
  position: relative;
  overflow: hidden;
}

// 背景装饰
.bg-decoration {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orb-float 20s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
  top: -200px;
  left: -100px;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%);
  top: 50%;
  right: -150px;
  animation-delay: -7s;
}

.orb-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%);
  bottom: -100px;
  left: 30%;
  animation-delay: -14s;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

// Swiper
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}

.slide-content {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

// 导航栏
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 16px 0;
  background: rgba(15, 15, 35, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
}

.brand-slogan {
  font-size: 11px;
  color: rgba(165, 180, 252, 0.6);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;

  &:hover, &.active {
    color: #fff;
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #6366F1, #A855F7);
    border-radius: 1px;
  }
}

.nav-actions {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 10px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  outline: none;
}

.btn-ghost {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.3);

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.5);
    color: #fff;
  }
}

.btn-primary {
  background: linear-gradient(135deg, #6366F1 0%, #A855F7 100%);
  color: #fff;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
  }
}

// Hero 区域
.hero-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 40px 40px;
  gap: 60px;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-badge {
  margin-bottom: 24px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
}

.badge-accent {
  background: rgba(6, 182, 212, 0.15);
  color: #06B6D4;
  border: 1px solid rgba(6, 182, 212, 0.3);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #06B6D4;
  border-radius: 50%;
  animation: pulse-glow 2s infinite;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  color: #fff;
  margin-bottom: 24px;
}

.text-gradient {
  background: linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #A855F7 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 4s ease infinite;
}

.hero-description {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
}

// 下载按钮
.download-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.download-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
  }

  &.primary {
    background: linear-gradient(135deg, #6366F1 0%, #A855F7 100%);
    border: none;
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);

    &:hover {
      box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
    }

    .btn-icon {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}

.btn-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  &.android {
    background: rgba(16, 185, 129, 0.2);
  }

  &.ios {
    background: rgba(255, 255, 255, 0.1);
  }
}

.btn-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
}

.btn-label {
  font-size: 15px;
  font-weight: 600;
}

.btn-hint {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.download-extra {
  display: flex;
  gap: 12px;
}

.extra-btn {
  padding: 8px 16px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(99, 102, 241, 0.5);
    color: #fff;
  }
}

// Hero 视觉区域
.hero-visual {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 500px;
}

.phone-mockup {
  position: relative;
}

.phone-frame {
  width: 280px;
  height: 560px;
  background: linear-gradient(145deg, #2a2a4a 0%, #1a1a2e 100%);
  border-radius: 40px;
  padding: 12px;
  box-shadow:
    0 0 0 2px rgba(99, 102, 241, 0.3),
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1e1e3f 0%, #0f0f23 100%);
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.screen-content {
  padding: 20px;
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.app-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%);
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.phone-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  z-index: -1;
  animation: pulse-glow 4s ease-in-out infinite;
}

.floating-cards {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  animation: float 4s ease-in-out infinite;
}

.card-1 {
  top: 10%;
  right: -60px;
  animation-delay: 0s;
}

.card-2 {
  top: 45%;
  left: -80px;
  animation-delay: -1.5s;
}

.card-3 {
  bottom: 15%;
  right: -40px;
  animation-delay: -3s;
}

.card-icon {
  font-size: 20px;
}

// 滚动提示
.scroll-hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.scroll-arrow {
  color: rgba(99, 102, 241, 0.8);
}

// Features 区域
.features-slide {
  padding-top: 100px;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50px;
  color: #A5B4FC;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 20px;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.3;
  color: #fff;
  margin-bottom: 16px;
}

.section-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  padding: 32px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 24px;
  transition: all 0.3s;

  &:hover {
    background: rgba(99, 102, 241, 0.08);
    border-color: rgba(99, 102, 241, 0.3);
    transform: translateY(-4px);
  }
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 20px;

  svg {
    width: 100%;
    height: 100%;
  }
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}

.feature-desc {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
}

// Footer 区域
.footer-slide {
  display: flex;
  flex-direction: column;
  padding-top: 100px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 80px;
}

.contact-card {
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(99, 102, 241, 0.3);
  }
}

.contact-icon {
  margin-bottom: 20px;

  svg {
    width: 48px;
    height: 48px;
  }
}

.contact-title {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.contact-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 24px;
}

.qr-placeholder {
  width: 140px;
  height: 140px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.qr-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #6366F1 0%, #A855F7 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
  }
}

// 网站页脚
.site-footer {
  margin-top: auto;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  padding: 60px 40px 30px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.footer-brand {
  max-width: 300px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  span {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
}

.footer-slogan {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 80px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 8px;
  }

  a {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #A5B4FC;
    }
  }
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.footer-legal {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
}

.divider {
  color: rgba(255, 255, 255, 0.2);
}

.icp-link {
  color: rgba(99, 102, 241, 0.8);
  text-decoration: none;

  &:hover {
    color: #A5B4FC;
  }
}

.copyright {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
}

// 公告按钮
.announcement-btn {
  position: fixed;
  top: 200px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: linear-gradient(135deg, #6366F1 0%, #A855F7 100%);
  border-radius: 12px 0 0 12px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  z-index: 50;
  transition: all 0.3s;

  &:hover {
    padding-right: 20px;
  }
}

.announcement-icon {
  animation: bounce 2s infinite;
}

// 弹窗
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213E 100%);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 24px;
  overflow: hidden;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
  }
}

.modal-close {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 4px;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  max-height: calc(80vh - 80px);

  h4 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
  }
}

.notice-content {
  p {
    font-size: 14px;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 12px;

    strong {
      color: #A5B4FC;
    }
  }

  .signature {
    margin-top: 24px;
    text-align: right;
    color: rgba(255, 255, 255, 0.5);
  }
}

// 响应式
@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding-top: 100px;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-title {
    font-size: 42px;
  }

  .download-buttons {
    justify-content: center;
  }

  .download-extra {
    justify-content: center;
  }

  .hero-visual {
    display: none;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-title {
    font-size: 32px;
  }

  .download-buttons {
    flex-direction: column;
  }

  .download-btn {
    width: 100%;
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    gap: 40px;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 40px;
  }
}
</style>
