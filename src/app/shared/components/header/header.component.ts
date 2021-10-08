import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
/*
  callParentselectLang(lang) {
    const url = this.langService.switchedURL();
    if (url === "") {
      localStorage.setItem("selectedLang", lang);
      location.reload();
    } else {
      const querryParamas = { ...this.langService.currentQuerryParams };
      this.langService.currentQuerryParams = {};
      this.router.navigate([url], { queryParams: querryParamas });
    }
  }
  */
}
