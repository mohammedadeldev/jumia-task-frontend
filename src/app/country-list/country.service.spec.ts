import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { CountryService } from './country.service';

describe('CountryService', () => {

  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CountryService]
    });
    service = TestBed.get(CountryService);
  });

  it('should be created', inject([CountryService], (serviceComp: CountryService) => {
    expect(serviceComp).toBeTruthy();
  }));
});
