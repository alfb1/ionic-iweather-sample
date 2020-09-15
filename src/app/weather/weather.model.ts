export interface Weather{
        coord: string;
        lon: string;
        lat: string;
        weather :[{
            id: string;
            main: string;
            description: string;
            icon: string;
        }];
        base: string;
        main: {
          temp: string;
          feels_like: string;
          temp_min: string;
          temp_max: string;
          pressure: string;
          humidity: string;
        };
        visibility: string;
        wind: {
          speed: string;
          deg: string;
        };
        clouds: {
          all: string;
        };
        dt: string;
        sys: {
          type: string;
          id: string;
          message: string;
          country: string;
          sunrise: string;
          sunset: string;
        };
        timezone: string;
        id: string;
        name: string;
        cod: string;
      }
    