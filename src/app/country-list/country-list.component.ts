import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Country} from './country';
import {CountryService} from './country.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, AfterViewInit {

  displayedColumns = ['country', 'state', 'code', 'phone'];
  dataSource = new MatTableDataSource<Country>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getData()
      .subscribe((countries) => this.getCountriesDataDone(countries),
        (err) => this.getCountriesDataFail(err));
  }

  getCountriesDataDone(countries) {
    this.dataSource.data = countries;
  }

  getCountriesDataFail(err) {
    console.log(err);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
