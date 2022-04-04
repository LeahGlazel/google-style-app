import { Component, OnInit } from '@angular/core';
import { DataFormat } from '../data-format.model';
import { SearchService } from '../search-service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  dataList?: DataFormat[];
  countRows?: number;
  searchText?: string;
  constructor(private searchSrv: SearchService) { }

  ngOnInit(): void {
  }

  searchData(searchText: string){
    this.searchText = searchText;

    this.searchSrv.getData(searchText, 0).subscribe(res => {
      this.dataList = res;
    });

    this.searchSrv.getCountData(searchText).subscribe(res => {
      this.countRows = res;
    });
  }

}
