import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { PortfolioData } from '../models/portfolio.model';

/**
 * Loads all portfolio content from src/assets/data/portfolio.json.
 *
 * Every section component reads from this single source of truth, so
 * adding a project / skill / experience entry only ever means editing
 * the JSON file — no component or template changes required.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private http = inject(HttpClient);
  private dataUrl = 'assets/data/portfolio.json';

  private data$?: Observable<PortfolioData>;

  getData(): Observable<PortfolioData> {
    if (!this.data$) {
      this.data$ = this.http
        .get<PortfolioData>(this.dataUrl)
        .pipe(shareReplay({ bufferSize: 1, refCount: false }));
    }
    return this.data$;
  }
}
