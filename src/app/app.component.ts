import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [CommonModule],
    template: `
    <div class="container">
      <header>
        <h1>{{ groupName }}</h1>
        <p class="subtitle">{{ translationNote }}</p>
      </header>

      <main>
        <section class="info-section">
          <h2>Szczegóły Spotkania</h2>
          <div class="info-grid">
            <div class="info-item">
              <span class="label">Język:</span>
              <span class="value">{{ language }}</span>
            </div>
            <div class="info-item">
              <span class="label">Typ:</span>
              <span class="value">{{ meetingType }}</span>
            </div>
            <div class="info-item">
              <span class="label">Termin:</span>
              <span class="value">{{ schedule }}</span>
            </div>
            <div class="info-item">
              <span class="label">Godzina:</span>
              <span class="value">{{ time }}</span>
            </div>
          </div>
        </section>

        <section class="info-section">
          <h2>Lokalizacja</h2>
          <div class="location-details">
            <p class="address">{{ address }}</p>
            <div class="access-info">
              <p class="access-title">Dostęp do budynku:</p>
              <ol class="access-steps">
                <li *ngFor="let step of accessSteps">{{ step }}</li>
              </ol>
            </div>
            <p class="venue">
              <strong>Miejsce:</strong> {{ venue }}
            </p>
          </div>
        </section>

        <section class="info-section contact">
          <h2>Kontakt</h2>
          <a [href]="'mailto:' + email" class="email-link">
            {{ email }}
          </a>
        </section>
      </main>

      <footer>
        <p>Ostatnia aktualizacja: {{ lastUpdated }}</p>
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
      color: #333;
      background: #f5f5f5;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: #7f8c8d;
      font-size: 1rem;
    }

    .info-section {
      background: white;
      padding: 2rem;
      margin-bottom: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    h2 {
      font-size: 1.5rem;
      color: #34495e;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid #3498db;
      padding-bottom: 0.5rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .info-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .label {
      font-weight: 600;
      color: #7f8c8d;
      font-size: 0.9rem;
    }

    .value {
      font-size: 1.1rem;
      color: #2c3e50;
    }

    .location-details {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .address {
      font-size: 1.3rem;
      font-weight: 600;
      color: #2c3e50;
    }

    .access-info {
      background: #ecf0f1;
      padding: 1rem;
      border-radius: 4px;
    }

    .access-title {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #34495e;
    }

    .access-steps {
      margin-left: 1.5rem;
      color: #2c3e50;
    }

    .access-steps li {
      margin-bottom: 0.25rem;
    }

    .venue {
      color: #2c3e50;
    }

    .contact {
      text-align: center;
    }

    .email-link {
      display: inline-block;
      font-size: 1.2rem;
      color: #3498db;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border: 2px solid #3498db;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .email-link:hover {
      background: #3498db;
      color: white;
    }

    footer {
      text-align: center;
      padding: 2rem 0;
      color: #7f8c8d;
      font-size: 0.9rem;
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

      .info-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AppComponent {
  groupName = 'Nowe Początki';
  translationNote = 'Новое Начало / Nowoje Naczało';
  language = 'Rosyjski';
  meetingType = 'Spotkanie Otwarte';
  schedule = 'Czwartki';
  time = '19:00 - 20:00';
  address = 'ul. Sienna 45 lok. 1';
  accessSteps = [
    'Domofon: Naciśnij klawisz 1',
    'Wprowadź kod: 2011'
  ];
  venue = 'Stowarzyszenie NieGram.org, Sala nr 2';
  email = 'warszawianowy@anonimowihazardzisci.org';
  lastUpdated = new Date().toLocaleDateString('pl-PL');
}
