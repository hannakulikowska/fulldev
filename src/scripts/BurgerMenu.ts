export default class BurgerMenu {
  private checkbox: HTMLInputElement | null;

  private header: HTMLElement | null;

  private body: Element;

  constructor() {
    this.checkbox = document.getElementById('burger-checkbox') as HTMLInputElement;
    this.header = document.querySelector('.header');
    this.body = document.body;

    this.initEvents();
    this.initResizeListener();
  }

  private toggleNavigation(isActive: boolean): void {
    if (this.header) {
      this.header.classList.toggle('active', isActive);
      this.body.classList.toggle('no-scroll', isActive);
      if (this.checkbox) {
        this.checkbox.checked = isActive;
      }
    }
  }

  private initEvents(): void {
    if (this.checkbox) {
      this.checkbox.addEventListener('change', () => {
        if (this.checkbox) {
          this.toggleNavigation(this.checkbox.checked);
        }
      });
    }

    const links = document.querySelectorAll('.header__menu-link');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        this.toggleNavigation(false);
      });
    });
  }

  private initResizeListener(): void {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.checkbox && this.checkbox.checked) {
        this.toggleNavigation(false);
      }
    });
  }
}
