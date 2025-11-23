import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <header>
        <h1>{{ groupName }}</h1>
        <p class="subtitle">{{ translationNote }}</p>
        <p class="tagline">{{ tagline }}</p>
      </header>

      <main>
        <!-- About Gamblers Anonymous -->
        <section class="info-section highlight">
          <h2>Что такое Анонимные Игроки?</h2>
          <div class="about-content">
            <p>{{ aboutGA }}</p>
            <p class="mission">{{ mission }}</p>
            <div class="key-points">
              <div class="key-point" *ngFor="let point of keyPoints">
                <span class="icon">✓</span>
                <span>{{ point }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Meeting Details -->
        <section class="info-section meeting-cta">
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
        </section>

        <!-- Location -->
        <section class="info-section">
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
            <div class="map-notice">
              <p>💡 Мы встречаемся каждый четверг. Приходите без записи!</p>
            </div>
          </div>
        </section>

        <!-- 12 Steps -->
        <section class="info-section">
          <h2>12 Шагов Выздоровления</h2>
          <p class="section-intro">{{ stepsIntro }}</p>
          <ol class="steps-list">
            <li *ngFor="let step of twelveSteps">{{ step }}</li>
          </ol>
        </section>

        <!-- 12 Traditions -->
        <section class="info-section">
          <h2>12 Традиций Единства</h2>
          <p class="section-intro">{{ traditionsIntro }}</p>
          <ol class="traditions-list">
            <li *ngFor="let tradition of twelveTraditions">{{ tradition }}</li>
          </ol>
        </section>

        <!-- Contact -->
        <section class="info-section contact">
          <h2>Свяжитесь с нами</h2>
          <p class="contact-intro">Есть вопросы? Хотите узнать больше?</p>
          <a [href]="'mailto:' + email" class="email-link">
            {{ email }}
          </a>
          <p class="confidentiality">Все обращения конфиденциальны</p>
        </section>
      </main>

      <footer>
        <p class="footer-quote">{{ footerQuote }}</p>
        <p class="footer-update">Обновлено: {{ lastUpdated }}</p>
      </footer>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #2c3e50;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 3rem 2rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    h1 {
      font-size: 3rem;
      color: #667eea;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    .subtitle {
      color: #7f8c8d;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .tagline {
      color: #34495e;
      font-size: 1.3rem;
      font-weight: 500;
      margin-top: 1rem;
    }

    .info-section {
      background: white;
      padding: 2.5rem;
      margin-bottom: 2rem;
      border-radius: 12px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .info-section.highlight {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .info-section.highlight h2 {
      color: white;
      border-bottom-color: rgba(255, 255, 255, 0.3);
    }

    .info-section.meeting-cta {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
    }

    .info-section.meeting-cta h2 {
      color: white;
      border-bottom-color: rgba(255, 255, 255, 0.3);
    }

    h2 {
      font-size: 1.8rem;
      color: #34495e;
      margin-bottom: 1.5rem;
      border-bottom: 3px solid #667eea;
      padding-bottom: 0.5rem;
    }

    .about-content p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      line-height: 1.8;
    }

    .mission {
      font-weight: 600;
      font-size: 1.15rem !important;
    }

    .key-points {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .key-point {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.05rem;
    }

    .key-point .icon {
      background: rgba(255, 255, 255, 0.3);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
    }

    .meeting-highlight {
      background: rgba(255, 255, 255, 0.2);
      padding: 2rem;
      border-radius: 8px;
      backdrop-filter: blur(10px);
    }

    .meeting-time {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .day-time {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .day-time .label {
      font-size: 1rem;
      opacity: 0.9;
    }

    .day-time .value {
      font-size: 2rem;
      font-weight: 700;
    }

    .meeting-type {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .badge {
      background: rgba(255, 255, 255, 0.9);
      color: #667eea;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.95rem;
    }

    .location-details {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .address {
      font-size: 1.5rem;
      font-weight: 700;
      color: #667eea;
    }

    .access-info {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 8px;
      border-left: 4px solid #667eea;
    }

    .access-title {
      font-weight: 700;
      margin-bottom: 1rem;
      color: #34495e;
      font-size: 1.1rem;
    }

    .access-steps {
      margin-left: 1.5rem;
      color: #2c3e50;
    }

    .access-steps li {
      margin-bottom: 0.5rem;
      font-size: 1.05rem;
    }

    .venue {
      color: #2c3e50;
      font-size: 1.1rem;
    }

    .map-notice {
      background: #e3f2fd;
      padding: 1rem;
      border-radius: 8px;
      border-left: 4px solid #2196f3;
    }

    .map-notice p {
      color: #1565c0;
      font-weight: 600;
      margin: 0;
    }

    .section-intro {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 1.5rem;
      font-style: italic;
    }

    .steps-list, .traditions-list {
      margin-left: 1.5rem;
      counter-reset: item;
    }

    .steps-list li, .traditions-list li {
      margin-bottom: 1rem;
      color: #2c3e50;
      font-size: 1.05rem;
      line-height: 1.7;
      padding-left: 0.5rem;
    }

    .steps-list li:hover, .traditions-list li:hover {
      background: #f8f9fa;
      border-radius: 4px;
      padding: 0.5rem;
      margin-left: -0.5rem;
    }

    .contact {
      text-align: center;
    }

    .contact-intro {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      color: #555;
    }

    .email-link {
      display: inline-block;
      font-size: 1.3rem;
      color: white;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      text-decoration: none;
      padding: 1rem 2rem;
      border-radius: 50px;
      transition: all 0.3s ease;
      font-weight: 600;
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }

    .email-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
    }

    .confidentiality {
      margin-top: 1rem;
      font-size: 0.95rem;
      color: #7f8c8d;
      font-style: italic;
    }

    footer {
      text-align: center;
      padding: 3rem 1rem;
      color: white;
    }

    .footer-quote {
      font-size: 1.2rem;
      font-style: italic;
      margin-bottom: 1rem;
      opacity: 0.9;
    }

    .footer-update {
      font-size: 0.9rem;
      opacity: 0.7;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      .container {
        padding: 1rem 0.5rem;
      }

      .info-section {
        padding: 1.5rem;
      }

      header {
        padding: 2rem 1rem;
      }

      .day-time .value {
        font-size: 1.5rem;
      }

      .steps-list li, .traditions-list li {
        font-size: 0.95rem;
      }
    }
  `]
})
export class AppComponent {
  groupName = 'Новое Начало';
  translationNote = 'Nowe Początki / Nowoje Naczało';
  tagline = 'Анонимные игроки Варшава';

  // About Gamblers Anonymous
  aboutGA = 'Анонимные Игроки (АИ) — это сообщество мужчин и женщин, которые делятся своим опытом, силами и надеждами друг с другом, чтобы решить свою общую проблему и помочь другим избавиться от компульсивной игровой зависимости.';
  mission = 'Единственное условие для членства — желание прекратить играть в азартные игры.';
  keyPoints = [
    'Собрания полностью бесплатны и анонимны',
    'Нет вступительных или членских взносов',
    'Используется программа 12 шагов',
    'Поддержка людей с похожим опытом',
    'Можно прийти без записи'
  ];

  // Meeting details
  language = 'Русский язык';
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
  stepsIntro = 'Программа 12 шагов — это программа выздоровления от игровой зависимости:';
  twelveSteps = [
    'Мы признали свое бессилие перед азартными играми, признали, что наша жизнь стала неуправляемой.',
    'Пришли к убеждению, что только Сила, более могущественная, чем наша собственная, может вернуть нам здравомыслие и нормальную жизнь.',
    'Приняли решение препоручить нашу волю и нашу жизнь заботе этой Силы, как мы ее понимали.',
    'Провели тщательную и бесстрашную моральную и финансовую инвентаризацию своей жизни.',
    'Признали перед собой и каким-либо другим человеком истинную природу наших заблуждений.',
    'Полностью подготовили себя к тому, чтобы эта Сила избавила нас от всех наших недостатков характера.',
    'Смиренно попросили эту Силу устранить наши изъяны.',
    'Составили список всех тех людей, кому мы причинили вред, и преисполнились желанием возместить им всем ущерб.',
    'Лично возмещали причиненный этим людям ущерб, где только возможно, кроме тех случаев, когда это могло повредить им или кому-либо другому.',
    'Продолжали самоанализ, и когда допускали ошибки, сразу признавали это.',
    'Стремились путем молитвы и размышления углубить соприкосновение с этой Силой, как мы ее понимали, молясь лишь о знании Ее воли, которую нам надлежит исполнить, и о даровании силы для этого.',
    'Достигнув духовного пробуждения, к которому привели эти шаги, мы старались донести смысл наших идей до других компульсивных игроков и применять эти принципы во всех наших делах.'
  ];

  // 12 Traditions
  traditionsIntro = '12 шагов к единству. Наш опыт показывает, что для для поддержания единства необходимо следующее:';
  twelveTraditions = [
    'Наше общее благополучие должно стоять на первом месте; личное выздоровление зависит от единства группы.',
    'Наши лидеры – лишь доверенные служащие, а не правят.',
    'Единственное требование для членства в Сообществе Анонимные Игроки – желание прекратить играть в азартные игры.',
    'Каждая группа должна быть самоуправляемой, за исключением вопросов, затрагивающих другие группы или АИ в целом.',
    'У Анонимных Игроков лишь одна главная цель – донести весть Сообщества до компульсивного игрока, который все еще страдает.',
    'Группа АИ никогда не должна поддерживать, финансировать или предоставлять имя АИ какой-либо родственной организации или постороннему предприятию, чтобы проблемы, связанные с деньгами, собственностью и престижем не отвлекали нас от нашей главной цели.',
    'Каждая группа АИ должна быть полностью самостоятельной, отклоняя любую внешнюю помощь.',
    'Анонимные Игроки всегда должны оставаться непрофессиональными.',
    'В качестве таковые, группы АИ никогда не должны быть организованными, но мы можем создавать службы или комитеты, непосредственно ответственные перед теми, кого они обслуживают.',
    'Анонимные Игроки не имеют мнения по посторонним вопросам; поэтому имя АИ никогда не должно быть втянутым в публичные дискуссии.',
    'Наша политика связей с общественностью основана на привлекательности, а не на пропаганде; мы должны всегда сохранять личную анонимность на уровне прессы, радио, фильмов, телевидения и Интернета.',
    'Анонимность — духовная основа программы Анонимных Игроков, постоянно напоминающая нам о том, что главным являются принципы, а не личности.'
  ];

  // Contact
  email = 'warszawianowy@anonimowihazardzisci.org';

  // Footer
  footerQuote = 'Только сегодня — вместе мы сильнее';
  lastUpdated = new Date().toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
