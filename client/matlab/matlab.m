load('sensor_data.mat');

time = sensor_data(:, 1);
temperature = sensor_data(:, 2);
humidity = sensor_data(:, 3);
pressure = sensor_data(:, 4);

temperature_model = fit(time, temperature, 'poly1'); % Linear regression model

humidity_model = fit(time, humidity, 'poly2'); % Quadratic regression model

pressure_model = fit(time, pressure, 'smoothingspline'); % Smoothing spline model

predicted_temperature = feval(temperature_model, time);
predicted_humidity = feval(humidity_model, time);
predicted_pressure = feval(pressure_model, time);

figure;
plot(time, temperature, 'b', time, predicted_temperature, 'r--');
xlabel('Time');
ylabel('Temperature');
legend('Sensor Data', 'Predicted Data');
title('Temperature Prediction');

figure;
scatter(time, humidity, 'filled', 'b');
hold on;
plot(time, predicted_humidity, 'r--');
xlabel('Time');
ylabel('Humidity');
legend('Sensor Data', 'Predicted Data');
title('Humidity Prediction');

figure;
scatter(time, pressure, 'filled', 'b');
hold on;
plot(time, predicted_pressure, 'r--');
xlabel('Time');
ylabel('Pressure');
legend('Sensor Data', 'Predicted Data');
title('Pressure Prediction');