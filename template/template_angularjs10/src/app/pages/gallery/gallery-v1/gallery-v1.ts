import { Component } from '@angular/core';

@Component({
  selector: 'gallery-v1',
  templateUrl: './gallery-v1.html'
})

export class GalleryV1Page {
  gallery = {
    all: true,
    group1: false,
    group2: false,
    group3: false,
    group4: false
  };

  show(groupName) {
    this.gallery.all = (groupName == 'all') ? true : false;
    this.gallery.group1 = (groupName == 'group1') ? true : false;
    this.gallery.group2 = (groupName == 'group2') ? true : false;
    this.gallery.group3 = (groupName == 'group3') ? true : false;
    this.gallery.group4 = (groupName == 'group4') ? true : false;
  }
}
