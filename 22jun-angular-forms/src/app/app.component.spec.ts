import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { WxServiceService } from './services/wx.service';
import { GeocodeService } from './services/geocode.service';
import { ReactiveFormsModule } from '@angular/forms';

// Mock response
const wxServiceMock = {
  getCurrentWeather: jasmine.createSpy('getCurrentWeather').and.returnValue(of({
    current: { temp: 75, humidity: 80, pressure: 100 }
  }))
};

const geoCodeServiceMock = {
  getGeocode: jasmine.createSpy('getGeocode').and.returnValue(of({ lat: 42, lon: -71 }))
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AppComponent],
      providers: [
        { provide: WxServiceService, useValue: wxServiceMock },
        { provide: GeocodeService, useValue: geoCodeServiceMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should generate response after submit', () => {
    // Trigger the submit function
    component.getWeatherByCityWay3();

    // Make sure the mock call was made
    expect(geoCodeServiceMock.getGeocode).toHaveBeenCalled();
    expect(wxServiceMock.getCurrentWeather).toHaveBeenCalled();

    // Ensure response was saved in the component
    expect(component.temperature).toEqual(75);
    expect(component.humidity).toEqual(80);
    expect(component.pressure).toEqual(100);
  });

  it('should contain temperature key in the response', () => {
    component.getWeatherByCityWay3();

    // Check if the response contains a temperature key
    expect(component.temperature).toBeDefined();
  });
});
