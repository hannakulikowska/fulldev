export default class AnimationObserver {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(this.handleIntersect, {
      rootMargin: '0px',
      threshold: 0.1,
    });
  }

  private handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in-left');
        observer.unobserve(entry.target);
      }
    });
  }

  public observe(selector: string): void {
    document.querySelectorAll(selector).forEach((element: Element) => {
      this.observer.observe(element);
    });
  }
}
