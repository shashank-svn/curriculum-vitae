import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shashank-curriculum-vitae';
  @HostListener('window:scroll', ['$event'])
   updateSrcollProgress(event) {
    let winScroll = event.target.scrollingElement.scrollTop;
    let height = event.target.scrollingElement.scrollHeight - event.target.scrollingElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.getElementById("scrollBar").style.width = scrolled + "%";
  }

  scrollToContactSection() {
   let el = document.getElementById('contact');
   el.scrollIntoView();
  }
}
