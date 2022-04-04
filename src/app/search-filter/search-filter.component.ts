import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  searchFrm: FormGroup;
  @Output() searchData: EventEmitter<string> = new EventEmitter();
  
  constructor() { 
    this.searchFrm = new FormGroup({
      searchText: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  search(){
    if(this.searchFrm.controls['searchText'].value != "")
      this.searchData.emit(this.searchFrm.controls['searchText'].value);
  }

  reset(){
    this.searchFrm.reset();
  }
}
