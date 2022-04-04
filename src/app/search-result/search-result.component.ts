import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DataFormat } from '../data-format.model';
import { SearchService } from '../search-service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() dataList?: DataFormat[];
  @Input() searchText?: string;
  @Input() countData?: number;

  constructor(private searchSrv: SearchService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['dataList'] && changes['dataList'].previousValue != changes['dataList'].currentValue){
      this.addBoldElements();
    }
  }

  addBoldElements(){
    let searchTextArr = this.searchText?.split(' ');

    this.dataList?.forEach((data: DataFormat) => {
      data.text = data.text!.split(' ').map(x => {
        return searchTextArr?.includes(x.replace(/\./g,'')) ? "<b>" + x + "</b>" : x;
      }).join(' ');
    });
  }

  changePage(page: any){
    this.searchSrv.getData(this.searchText!, 10 * page.pageIndex).subscribe(res => {
      this.dataList = res;
      this.addBoldElements();
    });
  }
}
