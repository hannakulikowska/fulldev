export default class AnimateOnScroll {
  private observer: IntersectionObserver | null = null;

  constructor(private selectors: string[]) {
    this.initObserver();
  }

  private initObserver(): void {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.observeElements();
  }

  private observeElements(): void {
    document.addEventListener('DOMContentLoaded', () => {
      this.selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => this.observer?.observe(element));
      });
    });
  }
}
