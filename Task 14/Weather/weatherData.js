const weather = async () => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    );

    if (!response.ok) {
      throw new Error("Couldn't retrieve weather data right now :(");
    }

    const jsonResponse = await response.json();
    const parisWeather = jsonResponse.current;
    const parisTemp = parisWeather["temperature_2m"];
    const parisWind = parisWeather["wind_speed_10m"];

    document.getElementById(
      "temperature"
    ).innerHTML = `the temp in paris is: ${parisTemp}\u00B0C`;
    document.getElementById(
      "windSpeed"
    ).innerHTML = `the wind speed in paris is: ${parisWind}km/h`;
  } catch (error) {
    console.error("Couldn't retrieve weather data right now :(", error);
    throw error;
  }
};

weather();

//this is returning the wrong time, showing 2 hours behing paris' actual time and I am not sure why
