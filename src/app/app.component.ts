import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="background-wrapper">
      <div class="container">
        <!-- Hero Section -->
        <header class="hero glass-card fade-in">
          <h1>{{ groupName }}</h1>
          <p class="subtitle">{{ translationNote }}</p>
          <p class="tagline">{{ tagline }}</p>
          <a href="#location" class="cta-button">Где мы встречаемся?</a>
        </header>

        <main>
          <!-- About Gamblers Anonymous -->
          <section class="info-section glass-card slide-up" style="animation-delay: 0.1s">
            <h2>Что такое Анонимные Игроки?</h2>
            <div class="about-content">
              <p>{{ aboutGA }}</p>
              <p class="mission">{{ mission }}</p>
            </div>
          </section>

          <!-- Meeting Details -->
          <section class="info-section glass-card highlight-card slide-up" style="animation-delay: 0.2s">
            <h2>Приходите на наши собрания в Варшаве</h2>
            <div class="meeting-highlight">
              <div class="meeting-time">
                <div class="day-time">
                  <span class="label">Когда:</span>
                  <span class="value">{{ schedule }} в {{ time }}</span>
                </div>
                <div class="meeting-type">
                  <span class="badge">{{ meetingType }}</span>
                  <span class="badge">{{ language }}</span>
                </div>
              </div>
            </div>
            <p class="language-note">{{ languageNote }}</p>
          </section>

          <!-- Location -->
          <section id="location" class="info-section glass-card slide-up" style="animation-delay: 0.3s">
            <h2>Как добраться</h2>
            <div class="location-details">
              <p class="address">📍 {{ address }}</p>
              <div class="access-info">
                <p class="access-title">Вход в здание:</p>
                <ol class="access-steps">
                  <li *ngFor="let step of accessSteps">{{ step }}</li>
                </ol>
              </div>
              <p class="venue">
                <strong>Место:</strong> {{ venue }}
              </p>
              <div class="map-container">
                <iframe 
                  width="100%" 
                  height="350" 
                  style="border:0; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.08);"
                  src="https://maps.google.com/maps?q=ul.%20Sienna%2045,%20Warszawa&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  allowfullscreen="" 
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </section>

          <!-- 12 Steps -->
          <section class="info-section glass-card slide-up" style="animation-delay: 0.4s">
            <h2>12 Шагов Выздоровления</h2>
            <p class="section-intro">{{ stepsIntro }}</p>
            <div class="grid-list">
              <div class="grid-card" *ngFor="let step of twelveSteps; let i = index">
                <span class="number">{{ i + 1 }}</span>
                <p>{{ step }}</p>
              </div>
            </div>
          </section>

          <!-- 12 Traditions -->
          <section class="info-section glass-card slide-up" style="animation-delay: 0.5s">
            <h2>12 Шагов к единству</h2>
            <p class="section-intro">{{ traditionsIntro }}</p>
            <div class="grid-list">
              <div class="grid-card" *ngFor="let tradition of twelveTraditions; let i = index">
                <span class="number">{{ i + 1 }}</span>
                <p>{{ tradition }}</p>
              </div>
            </div>
          </section>

          <!-- Contact -->
          <section class="info-section glass-card contact slide-up" style="animation-delay: 0.6s">
            <h2>Свяжитесь с нами</h2>
            <p class="contact-intro">Есть вопросы? Хотите узнать больше?</p>
            <a [href]="'mailto:' + email" class="email-link">
              {{ email }}
            </a>
            <a [href]="'tel:' + phone" class="phone-link">
              📞 {{ phone }}
            </a>
            <p class="confidentiality">Все обращения конфиденциальны</p>
          </section>
        </main>

        <footer>
          <p class="footer-update">Обновлено: {{ lastUpdated }}</p>
        </footer>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    :host {
      display: block;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #2d3748;
    }

    .background-wrapper {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      min-height: 100vh;
      width: 100%;
      padding: 2rem 1rem;
      position: relative;
      overflow: hidden;
    }

    /* Soft animated gradient orb effect */
    .background-wrapper::before {
      content: '';
      position: absolute;
      top: -10%;
      left: -10%;
      width: 50vw;
      height: 50vw;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(161,196,253,0.4) 0%, rgba(194,233,251,0) 70%);
      z-index: 0;
      animation: float 15s infinite ease-in-out alternate;
    }
    
    .background-wrapper::after {
      content: '';
      position: absolute;
      bottom: -10%;
      right: -10%;
      width: 60vw;
      height: 60vw;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(200,216,238,0.5) 0%, rgba(200,216,238,0) 70%);
      z-index: 0;
      animation: float 20s infinite ease-in-out alternate-reverse;
    }

    @keyframes float {
      0% { transform: translate(0, 0); }
      100% { transform: translate(30px, 30px); }
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      position: relative;
      z-index: 1; /* Above background orbs */
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      padding: 3rem 2.5rem;
      margin-bottom: 2.5rem;
    }

    .hero {
      text-align: center;
      padding: 4rem 2rem;
    }

    h1 {
      font-size: 3.5rem;
      background: linear-gradient(135deg, #4A90E2 0%, #50E3C2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
      font-weight: 800;
      letter-spacing: -1px;
    }

    .subtitle {
      color: #718096;
      font-size: 1.15rem;
      margin-bottom: 1.5rem;
      font-weight: 400;
    }

    .tagline {
      color: #4a5568;
      font-size: 1.4rem;
      font-weight: 500;
      margin-bottom: 2.5rem;
    }

    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #4A90E2 0%, #50E3C2 100%);
      color: white;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      box-shadow: 0 10px 20px rgba(74, 144, 226, 0.2);
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 25px rgba(74, 144, 226, 0.35);
    }

    h2 {
      font-size: 1.8rem;
      color: #2d3748;
      margin-bottom: 1.5rem;
      font-weight: 700;
      position: relative;
      display: inline-block;
    }
    
    h2::after {
      content: '';
      position: absolute;
      width: 40px;
      height: 4px;
      background: #4A90E2;
      bottom: -10px;
      left: 0;
      border-radius: 2px;
    }

    .about-content p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      line-height: 1.8;
      color: #4a5568;
    }

    .mission {
      font-weight: 600;
      font-size: 1.2rem !important;
      color: #2b6cb0 !important;
      margin-top: 1.5rem;
    }

    .highlight-card {
      background: linear-gradient(135deg, rgba(74, 144, 226, 0.95) 0%, rgba(80, 227, 194, 0.95) 100%);
      color: white;
      border: none;
    }

    .highlight-card h2 {
      color: white;
    }
    .highlight-card h2::after {
      background: white;
    }

    .meeting-highlight {
      background: rgba(255, 255, 255, 0.15);
      padding: 2rem;
      border-radius: 16px;
      backdrop-filter: blur(10px);
      margin-top: 2rem;
    }

    .day-time {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .day-time .label {
      font-size: 1rem;
      opacity: 0.9;
    }

    .day-time .value {
      font-size: 2.2rem;
      font-weight: 800;
      line-height: 1.2;
    }

    .meeting-type {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .language-note {
      margin-top: 1.5rem;
      font-size: 1.05rem;
      line-height: 1.6;
      opacity: 0.95;
      background: rgba(255, 255, 255, 0.2);
      padding: 1rem 1.5rem;
      border-radius: 12px;
    }

    .badge {
      background: white;
      color: #4A90E2;
      padding: 0.5rem 1.2rem;
      border-radius: 30px;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    .location-details {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .address {
      font-size: 1.5rem;
      font-weight: 700;
      color: #4A90E2;
      margin-top: 1rem;
    }

    .access-info {
      background: rgba(255, 255, 255, 0.6);
      padding: 1.5rem;
      border-radius: 12px;
      border-left: 4px solid #4A90E2;
    }

    .access-title {
      font-weight: 700;
      margin-bottom: 1rem;
      color: #2d3748;
      font-size: 1.1rem;
    }

    .access-steps {
      margin-left: 1.5rem;
      color: #4a5568;
    }

    .access-steps li {
      margin-bottom: 0.5rem;
      font-size: 1.05rem;
    }

    .venue {
      color: #2d3748;
      font-size: 1.15rem;
    }

    .map-container {
      margin: 1.5rem 0;
      border-radius: 12px;
      overflow: hidden;
      background: #eee;
    }

    .section-intro {
      font-size: 1.1rem;
      color: #718096;
      margin-bottom: 2rem;
      margin-top: 1rem;
    }

    /* GRID FOR LISTS */
    .grid-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .grid-card {
      background: rgba(255, 255, 255, 0.8);
      padding: 2rem 1.5rem;
      border-radius: 16px;
      position: relative;
      box-shadow: 0 4px 15px rgba(0,0,0,0.02);
      transition: all 0.3s ease;
      border: 1px solid rgba(255,255,255,0.8);
    }

    .grid-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.06);
      background: white;
    }

    .grid-card .number {
      font-size: 4rem;
      font-weight: 800;
      color: rgba(74, 144, 226, 0.1);
      position: absolute;
      top: 5px;
      right: 15px;
      line-height: 1;
      user-select: none;
    }
    
    .grid-card p {
      position: relative;
      z-index: 1;
      font-size: 1.05rem;
      color: #4a5568;
      line-height: 1.6;
    }

    .contact {
      text-align: center;
    }

    .contact-intro {
      font-size: 1.1rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
      color: #718096;
    }

    .email-link {
      display: inline-block;
      font-size: 1.2rem;
      color: white;
      background: linear-gradient(135deg, #4A90E2 0%, #50E3C2 100%);
      text-decoration: none;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      transition: all 0.3s ease;
      font-weight: 600;
      box-shadow: 0 5px 15px rgba(74, 144, 226, 0.2);
    }

    .email-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(74, 144, 226, 0.4);
    }

    .phone-link {
      display: inline-block;
      font-size: 1.2rem;
      color: #2d3748;
      background: white;
      text-decoration: none;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      transition: all 0.3s ease;
      font-weight: 600;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      margin-top: 1rem;
      margin-left: 1rem;
      border: 1px solid #e2e8f0;
    }

    .phone-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    .confidentiality {
      margin-top: 2rem;
      font-size: 0.95rem;
      color: #a0aec0;
      font-style: italic;
    }

    footer {
      text-align: center;
      padding: 2rem 1rem;
      color: #a0aec0;
    }

    .footer-update {
      font-size: 0.9rem;
    }

    /* Animations */
    .fade-in {
      animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    .slide-up {
      opacity: 0;
      transform: translateY(30px);
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 3rem 1.5rem;
      }
      h1 {
        font-size: 2.5rem;
      }
      .background-wrapper {
        padding: 1rem 0.5rem;
      }
      .glass-card {
        padding: 2rem 1.5rem;
        border-radius: 16px;
      }
      .day-time .value {
        font-size: 1.8rem;
      }
      .phone-link {
        margin-left: 0;
      }
      .email-link, .phone-link {
        display: block;
        width: 100%;
        margin-top: 1rem;
      }
    }
  `]
})
export class AppComponent {
  groupName = 'Новое Начало';
  translationNote = 'Nowy Początek / Nowoje Naczało';
  tagline = 'Анонимные игроки Варшава';

  // About Gamblers Anonymous
  aboutGA = 'Анонимные Игроки (АИ) — это сообщество мужчин и женщин, которые делятся своим опытом, силами и надеждами друг с другом, чтобы решить свою общую проблему и помочь другим избавиться от компульсивной игровой зависимости.';
  mission = 'Единственное условие для членства — желание прекратить играть в азартные игры.';

  // Meeting details
  language = 'Русский язык';
  languageNote = '🗣️ Собрание ведется на русском языке, но вы можете свободно высказываться на любом удобном для вас языке (польском, белорусском, украинском и т.д.).';
  meetingType = 'Открытое собрание';
  schedule = 'Каждый четверг';
  time = '19:00 - 20:00';
  address = 'ul. Sienna 45 lok. 1, Warszawa';
  accessSteps = [
    'Домофон: Нажмите клавишу 1',
    'Введите код: 2011',
    'Поднимитесь на 1-й этаж',
    'Найдите Зал №2'
  ];
  venue = 'Штаб-квартира Stowarzyszenie NieGram.org, Зал №2';

  // 12 Steps
  stepsIntro = 'Программа выздоровления:';
  twelveSteps = [
    'Мы признали, что бессильны перед азартными играми, признали, что наша жизнь стала неуправляемой.',
    'Пришли к вере что Сила, более могущественная чем мы, может вернуть нас к нормальному образу мышления и жизни.',
    'Приняли решение препоручить нашу волю и наши жизни заботе этой Силы, как мы ее понимаем.',
    'Провели тщательную и бесстрашную моральную и финансовую инвентаризацию самих себя.',
    'Признали перед собой и перед другим человеком истинную природу наших недостатков.',
    'Полностью подготовили себя к избавлению от этих дефектов характера.',
    'Смиренно просили Бога (как мы Его понимали) исправить наши недостатки.',
    'Составили список всех людей, которым мы причинили вред, и обрели готовность возместить им всем ущерб.',
    'Напрямую возмещали причиненный этим людям ущерб при любой возможности, кроме тех случаев, когда это могло повредить им или кому-либо другому.',
    'Продолжали проводить личную инвентаризацию и, когда допускали ошибки, сразу же признавали это.',
    'Стремились через молитву и размышления улучшить наш осознанный контакт с Богом, как мы Его понимали , молясь лишь о знании Его воли в отношении нас и силе, чтобы исполнить ее.',
    'Прикладывая усилия, для того, чтобы применять эти принципы во всех наших делах, мы стремились нести наше послание другим компульсивным игрокам.'
  ];

  // 12 Traditions
  traditionsIntro = 'Программа единства:';
  twelveTraditions = [
    'Наше общее благополучие должно стоять на первом месте, личное выздоровление зависит от единства группы.',
    'Наши лидеры – лишь доверенные служащие, они не правят.',
    'Единственное требование для членства в Сообществе Анонимные Игроки – желание прекратить играть в азартные игры.',
    'Каждая группа должна быть самоуправляемой, за исключением вопросов, затрагивающих другие группы или АИ в целом.',
    'У Анонимных Игроков лишь одна главная цель – донести весть Сообщества до компульсивного игрока, который все еще страдает.',
    'Анонимные Игроки никогда не должны поддерживать или финансировать какую-либо родственную организацию или стороннюю компанию, а также разрешать им использование имени Анонимных Игроков, чтобы проблемы, связанные с деньгами, собственностью и престижем, не отвлекали нас от нашей главной цели.',
    'Каждая группа Анонимных Игроков должна полностью себя обеспечивать, отказываясь от материальной помощи извне.',
    'Анонимные Игроки должны всегда оставаться непрофессиональным объединением, однако наши центры обслуживания могут нанимать специализированных работников.',
    'Анонимным Игрокам, как сообществу, никогда не следует обзаводиться системой управления, однако мы можем создавать службы или комитеты, непосредственно ответственные перед теми, кого они обслуживают.',
    'Сообщество Анонимных Игроков не имеет мнения по посторонним вопросам, поэтому имя АИ не следует вовлекать в какие-либо общественные дискуссии.',
    'Наша политика связей с общественностью основана скорее на привлекательности, чем на пропаганде; мы должны всегда сохранять личную анонимность на уровне прессы, радио, кино, телевидения и Интернета.',
    'Анонимность является духовной основой программы Анонимных Игроков, постоянно напоминающей нам о необходимости ставить принципы выше личностей.'
  ];

  // Contact
  email = 'warszawanowy@anonimowihazardzisci.org';
  phone = "+48 511 111 399";

  // Footer
  lastUpdated = new Date().toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
