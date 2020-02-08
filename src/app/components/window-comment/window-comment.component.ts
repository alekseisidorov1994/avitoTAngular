import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FetchService} from '../../services/fetch.service';
import {FormComment, Img} from '../../interfaces';

@Component({
  selector: 'app-window-comment',
  templateUrl: './window-comment.component.html',
  styleUrls: ['./window-comment.component.sass']
})
export class WindowCommentComponent implements OnInit {
  image: Img = null
  formComment: FormComment = {
    name: '',
    comment: ''
  }
  id = null
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fetchService: FetchService,
    ) { }

  ngOnInit(): void {
   this.getImage();
   this.disableScroll();
  }
  getImage() {
    this.route.params.subscribe((params: Params) => {
      this.fetchService.getBigImage(params.imageId)
        .subscribe((image: Img) => {
        this.image = image;
        this.id = image.id
        this.disableScroll(params.imageId)
        console.log(this.image);
      });
    });
  }

  submitComment() {
    if (!this.formComment.name.trim() || !this.formComment.comment.trim()){
      console.log( 'empty')
      this.router.navigate(['/'])
      return;
    }
    this.fetchService.postComment(this.id, this.formComment).subscribe((response: Response) => {
      if (response === null || response.status === 204){
        this.router.navigate(['/'])
        this.formComment = null
      }
    })
  }
  disableScroll(flag?) {
    if (flag) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

  }
}
