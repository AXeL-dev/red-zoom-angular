import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import packageJson from '../../../ngx-red-zoom/package.json';
import { render } from 'github-buttons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    version = packageJson.version;
    year = new Date().getFullYear();

    @ViewChild('buttons', {read: ViewContainerRef, static: true}) buttons: ViewContainerRef | undefined;

    constructor(
        private analytics: Angulartics2GoogleAnalytics,
    ) {}

    ngOnInit(): void {
        this.analytics.startTracking();

        if (this.buttons) {
            const buttons = this.buttons.element.nativeElement as Comment;

            render({
                href: 'https://github.com/scompiler/red-zoom-angular',
                'aria-label': 'Star scompiler/red-zoom-angular on GitHub',
                'data-size': 'large',
                'data-show-count': 'true',
                'data-text': 'Star',
            }, function (el) {
                buttons.parentNode?.insertBefore(el, buttons);
            })
        }
    }
}
