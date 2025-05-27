import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {UserDetailsService} from 'app/shared/user/user.details.service'


@Pipe({
    name: 'avatarPipe'
})
export class AvatarUrlPipe implements PipeTransform {
    constructor(private domSn: DomSanitizer,
                private userDetails: UserDetailsService) {
    }

    transform(username: string, force = false): Observable<string> {
        return Observable.create((observer) => this.userDetails
            .drawImage(username, force)
            .subscribe(htmlEl => observer.next(this.domSn.bypassSecurityTrustHtml(htmlEl.outerHTML)))
        );
    }
}
