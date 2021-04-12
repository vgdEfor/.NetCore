import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeGuard implements CanLoad {
  /** Wether the YouTube API should be called */
  private isInitialized = false;
  /** Wether the YouTube API has been initialized */
  private isLoaded = false;

  private isLoadedSubscriber = new BehaviorSubject<boolean>(this.isLoaded);

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    this.initYouTubeApiScript();
    return this.isLoadedSubscriber
      .pipe(first(isLoaded => isLoaded === true));
  }

  private initYouTubeApiScript() {
    if (this.isInitialized) { return; }
    this.isInitialized = true;

    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      this.isLoaded = true;
      this.isLoadedSubscriber.next(this.isLoaded);
      delete window.onYouTubeIframeAPIReady;
    };
  }
}
