import { Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef } from '@angular/core';
import { FileDownloadService } from '@app/core/services/file-download.service';
import uniqid from 'uniqid';

const DEFAULT_IMAGE = 'assets/svg/userpic.svg';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit, OnChanges {

  uniqueId = uniqid();
  hovered = false;
  imageSrc = DEFAULT_IMAGE;

  @Input() editable = false;
  @Input() fileName: string;
  @Output() changeFile = new EventEmitter<File>();
  @ContentChild('avatarError') avatarError: TemplateRef<any>;

  constructor(
    private fileDownloadService: FileDownloadService,
  ) { }

  ngOnInit() {
    this.getFile();
  }

  ngOnChanges() {
    this.getFile();
  }

  getFile() {
    if (this.fileName) {
      this.fileDownloadService.getFile(this.fileName).subscribe(
        (response) => {
          this.imageSrc = response.signed_url;
        },
        () => {
          this.imageSrc = DEFAULT_IMAGE;
        },
      );
    }
  }

  onDrop(event) {
    event.preventDefault();
    if (this.editable) {
      this.onFileChange(event, true);
    }
  }

  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.editable) {
      this.hovered = true;
    }
  }
  onDragLeave(event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.editable) {
      this.hovered = false;
    }
  }

  onFileChange(event, drop?: boolean) {
    const files = drop
      ? event.dataTransfer.files
      : event.target.files;

    if (files && files.length) {
      this.changeFile.emit(files[0]);
    }
    this.hovered = false;
  }

}
